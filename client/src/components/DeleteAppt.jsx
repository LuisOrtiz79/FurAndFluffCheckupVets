import { useState, useEffect } from 'react';
import axios from 'axios';
import { API_URL } from '../API_URL';

const DeleteAppt = () => {
  const [showAppt, setShowAppt] = useState([]);

  const getAllAppts = () => {
    axios
      .get(API_URL + '/appointment/')
      .then((response) => setShowAppt(response.data))
      .catch((error) => console.log(error));
  };
    
  useEffect(() => {
    getAllAppts();
  }, [] );

  const handleDelete = (apptId) => {
    setShowAppt((prevAppts) => prevAppts.filter((appt) => appt.id !== apptId));
    axios
      .delete(API_URL + `/appointment/${apptId}`)
      .then((response) => {
        console.log("Deleted appointment ===>", response.data)
      })
      .catch((error) => console.log(error));
  };
  
  return (
    <div className="appts">
      {showAppt && 
        showAppt.map((appt, index) => {
          return (
            <div key={index}>
              <div className='sticky-note'>
                <h1>{appt.name}</h1>
                <p>{appt.specie}</p>
                <p>{appt.date}</p>
                <p>{appt.description}</p>

                <button onClick={() => handleDelete(appt.id)}>Delete</button>
              </div>
            </div>
          )
      })}
    </div>
  )
}

export default DeleteAppt;