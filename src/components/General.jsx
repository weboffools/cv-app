import GeneralForm from "./GeneralForm"
import { useState } from 'react'

export default function General() {
  const [values, setValues] = useState({
    firstname: 'First Name',
    lastname: 'Last Name',
    email: 'Email',
    location: 'Location',
  });
  const [isEditable, setIsEditable] = useState(false);
  return (
    <div className="general">
      <GeneralForm 
        values={values}
        onTextChange={setValues}
        isEditable={isEditable}
        onEdit={() => setIsEditable(true)}
        onSave={() => setIsEditable(false)}
    />
    </div>
  );
}
