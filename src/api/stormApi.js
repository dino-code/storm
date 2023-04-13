import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const devBaseUrl = 'http://127.0.0.1:8000/'
const prodBaseUrl = 'https://api.storm-app.co/'
const baseUrl = prodBaseUrl

export const stormApi = createApi({
  reducerPath: 'stormApi',
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl,
    mode: 'cors',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
  }),
  endpoints: (builder) => ({
    registerUser: builder.mutation({
      query: (data) => ({
        url: 'register',
        method: 'POST',
        body: data,
      }),
    }),
    login: builder.mutation({
      query: (credentials) => ({
        url: 'login',
        method: 'POST',
        body: credentials,
      }),
    }),
    logout: builder.mutation({
      query: ({ accessToken, refreshToken }) => ({
        url: 'logout',
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
