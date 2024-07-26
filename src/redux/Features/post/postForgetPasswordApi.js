import { baseApi } from "../../api/baseApi";


const postForgetPasswordApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        postForgetPassword: builder.mutation({
        query: (data) => {
            console.log("aimannnnnnnnnnnnnnnnnn",data);
            return {
              url: `/user/forgot-password`,
              method: 'POST',
              body: {email: data},
          } 
        },
        // invalidatesTags: ["Groups"],
      }),
    }),
   
  });
  
  export const { usePostForgetPasswordMutation } = postForgetPasswordApi;