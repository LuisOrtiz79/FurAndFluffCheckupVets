import { useState, useEffect } from 'react';
import axios from 'axios';
import { API_URL } from '../API_URL';

const UpdateAppt = () => {
  const [showAppt, setShowAppt] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editedAppt, setEditedAppt] = useState({
    name: "",
    specie: "",
    gender: "",
    time: "",
    date: "",
    phone: "",
    email: "",
    appointment: "",
    owner: ""
  });

  const getAllAppts = () => {
    axios
      .get(API_URL + '/appointment/')
      .then((response) => setShowAppt(response.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getAllAppts();
  }, [] );

  const getSingleAppt = (apptId) => {
    axios
      .get(API_URL + '/appointment/' + apptId)
      .then((response) => {
        setEditedAppt(response.data);
      })
      .catch((error) => {
        console.error('Error getting details:', error);
      });
  };

  const handleEdit = (apptId) => {
    getSingleAppt(apptId);
    setIsEditing(true);
  };

  const editAppt = (e) => {
    e.preventDefault();
    console.log(editedAppt.id)

    axios
      .put(API_URL + '/appointment/' + editedAppt.id, {
        name: editedAppt.name,
        specie: editedAppt.specie,
        gender: editedAppt.gender,
        time: editedAppt.time,
        date: editedAppt.date,
        phone: editedAppt.phone,
        email: editedAppt.email,
        appointment: editedAppt.appointment,
        owner: editedAppt.owner,
      })
      .then((response) => {
        console.log("Updated appointment ===>", response.data);
      })
      .catch((error) => console.log(error));
      
    setIsEditing(false);
  };

  const handleTextInput = (e) => {
    setEditedAppt((prev) => ({...prev, [e.target.name]: e.target.value}));
  };

  return (
    <>{ !isEditing ?
        <div className='appts'>
            {showAppt && 
              showAppt.map((appt, index) => {
                return (
                  <div key={index}>
                    <div className='sticky-note'>
                        <h2>{appt.name}</h2>
                        <p>{appt.appointment}</p>
                        <p>{appt.time} {appt.date}</p>

                        <button id='buttons1' className='buttons' onClick={() => handleEdit(appt.id)}>Edit</button>
                    </div>
                  </div>
                )
            })}
        </div>
      :
      <form onSubmit={editAppt}>
            <label>
                Name
                <input name='name' type='text' placeholder='New Name' value={editedAppt.name} onChange={handleTextInput} />
            </label>
    
            <label>
                Specie
                <select name='specie' value={editedAppt.specie} onChange={handleTextInput} >
                    <option value=''>-- None --</option>
                    <option value='dog'>Dog</option>
                    <option value='cat'>Cat</option>
                    <option value='bird'>Bird</option>
                    <option value='horse'>Horse</option>
                    <option value='reptile'>Reptile</option>
                    <option value='hamster'>Hamster</option>
                </select>

                Gender:
                <select name='gender' value={editedAppt.gender} onChange={handleTextInput} >
                  <option value=''>-- None --</option>
                  <option value='male'>Male</option>
                  <option value='female'>Female</option>
                </select>
              </label>

            <label>
              Time:
              <input name='time' type='text' placeholder='Time' value={editedAppt.time} onChange={handleTextInput} />

              Date:
              <input name='date' type='text' placeholder='mm/dd/yy' value={editedAppt.date} onChange={handleTextInput} />
          </label>
    
            <label>
                Phone
                <input name='phone' type='text' placeholder='New Phone' value={editedAppt.phone} onChange={handleTextInput} />
            </label>
    
            <label>
                Email
                <input name='email' type='text' placeholder='New Email' value={editedAppt.email} onChange={handleTextInput} />
            </label>
    
            <label>
                Appointment
                <select name='appointment' value={editedAppt.appointment} onChange={handleTextInput} >
                    <option value=''>-- None --</option>
                    <option value='checkup'>Checkup</option>
                    <option value='care'>Care</option>
                </select>
            </label>
    
            <label>
                Owner
                <input name='owner' type='text' placeholder='New Owner Name' value={editedAppt.owner} onChange={handleTextInput} />
            </label>

            <button type='submit'>Edit</button>
        </form>
    }
    </>
  )
}

export default UpdateAppt;

