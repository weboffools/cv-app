export default function MonthSelect({values, selectNewMonth}) {
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
        value={values.month}
        onChange={(e) => selectNewMonth({ ...values, month: e.target.value})}
      >
        {listMonths}    
      </select>
    </div>
  );
}
