import { baseApi } from "../../api/baseApi";


const postCreatePercentageApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        postCreatePercentage: builder.mutation({
        query: (values) => {
            return {
              url: `/admin/create-percentage-amount`,
              method: 'POST',
              body: values,
          } 
        },
        invalidatesTags: ["percentage"],
      }),
    }),
   
  });
  
  export const { usePostCreatePercentageMutation } = postCreatePercentageApi;