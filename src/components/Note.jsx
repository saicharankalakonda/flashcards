import React, { useState } from "react";
import "./Note.css";
import FlipCard from "./FlipCard";
const Note = () => {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [vis,setVis]= useState(true);

  const handleAddNote = (e) => {
    e.preventDefault();
    const newNote = { title, content };
    setNotes([...notes, newNote]);
    setTitle("");
    setContent("");
  };

  const handleDeleteNote = (index) => {
    const newNotes = notes.filter((_, i) => i !== index);
    setNotes(newNotes);
  };

  return (
    <div className="app-container">
   {!true &&   <form className="note-form" onSubmit={handleAddNote}>
        <input
          placeholder="Question"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Answer"
          rows={10}
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
        <button type="submit">Add Question</button>
      </form>
}
      <div className="notes-grid">
        {notes.map((note, index) => (
          // <div
          //   className="note-item"
          //   key={index}
          // >
          //   <div className="notes-header">
          //     <button onClick={() => handleDeleteNote(index)}>x</button>
          //   </div>
          //   <div className="note-content">
          //     <h2>{note.title}</h2>
          //     <p>{note.content}</p>
          //   </div>
          // </div>

          <FlipCard question={note.title} answer ={note.content} />
        ))}
      </div>
    </div>
  );
};

export default Note;
