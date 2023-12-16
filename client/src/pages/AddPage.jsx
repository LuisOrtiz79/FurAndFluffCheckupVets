import { useNavigate } from 'react-router-dom';
import AddAppt from '../components/AddAppt';

const AddPage = () => {
  const navigate = useNavigate();
  return (
    <div className='addPage'>
      <h1>Add Appointment</h1>

      <AddAppt />

        <button className='buttons' onClick={() => { navigate(-1) }}>Back</button>
    </div>
  )
}

export default AddPage;
