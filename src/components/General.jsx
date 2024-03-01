import GeneralForm from "./GeneralForm"
import { useState } from 'react'

export default function General() {
  const [isEditable, setIsEditable] = useState(false);
  return (
    <div className="general">
      <GeneralForm 
        isEditable={isEditable}
        onEdit={() => setIsEditable(true)}
        onSave={() => setIsEditable(false)}
    />
    </div>
  );
}
