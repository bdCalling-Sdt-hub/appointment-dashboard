import { baseApi } from "../../api/baseApi";


const postEditProfileApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        postEditProfile: builder.mutation({
        query: (formData) => {
            // console.log("aimannnnnnnnnnnnnnnnnn",id);
            return {
              url: `/user/update-profile`,
              method: 'PUT',
              body: formData,
          } 
        },
        invalidatesTags: ["user"],
      }),
    }),
   
  });
  
  export const { usePostEditProfileMutation } = postEditProfileApi;