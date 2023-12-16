import { useNavigate } from 'react-router-dom';
import UpdateAppt from '../components/UpdateAppt';

const UpdatePage = () => {
  const navigate = useNavigate();

  return (
    <div className='updatePage'>
      <h1>Update Appointment</h1>

      <UpdateAppt />
      
      <button  className='buttons' onClick={() => { navigate(-1) }}>Back</button>
    </div>
  )
}

export default UpdatePage
