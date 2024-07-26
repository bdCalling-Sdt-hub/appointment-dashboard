import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


// "http://192.168.10.35:8000/api"

export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://192.168.10.46:3000/api/v1",
    prepareHeaders: (headers, { getState }) => {
      const token = localStorage.getItem("token");
      console.log("token----=-=-=-==-=-=",token);
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      headers.set("X-Custom-Header", "foobar");
      return headers;
    },
  }),
  tagTypes: ["category"],
  endpoints: () => ({}),
});

// export const {useGetUserQuery} = baseApi;