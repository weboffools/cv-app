import School from './School';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export default function Education() {
  const [edus, setEdus] = useState([
    {
      id: uuidv4(),
      name: 'Some School',
      degree: 'Bachelor of Arts',
      month: 'May',
      year: '2010',
    },
  ]);

  function handleNewSchool() {
    setEdus([...edus, {
      id: uuidv4(),
      name: '',
      degree: '',
      month: '',
      year: '',
    }])
  }

  const schools = edus.map((edu) => (
    <School
      edus={edus}
      key={edu.id}
      editSchool={setEdus}
      schoolId={edu.id}
      schoolName={edu.name}
      degreeGranted={edu.degree}
      monthComplete={edu.month}
      yearComplete={edu.year}
    />
  ));
  return (
    <div className="education">
      <h1>Education</h1>
      <div>{schools}</div>
      <button
        onClick={handleNewSchool}
    >Add Education</button>
    </div>
  );
}
