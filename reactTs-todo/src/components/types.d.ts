import { Dispatch, SetStateAction } from "react";

export interface AddNoteProps {
  title: string;
  setTitle: Dispatch<SetStateAction<string>>;
}
