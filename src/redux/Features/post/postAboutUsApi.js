import { baseApi } from "../../api/baseApi";

const postAboutUsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    postAboutUs: builder.mutation({
      query: (data) => {
        console.log("data", data);
        return {
          url: `/settings/about-us`,
          method: "PUT",
          body: data,
        };
      },
      invalidatesTags: ["AboutUs"],
    }),
  }),
});

export const { usePostAboutUsMutation } = postAboutUsApi;