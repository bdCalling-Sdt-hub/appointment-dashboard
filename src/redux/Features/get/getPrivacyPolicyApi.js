import { baseApi } from "../../api/baseApi";


const getPrivacyPolicyApi = baseApi.injectEndpoints({
    endpoints:(builder)=>({
        getPrivacyPolicy:builder.query({
            query:()=>`/settings/privacy-policy`,
            providesTags:["PrivacyPolicy"],
        })
    })
})

export const {useGetPrivacyPolicyQuery} = getPrivacyPolicyApi;