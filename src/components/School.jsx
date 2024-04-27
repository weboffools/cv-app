import YearSelect from './YearSelect';
import MonthSelect from './MonthSelect';
import DegreeSelect from './DegreeSelect';
import { useState, useId } from 'react';

export default function School({ edus, addSchool, schoolId, schoolName, degreeGranted, monthComplete, yearComplete }) {
  const [isEditable, setIsEditable] = useState(false);

  function handleEdit() {
    isEditable ? setIsEditable(false) : setIsEditable(true);
  }

  function handleChange(e, schoolId, property) {
    addSchool(edus.map(edu => {
      if (edu.id === schoolId) {
        return {...edu, [property]: e.target.value};
      } else {
        return edu;
      }
    }));
  }

  function handleSave(e, schoolId) {
    e.preventDefault();
    addSchool(edus.map(edu => {
      if (edu.id === schoolId) {

        return {...edu, 
          schoolName: e.target.school_name,
          degreeGranted: e.target.degree_type,
          monthComplete: e.target.month_complete,
          yearComplete: e.target.year_select,
        }
      } else {
        return edu;
      }
    }));
    handleEdit();
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
        <DegreeSelect degreeGranted={degreeGranted} setDegree={handleChange} schoolId={schoolId}/>
        <MonthSelect monthComplete={monthComplete} setMonth={handleChange} schoolId={schoolId}/>

        <YearSelect yearComplete={yearComplete} setYear={handleChange} schoolId={schoolId}/>
        <button 
          onClick={(e) => 
            handleSave(e, schoolId)}
          >
        Save
      </button>
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

      <button onClick={handleEdit}>Edit</button>
    </>
  );
}
