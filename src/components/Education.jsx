import { useState } from "react";
import Institution from "./Institution";

export default function Education({ onAdd }) {
  const [isEditable, setIsEditable] = useState(0);
  return (
    <div className="education">
     <h1>Education</h1>
      <Institution 
        isActive={isEditable === 0}
        onEdit={() => setIsEditable(0)}
        onSave={() => setIsEditable(-1)}
    />
    <hr />
    <button className="add-btn" onClick={ onAdd }>
      Add Education
    </button>
    </div>
  );
}
