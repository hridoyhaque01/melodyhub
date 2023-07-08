import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_BASE_URL,
  prepareHeaders: async (headers, { getState, endpoint }) => {
    const token = getState()?.users?.accessToken;
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: async (args, api, extraOptions) => {
    const result = await baseQuery(args, api, extraOptions);
    if (result?.error?.status === 401) {
      // api.dispatch(userLoggedOut());
      localStorage.removeItem("user");
    }
    return result;
  },
  tagTypes: [],
  endpoints: (builder) => ({}),
});
