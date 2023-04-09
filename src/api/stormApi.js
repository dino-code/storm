import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const stormApi = createApi({
  reducerPath: 'stormApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://127.0.0.1:8000/' }),
  endpoints: (builder) => ({
    registerUser: builder.mutation({
      query: (data) => ({
        url: 'api/register/',
        method: 'POST',
        body: data,
      }),
    }),
    login: builder.mutation({
      query: (credentials) => ({
        url: '/api/login/',
        method: 'POST',
        body: credentials,
      }),
    }),
  }),
})

export const { useRegisterUserMutation, useLoginMutation } = stormApi
