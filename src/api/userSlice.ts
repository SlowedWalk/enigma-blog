import { createEntityAdapter } from "@reduxjs/toolkit";
import { apiSlice } from "./apiSlice";

interface User {
    id: number;
    name: string;
    gender: string;
    avatar: string;
    job: string;
    email: string;
    phone: string;
    address: string;
    birthday: string;
    websit: string;
    about: string;
    socials: [
        {
            name: string;
            url: string
        }
    ]
}

const usersAdapter = createEntityAdapter<User>();

const initialState = usersAdapter.getInitialState()


export const usersApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getUsers: builder.query({
            query: () => '/users',
            keepUnusedDataFor: 60,
            transformResponse: (data: User[]) => {
                console.log("data", data);
                return usersAdapter.setAll(initialState, data)
            },
            providesTags: (result: any, error: any, arg: any) => [
                { type: 'User', id: "USER-LIST" },
                ...result!.ids.map((id: number) => ({ type: 'User', id }))
            ]
        })
    })
})

export const { useGetUsersQuery } = usersApiSlice;