import MonthSelect from "./MonthSelect";
import YearSelect from "./YearSelect";
import DegreeSelect from "./DegreeSelect";
import { useState } from "react";

export default function Institution({ isActive, onEdit, onSave }) {
  const [values, setValues] = useState(
    {
      schoolname: "",
      degree: "",
      month: "",
      year: "",
    }
  );
  if (isActive) {
    return (
      <>
        <label htmlFor="school_name">Name of School or Institution</label>
        <input
          name="school_name"
          id="school_name"
          type="text"
          value={values.schoolname}
          maxLength="48"
          size="32"
        />
        <DegreeSelect 
          value={values.degree}
      />
        <h2>Date of Completion</h2>
        <MonthSelect 
          value={values.month}
      />
        <YearSelect 
          value={values.year}
      />
        <button onClick={() => {onSave}}>Save</button>
      </>
    );
  }
  return (
    <>
      <p>{values.schoolname}</p>
      <p>{values.degree}</p>
      <p>{values.month}</p>
      <p>{values.year}</p>
      <button onClick={() => {onEdit}}>Edit</button>
    </>
  );
}
