export default function DegreeSelect({degreeGranted, setDegree, schoolId}) {
  return (
    <div>
      <label htmlFor="degree">Degree</label>
      <select
        name="degree_type"
        id="degree"
        value={degreeGranted}
        onChange={(e) => setDegree(e, schoolId, 'degree')}
      >
        <option defaultValue>-- Select a Degree --</option>
        <option>Doctor of Philosophy (PhD)</option>
        <option>Master of Science (MS)</option>
        <option>Master of Arts (MA)</option>
        <option>Bachelor of Science (BS)</option>
        <option>Bachelor of Arts (BA)</option>
        <option>Juris Doctor (JD)</option>
        <option>Associate of Science (AS)</option>
        <option>Associate of Arts (AA)</option>
      </select>
    </div>
  );
}
