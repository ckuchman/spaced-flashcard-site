import { BehaviorSubject } from "rxjs";
import { fetchCall } from "./helpers";
import jwt_decode from "jwt-decode";
import { toast } from "react-toastify";

const currentUserSubject = new BehaviorSubject(
  JSON.parse(localStorage.getItem("currentUser"))
);

/* methods provided by the authentication service */
export const authService = {
  login,
  logout,
  authHeader,
  updateUserData,
  isAuthenticated,
  currentUser: currentUserSubject.asObservable(),
  get currentUserValue() {
    return currentUserSubject.value;
  },
};

/* store userData in local storage and update authentication state by
 * pushing to the observable */
async function login(res) {
  if (!res.refresh || !res.access || !res.userData?.id) {
    /* should not be possible */
    authService.logout();
    return;
  }
  localStorage.setItem("currentUser", JSON.stringify(res));
  currentUserSubject.next(res);
}

/* log user out: clear localStorage and push null to observable */
function logout() {
  //alert("logout function called!");
  localStorage.clear();
  currentUserSubject.next(null);
}

function validateExp(token) {
  return new Date(1000 * jwt_decode(token).exp) > new Date() ? true : false;
}

function isAuthenticated() {
  return !authService.currentUserValue ||
    !localStorage.getItem("currentUser") ||
    !authService.currentUserValue.refresh ||
    !validateExp(authService.currentUserValue.refresh)
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
      refresh: authService.currentUserValue?.refresh,
    },
  };
  try {
    let local = JSON.parse(localStorage.getItem("currentUser"));
    if (!local.refresh || !validateExp(local.refresh)) {
      throw new Error("User not logged in or expired credentials!");
    }
    let response = await fetchCall(payload);
    local.access = response.access;
    localStorage.setItem("currentUser", JSON.stringify(local));
    currentUserSubject.next(local);
  } catch (err) {
    /* TODO: error handling... */
    toast.error(err.message);
    authService.logout();
  }
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
