import { baseApi } from "../../api/baseApi";


const postLoginApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
      postLogin: builder.mutation({
        query: (data) => {
            console.log("aimannnnnnnnnnnnnnnnnn",data);
            return {
              url: `/user/sign-in`,
              method: 'POST',
              body: data,
            
          } 
        },
        // invalidatesTags: ["Portfolio"],
      }),
    }),
   
  });
  
  export const { usePostLoginMutation } = postLoginApi;