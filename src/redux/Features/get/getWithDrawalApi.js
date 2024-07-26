import { baseApi } from "../../api/baseApi";


const getWithDrawalApi = baseApi.injectEndpoints({
    endpoints:(builder)=>({
        getWithDrawal:builder.query({
            query:()=>`/admin/get-withdraw-request`,
            providesTags:["category"],
        })
    })
})

export const {useGetWithDrawalQuery} = getWithDrawalApi;