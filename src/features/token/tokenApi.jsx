import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const tokenApi = createApi({
  reducerPath: "token",
  baseQuery: fetchBaseQuery({ baseUrl: "https://accounts.spotify.com/api" }),
  endpoints: (builder) => ({
    getToken: builder.mutation({
      query: ({ clientId, clientSecret }) => ({
        url: "/token",
        method: "POST",
        body: `grant_type=client_credentials&client_id=${clientId}&client_secret=${clientSecret}`,
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
      }),
    }),
  }),
});

export const { useGetTokenMutation } = tokenApi;
