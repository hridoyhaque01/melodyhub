import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { setUser } from "./authSlice";

export const authApi = createApi({
  reducerPath: "auth",
  baseQuery: fetchBaseQuery({ baseUrl: "https://accounts.spotify.com/api" }),
  endpoints: (builder) => ({
    getToken: builder.mutation({
      query: ({ clientId, clientSecret, data }) => ({
        url: "/token",
        method: "POST",
        body: `grant_type=client_credentials&client_id=${clientId}&client_secret=${clientSecret}`,
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
      }),
      async onQueryStarted({ data: userdata }, { queryFulfilled, dispatch }) {
        try {
          const response = await queryFulfilled;
          const tokenData = response?.data;
          const expirationTime = Date.now() + 3600 * 1000;
          localStorage.setItem("token", JSON.stringify(tokenData));
          localStorage.setItem("expireTokenIn", expirationTime);
          localStorage.setItem("user", JSON.stringify(userdata));
          dispatch(setUser(userdata));
        } catch (error) {
          console.log(error);
        }
      },
    }),
  }),
});

export const { useGetTokenMutation } = authApi;
