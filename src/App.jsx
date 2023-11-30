import React, { useReducer, useState } from "react";
import "./App.css";

import AddNewNote from "./components/AddNewNote";
import NoteList from "./components/NoteList";
import NoteStatus from "./components/NoteStatus";
import NoteHeader from "./components/NoteHeader";

function notesReduser(state, action) {
  switch (action.type) {
    case "add": {
      return [...state, action.payload];
    }
    case "delete": {
      return state.filter((s) => s.id != action.payload);
    }
    case "complete": {
      return state.map((note) =>
        note.id == action.payload
          ? { ...note, completed: !note.completed }
          : note
      );
    }
    default:
      throw new Error("unknown Eroor" + action.type);
  }
}

//useReduser:
function App() {
  // const [notes, setNotes] = useState([]);
  const [notes, dispatch] = useReducer(notesReduser, []);
  const [sortBy, setSortBy] = useState("latest");

  const handelAddNote = (newNote) => {
    // setNotes((prevNotes) => [...prevNotes, newNote]);
    dispatch({ type: "add", payload: newNote });
  };

  const handelDeleteNote = (id) => {
    // const filterdNote = notes.filter((n) => n.id != id);
    // setNotes(filterdNote);

    dispatch({ type: "delete", payload: id });
  };

  const handelCompletedNote = (e) => {
    const noteId = Number(e.target.value);
    // const newNote = notes.map((note) =>
    //   note.id == noteId ? { ...note, completed: !note.completed } : note
    // );
    // setNotes(newNote);

    dispatch({ type: "complete", payload: noteId });
  };

  return (
    <div className="container">
      <NoteHeader
        notes={notes}
        sortBy={sortBy}
        onSort={(e) => setSortBy(e.target.value)}
      />
      <div className="note-app">
        <AddNewNote onAddNote={handelAddNote} />
        <div className="note-container">
          <NoteStatus notes={notes} />
          <NoteList
            notes={notes}
            sortBy={sortBy}
            onDelete={handelDeleteNote}
            onCompleted={handelCompletedNote}
          />
        </div>
      </div>
    </div>
  );
}
export default App;
