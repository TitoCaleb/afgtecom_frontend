const token = import.meta.env.VITE_TOKEN;

export function UseToken() {
  const getToken = async () => {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Authorization", `Bearer ${token}`);

    const controller = new AbortController();
    const signal = controller.signal;

    try {
      const response = await fetch(
        "http://localhost:3000/security/generate_token",
        {
          method: "POST",
          headers,
          signal,
        }
      );
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("There was a problem with your fetch operation:", error);
    }
  };

  return { getToken };
}
