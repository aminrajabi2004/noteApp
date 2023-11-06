import Message from "./Message";

function NoteStatus({ notes }) {
  const allnotes = notes.length;
  const completedNotes = notes.filter((n) => n.completed).length;
  const unCompletedNotes = allnotes - completedNotes;

  if (!allnotes)
    return (
      <Message>
        <p>ℹ️ No Notes has already been added</p>
      </Message>
    );

  return (
    <ul className="note-status">
      <li>
        All <span>{allnotes}</span>
      </li>
      <li>
        Completed <span> {completedNotes} </span>
      </li>
      <li>
        Open <span>{unCompletedNotes}</span>
      </li>
    </ul>
  );
}

export default NoteStatus;
