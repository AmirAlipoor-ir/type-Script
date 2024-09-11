import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const TODO_URL = import.meta.env.VITE_BASE_URL
export const todoSplitApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: TODO_URL }),
  tagTypes: ["todos"],
  endpoints: () => ({}),
});
