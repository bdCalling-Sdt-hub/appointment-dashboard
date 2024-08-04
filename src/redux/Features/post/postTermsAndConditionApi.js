import { baseApi } from "../../api/baseApi";

const postTermsAndConditionApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    postTermsAndCondition: builder.mutation({
      query: (data) => {
        console.log("data", data);
        return {
          url: `/settings/terms-condition`,
          method: "PUT",
          body: data,
        };
      },
      invalidatesTags: ["TermsAndConditions"],
    }),
  }),
});

export const { usePostTermsAndConditionMutation } = postTermsAndConditionApi;