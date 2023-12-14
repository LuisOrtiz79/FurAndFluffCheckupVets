import Sidebar from '../components/Sidebar';
import ShowAppts from '../components/ShowAppts';

const ApptsPage = () => {
  return (
    <div className='appt-container'>
      <div className='sidebar'>
        <Sidebar />
      </div>

      <div className='apptPage'>
        <ShowAppts />
      </div>
    </div>
  )
}

export default ApptsPage;
