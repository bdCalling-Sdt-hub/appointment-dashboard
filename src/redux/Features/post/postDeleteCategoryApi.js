import { baseApi } from "../../api/baseApi";


const postDeleteCategoryApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        postDeleteCategory: builder.mutation({
        query: (id) => {
            console.log("aimannnnnnnnnnnnnnnnnn",id);
            return {
              url: `/category/delete-category`,
              method: 'POST',
              body: {categoryId: id},
          } 
        },
        invalidatesTags: ["category"],
      }),
    }),
   
  });
  
  export const { usePostDeleteCategoryMutation } = postDeleteCategoryApi;