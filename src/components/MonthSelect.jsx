export default function MonthSelect() {
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

  return (
    <div>
      <label htmlFor="month_complete">Month</label>
      <select name="month_complete" id="month_complete">
        <option key={months[0]} value={months[0]}>{months[0]}</option>
        <option key={months[1]} value={months[1]}>{months[1]}</option>
        <option key={months[2]} value={months[2]}>{months[2]}</option>
        <option key={months[3]} value={months[3]}>{months[3]}</option>
        <option key={months[4]} value={months[4]}>{months[4]}</option>
        <option key={months[5]} value={months[5]}>{months[5]}</option>
        <option key={months[6]} value={months[6]}>{months[6]}</option>
        <option key={months[7]} value={months[7]}>{months[7]}</option>
        <option key={months[8]} value={months[8]}>{months[8]}</option>
        <option key={months[9]} value={months[9]}>{months[9]}</option>
        <option key={months[10]} value={months[10]}>{months[10]}</option>
        <option key={months[11]} value={months[11]}>{months[11]}</option>
      </select>
    </div>
  );
}
