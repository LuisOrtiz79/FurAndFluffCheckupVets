import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <ul className='nav-button'>
        <li>
          <Link className='a' to='/'>Home</Link>
        </li>

        <li>
          <Link className='a' to='/about'>About</Link>
        </li>

        <li>
          <Link className='a' to='/appointments'>Appointments</Link>
        </li>
      </ul>
      
    </nav>
  )
}

export default Navbar;
