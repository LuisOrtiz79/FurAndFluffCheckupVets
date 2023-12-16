import { useNavigate } from 'react-router-dom';
import DeleteAppt from '../components/DeleteAppt';

const DeletePage = () => {
  const navigate = useNavigate();

  return (
    <div className='deletePage'>
      <h1>Delete Appointments</h1>

      <DeleteAppt />

      <button className='buttons' onClick={() => { navigate(-1) }}>Back</button>
    </div>
  )
}

export default DeletePage;
