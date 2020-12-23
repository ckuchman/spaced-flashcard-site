import { authService } from "./auth-service";

/* general configurable helper function to send POST requests to the server */
export async function fetchCall(payload) {
  console.log(authService.currentUserValue);
  if (payload.auth && authService.currentUserValue.refresh) {
    /* refresh the jwt */
    await authService.updateUserData();
  }
  let response = await fetch(payload.url, {
    method: payload.method,
    headers: payload.auth
      ? await authService.authHeader()
      : { "Content-Type": "application/json" },
    body: JSON.stringify(payload.body),
  });
  let statusCode = response.status;
  let returnData = await response.json();
  console.log(
    `responsse received from fetch: ${JSON.stringify(
      returnData
    )} with status code: ${statusCode}`
  );
  if (!(statusCode >= 400)) {
    console.log(`the status code is ${statusCode}, so i'm returning`);
    return returnData;
  }
  const returnError = {
    type: "error",
    message: returnData.detail || returnData.error || "Something went wrong!",
    status: statusCode,
    statusText: response.statusText,
    data: returnData,
  };
  let error = new Error();
  error = { ...error, ...returnError };
  throw error;
}
