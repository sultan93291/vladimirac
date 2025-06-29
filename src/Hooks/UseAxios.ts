import axios, { AxiosInstance } from "axios";

const useAxios = (token: string | null = null): AxiosInstance => {
  const authToken =
    token ||
    (typeof window !== "undefined" ? localStorage.getItem("token") : null);

  const headers: Record<string, string> = {
    Accept: "application/json",
  };

  if (authToken) {
    headers["Authorization"] = `Bearer ${authToken}`;
  }

  return axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_URL,
    headers,
  });
};

export default useAxios;
