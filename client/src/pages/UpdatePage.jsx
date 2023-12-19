import { useNavigate } from 'react-router-dom';
import UpdateAppt from '../components/UpdateAppt';
import Sidebar from '../components/Sidebar';

const UpdatePage = () => {
  const navigate = useNavigate();

  return (
    <div className='appt-container'>
      <div className='sidebar-appt'>
        <Sidebar />
      </div>

      <div className='updatePage'>
        <h1>Update Appointment</h1>

        <UpdateAppt />
        
        <button  className='buttons' onClick={() => { navigate(-1) }}>Back</button>
      </div>
    </div>
    
  )
}

export default UpdatePage
