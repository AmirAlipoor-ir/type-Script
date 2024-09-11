import { useState } from "react";
import AddNote from "./components/AddNote";
import NoteList from "./components/NoteList";

function App() {
  const [title, setTitle] = useState<string>("");

  return (
    <div>
      <h2>Add todo</h2>
      <div>
        <AddNote title={title} setTitle={setTitle} />
      </div>

      <h3>todo list</h3>
      <div className="todos">
        <NoteList />
      </div>
    </div>
  );
}

export default App;
