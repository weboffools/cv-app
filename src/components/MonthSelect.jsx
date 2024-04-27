export default function MonthSelect({monthComplete, setMonth, schoolId}) {

  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ]
  const listMonths = months.map(month => 
    <option
      key={month}
      value={month}
    >
      {month}
    </option>
  );
  return (
    <div>
      <label htmlFor="month_complete">Month</label>
      <select 
        name="month_complete" 
        id="month_complete"
        value={monthComplete}
        onChange={(e) => setMonth(e, schoolId, 'month')}
      >
        {listMonths}    
      </select>
    </div>
  );
}
