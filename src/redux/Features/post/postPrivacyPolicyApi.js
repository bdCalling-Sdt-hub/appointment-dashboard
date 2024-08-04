import { baseApi } from "../../api/baseApi";

const postPrivacyPolicyApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    postPrivacyPolicy: builder.mutation({
      query: (data) => {
        return {
          url: `/settings/privacy-policy`,
          method: "PUT",
          body: data,
        };
      },
      invalidatesTags: ["PrivacyPolicy"],
    }),
  }),
});

export const { usePostPrivacyPolicyMutation } = postPrivacyPolicyApi;
