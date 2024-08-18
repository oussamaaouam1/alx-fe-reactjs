
import { Link } from 'react-router-dom'


function Navbar() {
  return (
    <div>
      <Link to='./'>Home</Link>
      <Link to='./About'>About</Link>
      <Link to='./Contact'>Contact</Link>
      <Link to='./Services'>Services</Link>
    </div>
  )
}

export default Navbar
