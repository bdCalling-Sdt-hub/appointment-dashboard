import { baseApi } from "../../api/baseApi";


const getTermsAndConditionsApi = baseApi.injectEndpoints({
    endpoints:(builder)=>({
        getTermsAndConditions:builder.query({
            query:()=>`/settings/terms-condition`,
            providesTags:["TermsAndConditions"],
        })
    })
})

export const {useGetTermsAndConditionsQuery} = getTermsAndConditionsApi;