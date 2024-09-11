import { ChangeEvent } from "react";
import { useAddTodosMutation } from "../services/todos";
import { AddNoteProps } from "./types";

function AddNote(props: AddNoteProps) {
  const [createTodo] = useAddTodosMutation();

  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    createTodo(props.title);
    props.setTitle("");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={props.title}
          onChange={(event) => props.setTitle(event.target.value)}
        />
        <button type="submit">add todo</button>
      </form>
    </div>
  );
}

export default AddNote;
