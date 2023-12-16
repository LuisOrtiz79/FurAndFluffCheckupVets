import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { API_URL } from '../API_URL';

const ApptDetailPage = () => {
  const [appt, setAppt] = useState();

  const navigate = useNavigate();

  const { apptId } = useParams();

  const getAppt = () => {
    axios
      .get(API_URL + '/appointment/' + apptId)
      .then((response) => setAppt(response.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getAppt();
  }, []);

  return (
    <div className='detailsPage'>
      {appt && (
        <>
            <h1>{appt.name}</h1>
            <p>Specie: {appt.specie}</p>
            <p>Gender: {appt.gender}</p>
            <p>Date: {appt.date}</p>
            <p>Phone: {appt.phone}</p>
            <p>Email: {appt.email}</p>
            <p>Description: {appt.description}</p>
            <p>Owner: {appt.owner}</p>

            <button className='buttons' onClick={() => { navigate(-1) }}>Back</button>
        </>
      )}
    </div>
  )
}

export default ApptDetailPage;
