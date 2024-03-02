import YearSelect from "./YearSelect";
import MonthSelect from "./MonthSelect";
import { useState } from "react";
import DegreeSelect from "./DegreeSelect";

export default function Institution({ values, onUpdateValues, isActive, onEdit, onSave }) {
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
          onChange={(e) => onUpdateValues({ ...values, schoolname: e.target.value })}
        />
        <DegreeSelect
          selectNewDegree={onUpdateValues}
          values={values}
        />

        <MonthSelect 
          selectNewMonth={onUpdateValues}          
          values={values}
        />
        <YearSelect 
          selectNewYear={onUpdateValues}
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
