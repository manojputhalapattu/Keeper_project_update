import React from "react";
import notes from "../notes"
import Note from "./Note"

function Data(){
  return(
    <div>
      
    {notes.map(Note)}
    
      </div>
    );
    };
export default Data