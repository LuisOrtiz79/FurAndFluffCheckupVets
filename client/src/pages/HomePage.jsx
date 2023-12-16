import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const HomePage = () => {
  const [date, setDate] = useState(new Date());

  return (
    <div className='homePage'>
      <h1>Welcome to Fur & Fluff Checkup Vets</h1>

      <div className="calendar-container">
        <Calendar onChange={setDate} value={date}/>
      </div>
      <div className="text-center">
          Selected date: {date.toDateString()}
      </div>
    </div>
  )
}

export default HomePage;
