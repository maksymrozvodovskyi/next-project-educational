"use client";

import { getNotes, Note } from "@/lib/api";
import { useState } from "react";
import NoteList from "@/components/NoteList/NoteList";

export default function Notes() {
  const [notes, setNotes] = useState<Note[]>([]);

  const handleClick = async () => {
    const response = await getNotes();

    if (response?.notes) {
      setNotes(response?.notes);
    }
  };

  return (
    <section>
      <h1>Notes List</h1>
      <button onClick={handleClick}>Get my notes</button>
      {notes.length > 0 && <NoteList notes={notes} />}
    </section>
  );
}
