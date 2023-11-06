import React from "react";

function NoteList({ notes, onDelete, onCompleted, sortBy }) {
  let sortedNotes = notes;
  if (sortBy == "earliest")
    sortedNotes = [...notes].sort(
      (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
    );

  if (sortBy == "latest")
    sortedNotes = [...notes].sort(
      (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
    );

  if (sortBy == "completed")
    sortedNotes = [...notes].sort(
      (a, b) => Number(a.completed) - Number(b.completed)
    );

  return (
    <div className="note-list">
      {sortedNotes.map((note) => (
        <NoteItem
          key={note.id}
          note={note}
          onDelete={onDelete}
          onCompleted={onCompleted}
        />
      ))}
    </div>
  );
}

export default NoteList;

function NoteItem({ note, onDelete, onCompleted }) {
  const option = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return (
    <div className={`note-item , ${note.completed ? "completed" : ""}`}>
      <div className="note-item__header">
        <div>
          <p className="title">{note.title}</p>
          <p className="desc"> {note.description} </p>
        </div>
        <div className="actions">
          <button onClick={() => onDelete(note.id)}>❌</button>
          <input
            type="checkbox"
            onChange={onCompleted}
            value={note.id}
            checked={note.completed}
            name={note.id}
            id={note.id}
          />
        </div>
      </div>
      <div className="note-item__footer">
        {new Date(note.createdAt).toLocaleDateString("en-US", option)}
      </div>
    </div>
  );
}
