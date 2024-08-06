import { baseApi } from "../../api/baseApi";


const getLoginUserApi = baseApi.injectEndpoints({
    endpoints:(builder)=>({
        getLoginUser:builder.query({
            query:()=>`/user/login-user`,
            // providesTags:["category"],
        })
    })
})

export const {useGetLoginUserQuery} = getLoginUserApi;