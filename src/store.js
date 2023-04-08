import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { stormApi } from './api/stormApi'

export const store = configureStore({
  reducer: {
    [stormApi.reducerPath]: stormApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(stormApi.middleware),
})

setupListeners(store.dispatch)
