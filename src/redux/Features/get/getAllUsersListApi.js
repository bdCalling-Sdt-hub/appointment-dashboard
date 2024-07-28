import { baseApi } from "../../api/baseApi";


const getAllUserListApi = baseApi.injectEndpoints({
    endpoints:(builder)=>({
        getAllUserList:builder.query({
            query:(currentPage)=>`/user/all-user?page=${currentPage}`,
            providesTags:[""],
        })
    })
})

export const {useGetAllUserListQuery} = getAllUserListApi;