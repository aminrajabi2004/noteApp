import React from "react";
import { useState } from "react";

function NoteHeader({ notes, sortBy, onSort }) {
  return (
    <div className="note-header">
      <h2>My Notes({notes.length})</h2>
      <select value={sortBy} onChange={onSort}>
        <option value="latest"> Sort based on latest notes </option>
        <option value="earliest"> Sort based on earliest notes </option>
        <option value="completed"> Sort based on completed notes </option>
      </select>
    </div>
  );
}

export default NoteHeader;
