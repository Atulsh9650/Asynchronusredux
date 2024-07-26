import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define the Post type
type Posttype = {
  id: number;
  title: string;
  body: string;
  userId: number;
};

// Create the API slice
export const posts = createApi({
  reducerPath: 'myapi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3000/',
  }),
  tagTypes: ['Posts'],
  endpoints: (builder) => ({
    getPosts: builder.query<Posttype[], string>({
      query: () => 'posts',
      providesTags: ['Posts'],
    }),

    newPost: builder.mutation<Posttype, Posttype>({
      query: (post) => ({
        url: 'posts',
        method: 'POST',
        body: post,
      }),
      invalidatesTags: ['Posts'],
    }),

    updatePost: builder.mutation<Posttype, { id: number; changes: Partial<Posttype> }>({
      query: ({ id, changes }) => ({
        url: `posts/${id}`,
        method: 'PATCH',
        body: changes,
      }),
      invalidatesTags: ['Posts'],
    }),

    deletePost: builder.mutation<void, number>({
      query: (id) => ({
        url: `posts/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Posts'],
    }),
  }),
});

// Export hooks for usage in functional components
export const { useGetPostsQuery, useNewPostMutation, useUpdatePostMutation, useDeletePostMutation } = posts;
