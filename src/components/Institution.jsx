import YearSelect from "./YearSelect";
import MonthSelect from "./MonthSelect";
import { useState } from "react";
import DegreeSelect from "./DegreeSelect";

export default function Institution({ isActive, onEdit, onSave }) {
  const date = new Date();
  const options = { month: "long" };
  const [values, setValues] = useState({
    schoolname: "Your Institution",
    month: new Intl.DateTimeFormat("en-US", options).format(date),
    year: date.getFullYear(),
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
          onChange={(e) => setValues({ ...values, schoolname: e.target.value })}
        />
        <DegreeSelect
          selectNewDegree={setValues}
          values={values}
        />

        <MonthSelect 
          selectNewMonth={setValues}          
          values={values}
        />
        <YearSelect 
          selectNewYear={setValues}
          values={values}
        />
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
