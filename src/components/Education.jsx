import { useState } from "react";
import Institution from "./Institution";

export default function Education() {
  const [isEditable, setIsEditable] = useState(0);
  return (
    <div className="education">
     <h1>Education</h1>
      <Institution 
        isActive={isEditable === 0}
        onEdit={() => setIsEditable(0)}
        onSave={() => setIsEditable(-1)}
    />
      <Institution
        isActive={isEditable === 1}
        onEdit={() => setIsEditable(1)}
        onSave={() => setIsEditable(-1)}
    />
      <Institution 
        isActive={isEditable === 2}
        onEdit={() => setIsEditable(2)}
        onSave={() => setIsEditable(-1)}
    />
    </div>
  );
}
