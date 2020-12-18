import { BehaviorSubject } from "rxjs";

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
  localStorage.clear();
  currentUserSubject.next(null);
}

/* re-authenticate user (refresh jwt) */
/* TODO */
async function updateUserData() {
  return;
}

/* if new user has registered, logs them in and sets state */
function newUser(res) {
  if (!res.accessToken || !res.userData) {
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
  if (currentUser && currentUser.accessToken) {
    return {
      "Content-Type": "application/json",
      Authorization: `Bearer ${currentUser.accessToken}`,
    };
  } else {
    return {};
  }
}
