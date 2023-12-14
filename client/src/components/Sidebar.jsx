import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <Link to='/addAppointments'>Add Appointment</Link>

      <Link to='/updateAppointments'>Update Appointments</Link>
      
      <Link to='/deleteAppointments'>Delete Appointment</Link> 
    </div>
  )
}

export default Sidebar;
