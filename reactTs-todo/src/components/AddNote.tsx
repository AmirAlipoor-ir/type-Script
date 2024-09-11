import { ChangeEvent } from "react";

import { AddNoteProps } from "./types";
import { useAddTodosMutation } from "../services/todos";

export const AddNote = ({title, setTitle} :AddNoteProps) => {
  const [createTodo] = useAddTodosMutation();

  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    createTodo(title);
    setTitle("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <button type="submit">add todo</button>
      </form>
    </div>
  );
};
