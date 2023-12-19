import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <h3>Menu</h3>

      <ul>
        <li>
          <Link className='a' to='/appointments'>Appointments</Link>
        </li>
        
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
