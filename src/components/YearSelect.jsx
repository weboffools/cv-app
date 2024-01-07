import { useState } from 'react'

function getYears() {
  const year = new Date().getFullYear();
  const years = [];
  for (let i = 0; i < 100; i++) {
    years.push(year - i);
  }
  return years;
}

export default function YearSelect() {
  const years = getYears();
  const [value, setValue] = useState(2023);
  const listYears = years.map(year => 
    <option 
      key={year} 
      value={year}
      onChange={(event) => setValue({value: event.target.value })}
    >
      {year}
    </option>
  );
  return (
    <div>
      <label htmlFor="year_select">Year</label>
      <select name="year_select" id="year_select">
        {listYears}
      </select>
    </div>
  );
}
