import { createEntityAdapter } from "@reduxjs/toolkit";
import { apiSlice } from "./apiSlice";
import { Title } from "chart.js";

interface Post {
    id: number;
    author: string;
    category: string;
    date: string;
    imageUrl: string;
    excerpt: string;
    content: string;
    comments: Comment[];
    views: number;
    likes: number;
}

interface Comment {
    id: number;
    userId: number;
    date: string;
    content: string;
}

const postsAdapter = createEntityAdapter();

const initialState = postsAdapter.getInitialState()

export const postsApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getPosts: builder.query({
            query: () => '/posts',
            keepUnusedDataFor: 60,
            transformResponse: (data: Post[]) => {
                console.log("data", data);
                return postsAdapter.setAll(initialState, data)
            },
            providesTags: (result: any, error: any, arg: any) => [
                { type: 'Post', id: "LIST" },
                ...result!.ids.map((id: number) => ({ type: 'Post', id }))
            ]
        }),
        addNewPost: builder.mutation<any, { userId: string, initialPost: any}>({
            query: ({ initialPost, userId }) => ({
                url: `/posts/userId=${userId}`,
                method: 'POST',
                body: {
                    ...initialPost,
                    date: new Date().toISOString(),
                    views: 0,
                    likes: 0,
                    comments: []
                }
            }),
            invalidatesTags: [
                { type: 'Post', id: "POST-LIST" }
            ]
        }),
    })
})

export const { useGetPostsQuery } = postsApiSlice;