import { baseApi } from "../../api/baseApi";


const getAboutApi = baseApi.injectEndpoints({
    endpoints:(builder)=>({
        getAbout:builder.query({
            query:()=>`/settings/about-us`,
            providesTags:["AboutUs"],
        })
    })
})

export const {useGetAboutQuery} = getAboutApi;