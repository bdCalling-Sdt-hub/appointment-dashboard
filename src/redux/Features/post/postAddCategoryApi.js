import { baseApi } from "../../api/baseApi";


const postAddCategoryApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        postAddCategory: builder.mutation({
        query: ({formData}) => {
            return {
              url: `/category/create-category`,
              method: 'POST',
              body: formData,
          } 
        },
        invalidatesTags: ["category"],
      }),
    }),
   
  });
  
  export const { usePostAddCategoryMutation } = postAddCategoryApi;