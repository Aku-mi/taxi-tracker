import axios, { AxiosResponse } from "axios";

// const base = 'https://akumi.me/api/v1';
const base = "http://localhost:4000/api/v1";

export const Post = async <T>(
  url: string,
  body: object,
  token: string = "",
  r: boolean = false
): Promise<AxiosResponse<T>> => {
  return await axios.post(url, body, {
    withCredentials: true,
    baseURL: r ? "" : base,
    headers: {
      Authorization: `bearer ${token}`,
      "Access-Control-Allow-Origin": "*",
    },
  });
};

export const Get = async <T>(
  url: string,
  token: string = "",
  r: boolean = false
): Promise<AxiosResponse<T>> => {
  return await axios.get(url, {
    withCredentials: true,
    baseURL: r ? "" : base,
    headers: {
      Authorization: `bearer ${token}`,
    },
  });
};
