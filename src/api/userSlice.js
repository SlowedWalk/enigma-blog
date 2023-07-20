import { createEntityAdapter } from "@reduxjs/toolkit";
import { apiSlice } from "./apiSlice";

/* interface User {
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
} */

const usersAdapter = createEntityAdapter();

const initialState = usersAdapter.getInitialState()

export const usersApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getUsers: builder.query({
            query: () => '/users',
            transformResponse: (data) => {
                console.log("data", data);
                return usersAdapter.setAll(initialState, data)
            },
            providesTags: (result, error, arg) => [
                { type: 'User', id: "LIST" },
                ...result.ids.map(id => ({ type: 'User', id }))
            ]
        })
    })
})

export const { useGetUsersQuery } = usersApiSlice;