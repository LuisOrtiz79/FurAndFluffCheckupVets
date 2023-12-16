import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <ul>
        <li>
          <Link to='/addAppointments'>Add Appointment</Link>
        </li>

        <li>
          <Link to='/updateAppointments'>Edit Appointments</Link>
        </li>

        <li>
          <Link to='/deleteAppointments'>Delete Appointment</Link> 
        </li>
      </ul>

    </div>
  )
}

export default Sidebar;
