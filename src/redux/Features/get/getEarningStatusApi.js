import { baseApi } from "../../api/baseApi";


const getEarningStatusApi = baseApi.injectEndpoints({
    endpoints:(builder)=>({
        getEarningStatus:builder.query({
            query:()=>`/admin/get-admin-earning-status`,
            // providesTags:["category"],
        })
    })
})

export const {useGetEarningStatusQuery} = getEarningStatusApi;