function getYears() {
  const year = new Date().getFullYear();
  const years = [];
  for (let i = 0; i < 100; i++) {
    years.push(year - i);
  }
  return years;
}

export default function YearSelect({yearComplete, setYear, schoolId}) {
  const years = getYears();
  const listYears = years.map(year => 
    <option 
      key={year} 
      value={year}
    >
      {year}
    </option>
  );
  return (
    <div>
      <label htmlFor="year_select">Year</label>
      <select 
        name="year_select" 
        id="year_select"
        value={yearComplete}
        onChange={(e) => setYear(e, schoolId, 'year')}
      >
        {listYears}
      </select>
    </div>
  );
}
