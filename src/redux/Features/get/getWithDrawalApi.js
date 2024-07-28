import { baseApi } from "../../api/baseApi";


const getWithDrawalApi = baseApi.injectEndpoints({
    endpoints:(builder)=>({
        getWithDrawal:builder.query({
            query:(currentPage)=>`/admin/get-withdraw-request?page=${currentPage}`,
            providesTags:["withdraw"],
        })
    })
})

export const {useGetWithDrawalQuery} = getWithDrawalApi;