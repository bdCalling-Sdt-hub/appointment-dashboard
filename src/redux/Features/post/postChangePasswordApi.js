import { baseApi } from "../../api/baseApi";


const postChangePasswordApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        postChangePassword: builder.mutation({
        query: ({oldPassword, newPassword}) => {
            console.log(oldPassword, newPassword);
            
            return {
              url: `/user/change-password`,
              method: 'POST',
              body:{oldPassword, newPassword},
          } 
        },
        // invalidatesTags: ["category"],
      }),
    }),
   
  });
  
  export const { usePostChangePasswordMutation } = postChangePasswordApi;