import { authService } from "./auth-service";

/* general configurable helper function to send POST requests to the server */
export async function fetchCall(payload) {
    let response = await fetch(payload.url, {
      method: payload.method,
      headers: payload.auth
        ? await authService.authHeader()
        : { "Content-Type": "application/json" },
      body: JSON.stringify(payload.body),
    });
    if (response.status >= 400) {
        /* TODO: error handle */
    } else {
      return await response.json();
    }
  }