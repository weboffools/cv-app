import YearSelect from './YearSelect';
import MonthSelect from './MonthSelect';
import DegreeSelect from './DegreeSelect';
import { useState, useId } from 'react';

export default function School({
  edus,
  editSchool,
  schoolId,
  schoolName,
  degreeGranted,
  monthComplete,
  yearComplete,
}) {
  const [isEditable, setIsEditable] = useState(true);

  function handleChange(e, schoolId, property) {
    editSchool(
      edus.map((edu) => {
        if (edu.id === schoolId) {
          return { ...edu, [property]: e.target.value };
        } else {
          return edu;
        }
      })
    );
  }

  if (isEditable) {
    return (
      <form>
        <label htmlFor="school_name">School</label>
        <input
          name="school_name"
          value={schoolName}
          onChange={(e) => handleChange(e, schoolId, 'name')}
          id="school_name"
          type="text"
          maxLength="48"
          size="32"
        />
        <DegreeSelect
          degreeGranted={degreeGranted}
          setDegree={handleChange}
          schoolId={schoolId}
        />
        <MonthSelect
          monthComplete={monthComplete}
          setMonth={handleChange}
          schoolId={schoolId}
        />

        <YearSelect
          yearComplete={yearComplete}
          setYear={handleChange}
          schoolId={schoolId}
        />
        <button onClick={() => setIsEditable(false)}>Save</button>
      </form>
    );
  }

  return (
    <>
      <h3>{schoolName}</h3>
      <p>{degreeGranted}</p>
      <p>
        {monthComplete}, {yearComplete}
      </p>
      <button onClick={() => setIsEditable(true)}>Edit</button>
    </>
  );
}
