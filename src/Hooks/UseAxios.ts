import axios, { AxiosInstance } from "axios";

const useAxios = (token: string | null = null): AxiosInstance => {
  const authToken =
    token ||
    (typeof window !== "undefined" ? localStorage.getItem("authToken") : null);

  const headers: Record<string, string> = {
    "Content-Type": "application/json",
    Accept: "application/json",
  };

  if (authToken) {
    headers["Authorization"] = `Bearer ${authToken}`;
  }

  const axiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_URL,
    headers,
  });

  return axiosInstance;
};

export default useAxios;
