import { useState } from "react";
import { getAuth } from "../utils/AuthHelpers";

const baseUrl = import.meta.env.VITE_BASE_URL;

export const useFetch = () => {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const postData = async (url: string, body) => {
    const token = getAuth("token");
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Authorization", `${token}`);

    try {
      setLoading(true);
      const response = await fetch(`${baseUrl}${url}`, {
        method: "POST",
        headers,
        body: JSON.stringify(body),
      });

      if (!response.ok) {
        setError("Network response was not ok");
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      setData(data);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
      console.error(error);
    }
  };

  const getData = async (url: string) => {
    const token = getAuth("token");
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Authorization", `${token}`);

    try {
      setLoading(true);
      const response = await fetch(`${baseUrl}${url}`, {
        method: "GET",
        headers,
      });

      if (!response.ok) {
        setError("Network response was not ok");
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      setData(data);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  return { data, isLoading, error, postData, getData };
};
