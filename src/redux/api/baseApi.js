import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


// "http://192.168.10.35:8000/api"

export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    // baseUrl: "http://167.71.191.220:3000/api/v1",
    baseUrl: "https://api.medroofurgentcare.com/api/v1",
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
  tagTypes: ["category","withdraw","percentage","TermsAndConditions","PrivacyPolicy","AboutUs","user"],
  endpoints: () => ({}),
});

// export const {useGetUserQuery} = baseApi;