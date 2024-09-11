import {
  useDeleteTodosMutation,
  useGetTodosQuery,
  useUpdateTodosMutation,
} from "../services/todos";

export const NoteList = () => {
  const { data } = useGetTodosQuery();
  const [deleteTodo] = useDeleteTodosMutation();
  const [toggleId] = useUpdateTodosMutation();

  const handleToggleId = (id: string, completed: boolean) => {
    console.log(completed);
    toggleId({ id, completed: !completed });
  };

  return (
    <div>
      {data?.map(({ id, title, completed }) => (
        <div key={id} className={`${completed && "completed"}`}>
          <p>{title}</p>
          <input
            type="checkbox"
            onChange={() => handleToggleId(id, completed)}
            checked={completed}
          />
          <button onClick={() => deleteTodo(id)}>delete</button>
        </div>
      ))}
    </div>
  );
};
