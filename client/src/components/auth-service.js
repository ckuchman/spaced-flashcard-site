import { Redirect } from "react-router";
import { BehaviorSubject } from "rxjs";
import { fetchCall } from "./helpers";
import jwt_decode from "jwt-decode";

const currentUserSubject = new BehaviorSubject(
  JSON.parse(localStorage.getItem("currentUser"))
);

/* methods provided by the authentication service */
export const authService = {
  login,
  logout,
  authHeader,
  newUser,
  updateUserData,
  isAuthenticated,
  currentUser: currentUserSubject.asObservable(),
  get currentUserValue() {
    return currentUserSubject.value;
  },
};

/* store userData in local storage and update authentication state by
 * pushing to the observable */
async function login(userData) {
  localStorage.setItem("currentUser", JSON.stringify(userData));
  currentUserSubject.next(userData);
}

/* log user out: clear localStorage and push null to observable */
function logout() {
  alert("logout function called!");
  localStorage.clear();
  currentUserSubject.next(null);
}

function isAuthenticated() {
  return !authService.currentUserValue || !localStorage.getItem("currentUser")
    ? false
    : !(
        new Date(1000 * jwt_decode(authService.currentUserValue.refresh).exp) >
        new Date()
      )
    ? false
    : true;
}

/* re-authenticate user (refresh jwt) */
/* TODO */
async function updateUserData() {
  let payload = {
    url: process.env.REACT_APP_BASE_URL + "auth/jwt/refresh",
    method: "POST",
    auth: false,
    body: {
      refresh: authService.currentUserValue.refresh,
    },
  };
  try {
    let response = await fetchCall(payload);
    console.log("refreshing user jwt, response is:", JSON.stringify(response));
    let local = JSON.parse(localStorage.getItem("currentUser"));
    local.access = response.access;
    localStorage.setItem("currentUser", JSON.stringify(local));
    currentUserSubject.next(local);
    return;
  } catch (err) {
    /* TODO: error handling... */
    alert("error refreshing jwt!  logging you out!");
    console.error(err);
    authService.logout();
    return <Redirect to="/login" />;
  }
}

/* if new user has registered, logs them in and sets state */
function newUser(res) {
  if (!res.refresh || !res.access) {
    /* should not be possible */
    return logout();
  }
  localStorage.setItem("currentUser", JSON.stringify(res));
  currentUserSubject.next(res);
}

/* returns HTTP authorization header containing JWT of currently logged-in
 * user, otherwise empty object if user not logged in */
async function authHeader() {
  const currentUser = authService.currentUserValue;
  if (currentUser && currentUser.access) {
    return {
      "Content-Type": "application/json",
      Authorization: `JWT ${currentUser.access}`,
    };
  } else {
    return {};
  }
}
