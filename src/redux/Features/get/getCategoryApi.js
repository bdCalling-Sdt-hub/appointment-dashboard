import { baseApi } from "../../api/baseApi";


const getCategoryApi = baseApi.injectEndpoints({
    endpoints:(builder)=>({
        getCategory:builder.query({
            query:()=>`/category/get-category`,
            providesTags:["category"],
        })
    })
})

export const {useGetCategoryQuery} = getCategoryApi;