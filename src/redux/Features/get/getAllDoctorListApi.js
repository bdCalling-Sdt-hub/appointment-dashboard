import { baseApi } from "../../api/baseApi";


const getAllDoctorListApi = baseApi.injectEndpoints({
    endpoints:(builder)=>({
        getAllDoctorList:builder.query({
            query:(currentPage)=>`/admin/get-all-doctors?page=${currentPage}`,
            providesTags:["doctor"],
        })
    })
})

export const {useGetAllDoctorListQuery} = getAllDoctorListApi;