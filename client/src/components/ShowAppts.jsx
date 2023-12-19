import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { API_URL } from '../API_URL';

const ShowAppts = () => {
  const [showAppt, setShowAppt] = useState();

  const getAllAppts = () => {
    axios
      .get(API_URL + '/appointment/')
      .then((response) => setShowAppt(response.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getAllAppts();
  }, [] );

  return (
    <div className="appts">
      {showAppt && 
          showAppt.map((appt, index) => {
            return (
              <div key={index}>
                <Link to={'/appointment/' + appt.id}>
                  <div className='sticky-note'>
                    <h2>{appt.name}</h2>
                    <p>{appt.appointment}</p>
                    <p>{appt.time} {appt.date}</p>
                  </div>
                </Link> 
              </div>
            )
          })}
    </div>
  )
}

export default ShowAppts;
