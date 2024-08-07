import { useState } from "react";
import { getAuth } from "../utils/AuthHelpers";

const baseUrl = import.meta.env.VITE_BASE_URL;

interface Pagination {
  limit: number;
  offset: number;
}

export interface ApiResponse<T> {
  data: T;
  pagination?: Pagination;
}

interface FetchError extends Error {
  response?: Response;
}

export const useGet = <T,>() => {
  const [data, setData] = useState<ApiResponse<T> | null>(null);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState<FetchError | null>(null);

  const getData = async (url: string): Promise<ApiResponse<T> | null> => {
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
        const fetchError: FetchError = new Error("Network response was not ok");
        fetchError.response = response;
        setError(fetchError);
        throw fetchError;
      }

      const data: ApiResponse<T> = await response.json();
      setData(data);
      setLoading(false);
      return data;
    } catch (error) {
      setError(error as FetchError);
      setLoading(false);
      return null;
    }
  };

  return { data, isLoading, error, getData };
};
