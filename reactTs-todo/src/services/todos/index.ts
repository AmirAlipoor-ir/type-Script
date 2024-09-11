import { todoSplitApi } from "../basic";
import { AddTodoRes, DeleteTodoRes, Todo, GetTodoRes } from "./types";

const extendedApi = todoSplitApi.injectEndpoints({
  endpoints: (builder) => ({
    getTodos: builder.query<GetTodoRes, void>({
      query: () => ({ url: "/todos", method: "GET" }),
      providesTags: ["todos"],
    }),
    addTodos: builder.mutation<AddTodoRes, string>({
      query: (title) => ({
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
    deleteTodos: builder.mutation<DeleteTodoRes, string>({
      query: (id) => ({
        url: `/todos/${id}`,
        method: "DELETE",
        body: { id },
      }),
      invalidatesTags: ["todos"],
    }),
    updateTodos: builder.mutation<Todo, Todo>({
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
