import {
  useDeleteTodosMutation,
  useGetTodosQuery,
  useUpdateTodosMutation,
} from "../services/todos";

export const NoteList = () => {
  const { data } = useGetTodosQuery();
  const [deleteTodo] = useDeleteTodosMutation();
  const [changeComplete] = useUpdateTodosMutation();

  const handleChangeComplete = (id: string, completed: boolean) => {
    changeComplete({ id, completed: !completed });
  };

  return (
    <div>
      {data?.map(({ id, title, completed }) => (
        <div key={id} className={`${completed && "completed"}`}>
          <p>{title}</p>
          <input
            type="checkbox"
            onChange={() => handleChangeComplete(id, completed)}
            checked={completed}
          />
          <button onClick={() => deleteTodo(id)}>delete</button>
        </div>
      ))}
    </div>
  );
};
