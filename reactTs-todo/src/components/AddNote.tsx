import { ChangeEvent } from "react";

import { AddNoteProps } from "./types";
import { useAddTodosMutation } from "../services/todos";

export const AddNote = (props: AddNoteProps) => {
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
};
