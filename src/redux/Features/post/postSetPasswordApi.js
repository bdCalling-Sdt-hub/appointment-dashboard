import { baseApi } from "../../api/baseApi";


const postSetPasswordApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        postSetPassword: builder.mutation({
        query: (data) => {
            return {
              url: `/user/set-password`,
              method: 'POST',
              body: data,
          } 
        },
        // invalidatesTags: ["TermsAndConditions"],
      }),
    }),
   
  });
  
  export const { usePostSetPasswordMutation } = postSetPasswordApi;