import React from "react";
import notes from  "../notes";
function Note({title,content}) {
  return (
    <div className="note">
      <h1>This is the note title</h1>
      <p>This is the note content</p>
      
      <h1>{title}</h1>
      <p>{content}</p>
          </div>
  );
}


export default Note;
