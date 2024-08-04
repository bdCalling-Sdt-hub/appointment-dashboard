import { baseApi } from "../../api/baseApi";


const getAppointmentListApi = baseApi.injectEndpoints({
    endpoints:(builder)=>({
        getAppointmentList:builder.query({
            query:(currentPage)=>`/admin/get-all-appointments?page=${currentPage}`,
            providesTags:["appointment"],
        })
    })
})

export const {useGetAppointmentListQuery} = getAppointmentListApi;