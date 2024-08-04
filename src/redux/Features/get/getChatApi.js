import { baseApi } from "../../api/baseApi";


const getChatApi = baseApi.injectEndpoints({
    endpoints:(builder)=>({
        getChat:builder.query({
            query:(year)=>`/admin/get-admin-chart?year=${year}`,
            providesTags:["category"],
        })
    })
})

export const {useGetChatQuery} = getChatApi;