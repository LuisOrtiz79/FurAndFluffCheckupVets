import Sidebar from '../components/Sidebar';
import ShowAppts from '../components/ShowAppts';

const ApptsPage = () => {
  return (
    <div className='appt-container'>
      <div className='sidebar-appt'>
        <Sidebar />
      </div>

      <div className='apptPage'>
        <h1>Appointments</h1>

        <ShowAppts />
      </div>
    </div>
  )
}

export default ApptsPage;
