import School from './School';
import { useState } from 'react';

export default function Education() {

  const [edus, setEdus] = useState([{
    id: '1',
    name: 'Some School',
    degree: 'Bachelor of Arts',
    month: 'May',
    year: '2010',
  }]);

  const schools = edus.map((edu) => (
    <School
      edus={edus}
      key={edu.id}
      addSchool={setEdus}
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
      <div>
      {schools}
    </div>
    </div>
  );
}
