import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const todoSplitApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
  tagTypes: ["todos"],
  endpoints: () => ({}),
});
