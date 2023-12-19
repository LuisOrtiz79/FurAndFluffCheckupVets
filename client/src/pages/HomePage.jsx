import { useState, useEffect} from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import homeLogo from '../assets/homePage-img.jpg';
import axios from 'axios';
import { API_URL } from '../API_URL';

const HomePage = () => {
  const [date, setDate] = useState(new Date());

  const [events, setEvents] = useState([]);

  const getAllAppts = () => {
    axios
      .get(API_URL + '/appointment/')
      .then((response) => {
        let appts = response.data;
        
        for (let i = 0; i < appts.length; i++) {
          appts[i].date = setEvents(appts[i].date)
        }
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getAllAppts();
  }, [] );


  return (
    <div className='homePage'>
      <h1>Welcome to Fur & Fluff Checkup Vets</h1>
      <img src={homeLogo} alt='homeLogo' className='homeLogo' />
      
      <br />

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
