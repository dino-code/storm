import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const devBaseUrl = 'http://127.0.0.1:8000/'
const prodBaseUrl = 'http://104.131.165.26:8000/'
const baseUrl = prodBaseUrl

export const stormApi = createApi({
  reducerPath: 'stormApi',
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
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
    logout: builder.mutation({
      query: ({ accessToken, refreshToken }) => ({
        url: 'api/logout/',
        method: 'POST',
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        body: { refresh: refreshToken },
      }),
    }),
  }),
})

export const { useRegisterUserMutation, useLoginMutation, useLogoutMutation } =
  stormApi
