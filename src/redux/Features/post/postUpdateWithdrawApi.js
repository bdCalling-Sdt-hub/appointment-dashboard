import { baseApi } from "../../api/baseApi";


const postUpdateWithdrawApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        postUpdateWithdraw: builder.mutation({
        query: ({status,id}) => {
            return {
              url: `/admin/update-withdraw-request`,
              method: 'POST',
              body: {status,id},
          } 
        },
        invalidatesTags: ["withdraw"],
      }),
    }),
   
  });
  
  export const { usePostUpdateWithdrawMutation } = postUpdateWithdrawApi;