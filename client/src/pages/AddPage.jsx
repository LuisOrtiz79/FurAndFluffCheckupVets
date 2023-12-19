import { useNavigate } from 'react-router-dom';
import AddAppt from '../components/AddAppt';
import Sidebar from '../components/Sidebar';

const AddPage = () => {
  const navigate = useNavigate();
  return (
    <div className='appt-container'>
      <div className='sidebar-appt'>
        <Sidebar />
      </div>

      <div className='addPage'>
        <h1>Add Appointment</h1>

        <AddAppt />

        <button className='buttons' onClick={() => { navigate(-1) }}>Back</button>
      </div>
    </div>
   
  )
}

export default AddPage;
