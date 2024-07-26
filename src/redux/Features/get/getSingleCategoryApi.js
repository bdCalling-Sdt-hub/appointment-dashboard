import { baseApi } from "../../api/baseApi";


const getSingleCategoryApi = baseApi.injectEndpoints({
    endpoints:(builder)=>({
        getSingleCategory:builder.query({
            query:(id)=>`category/get-single-category/${id}`,
            providesTags:["category"],
        })
    })
})

export const {useGetSingleCategoryQuery} = getSingleCategoryApi;