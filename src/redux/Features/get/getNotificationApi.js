import { baseApi } from "../../api/baseApi";


const getNotificationApi = baseApi.injectEndpoints({
    endpoints:(builder)=>({
        getNotification:builder.query({
            query:(currentPage)=>{
                console.log("currentPage",currentPage);
                
                return `/notification?page=${currentPage}`},
            providesTags:[],
        })
    })
})

export const {useGetNotificationQuery} = getNotificationApi;