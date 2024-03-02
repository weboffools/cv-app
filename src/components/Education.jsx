import { useState } from "react";
import Institution from "./Institution";

export default function Education({ onAdd }) {

  const date = new Date();
  const options = { month: "long" };
  const [values, setValues] = useState({
    schoolname: "Your Institution",
    degree: "",
    month: new Intl.DateTimeFormat("en-US", options).format(date),
    year: date.getFullYear(),
  });
  const [isEditable, setIsEditable] = useState(0);

  return (
    <div className="education">
     <h1>Education</h1>
      <Institution 
        values={values}
        onUpdateValues={setValues}
        isActive={isEditable === 1}
        onEdit={() => setIsEditable(1)}
        onSave={() => setIsEditable(0)}
    />
    <hr />
    <button className="add-btn" onClick={ onAdd }>
      Add Education
    </button>
    </div>
  );
}
