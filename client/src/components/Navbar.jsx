import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div className='navbar'>
      <Link to='/'>
        <button>Home</button>
      </Link>

      <Link to='/about'>
        <button>About</button>
      </Link>

      <Link to='/appointments'>
        <button>Appointments</button>
      </Link>
    </div>
  )
}

export default Navbar;
