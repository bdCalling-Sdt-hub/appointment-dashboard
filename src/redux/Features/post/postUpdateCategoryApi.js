import { baseApi } from "../../api/baseApi";


const postUpdateCategoryApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        postUpdateCategory: builder.mutation({
        query: ({formData, id}) => {
            return {
              url: `/category/update-category/${id}`,
              method: 'PATCH',
              body: formData,
          } 
        },
        invalidatesTags: ["category"],
      }),
    }),
   
  });
  
  export const { usePostUpdateCategoryMutation } = postUpdateCategoryApi;