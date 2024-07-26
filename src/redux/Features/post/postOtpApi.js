import { baseApi } from "../../api/baseApi";


const postOtpApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        postOtp: builder.mutation({
        query: (data) => {
            console.log("aimannnnnnnnnnnnnnnnnn",data);
            return {
              url: `/user/verify-code`,
              method: 'POST',
              body: data,
          }
        },
        // invalidatesTags: ["PrivacyPolicy"],
      }),
    }),
   
  });
  
  export const { usePostOtpMutation } = postOtpApi;