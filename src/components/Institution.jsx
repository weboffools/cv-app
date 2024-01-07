import YearSelect from "./YearSelect";
import MonthSelect from "./MonthSelect";
import { useState } from "react";

export default function Institution({ isActive, onEdit, onSave }) {
  const [values, setValues] = useState({
    schoolname: "University of Some State",
    degree: "Master of Science (MS)",
    month: "May",
    year: "2023"
  });

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
          onChange={(event) => setValues({ ...values, schoolname: event.target.value })}
        />
        <label htmlFor="degree">Degree</label>

        <select 
          name="degree_type" 
          id="degree" 
          onChange={(e) => setValues({ ...values, degree: e.target.value })}
        >
          <option>Doctor of Philosophy (PhD)</option>
          <option>Master of Science (MS)</option>
          <option>Master of Arts (MA)</option>
          <option>Bachelor of Science (BS)</option>
          <option>Bachelor of Arts (BA)</option>
          <option>Juris Doctor (JD)</option>
          <option>Associate of Science (AS)</option>
          <option>Associate of Arts (AA)</option>
        </select>

        <MonthSelect 
          selectNewMonth={setValues}          
          values={values}
        />
        <YearSelect />
        <button onClick={onSave}>Save</button>
      </>
    );
  }
  return (
    <>
      <p>{values.schoolname}</p>
      <p>{values.degree}</p>
      <p>{values.month}</p>
      <p>{values.year}</p>
      <button onClick={onEdit}>Edit</button>
    </>
  );
}
