"use client";

import { useEffect, useState } from "react";
import useAxios from "./UseAxios";

interface FetchDataResult<T> {
  data: T | null;
  error: string | null;
  isLoading: boolean;
}

function useFetchData<T>(
  url: string | null,
  token: string | null = null
): FetchDataResult<T> {
  const axiosInstance = useAxios(token);
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    if (!url) return;

    setIsLoading(true);
    setError(null);

    axiosInstance
      .get<T>(url)
      .then(response => setData(response.data))
      .catch(err =>
        setError(err?.response?.data?.message || "Something went wrong")
      )
      .finally(() => setIsLoading(false));
  }, [url, token, axiosInstance]);

  return { data, error, isLoading };
}

export default useFetchData;
