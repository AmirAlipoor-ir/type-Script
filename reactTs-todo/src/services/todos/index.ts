import { todoSplitApi } from "../basic";
import { Todolist } from "./types";

const extendedApi = todoSplitApi.injectEndpoints({
  endpoints: (builder) => ({
    getTodos: builder.query<Todolist, void>({
      query: () => ({ url: "/todos", method: "GET" }),
      providesTags: ["todos"],
    }),
    addTodos: builder.mutation({
      query: (title: string) => ({
        url: "/todos",
        method: "POST",
        body: {
          title,
          id: Date.now().toString(),
          completed: false,
        },
      }),
      invalidatesTags: ["todos"],
    }),
    deleteTodos: builder.mutation({
      query: (id: string) => ({
        url: `/todos/${id}`,
        method: "DELETE",
        body: { id },
      }),
      invalidatesTags: ["todos"],
    }),
    updateTodos: builder.mutation({
      query: ({ id, ...body }) => ({
        url: `/todos/${id}`,
        method: "PATCH",
        body,
      }),

      invalidatesTags: ["todos"],
    }),
  }),

  overrideExisting: false,
});
export const {
  useGetTodosQuery,
  useAddTodosMutation,
  useDeleteTodosMutation,
  useUpdateTodosMutation,
} = extendedApi;
