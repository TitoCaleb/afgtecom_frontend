import * as AuthHelpers from "../utils/AuthHelpers";

const token = import.meta.env.VITE_TOKEN;
const baseUrl = import.meta.env.VITE_BASE_URL;

export function useToken() {
  const getToken = async () => {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Authorization", `Bearer ${token}`);

    const controller = new AbortController();
    const signal = controller.signal;

    try {
      const response = await fetch(`${baseUrl}/security/generate_token`, {
        method: "POST",
        headers,
        signal,
      });
      if (!response.ok) {
        throw new Error("There was a problem with your fetch operation");
      }
      const { token } = await response.json();
      AuthHelpers.setAuth(token, "token");
    } catch (error) {
      console.error("There was a problem with your fetch operation:", error);
    }
  };

  return { getToken };
}
