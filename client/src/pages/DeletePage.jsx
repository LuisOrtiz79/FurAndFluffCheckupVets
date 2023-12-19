import { useNavigate } from 'react-router-dom';
import DeleteAppt from '../components/DeleteAppt';
import Sidebar from '../components/Sidebar';

const DeletePage = () => {
  const navigate = useNavigate();

  return (
    <div className='appt-container'>
      <div className='sidebar-appt'>
        <Sidebar />
      </div>

      <div className='deletePage'>
        <h1>Delete Appointments</h1>

        <DeleteAppt />

        <button className='buttons' onClick={() => { navigate(-1) }}>Back</button>
      </div>
    </div>
  )
}

export default DeletePage;
