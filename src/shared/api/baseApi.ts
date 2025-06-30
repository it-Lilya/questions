import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const createCustomApi = (reducerPath: string ) => {
  return createApi({
    reducerPath: reducerPath,
    baseQuery: fetchBaseQuery({
      baseUrl: 'https://api.yeatwork.ru',
      credentials: 'include',
    }),
    endpoints: () => ({}),
  });
};