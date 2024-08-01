import { baseApi } from "../../api/baseApi";


const getPercentageApi = baseApi.injectEndpoints({
    endpoints:(builder)=>({
        getPercentage:builder.query({
            query:()=>`/admin/get-percentage-amount`,
            providesTags:["percentage"],
        })
    })
})

export const {useGetPercentageQuery} = getPercentageApi;