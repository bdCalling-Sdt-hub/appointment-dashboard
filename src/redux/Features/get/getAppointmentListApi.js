import { baseApi } from "../../api/baseApi";


const getAppointmentListApi = baseApi.injectEndpoints({
    endpoints:(builder)=>({
        getAppointmentList:builder.query({
            query:()=>`/admin/get-all-appointments`,
            providesTags:["appointment"],
        })
    })
})

export const {useGetAppointmentListQuery} = getAppointmentListApi;