import { Link } from "react-router-dom"
import logo from "../assets/logo.svg"
import timer from "../assets/timer.svg"
import iconList from "../assets/iconList.svg"

const Header= ()=>{
  return(
  <nav>
    <div className="h-20 p-4">
      <nav className="flex justify-between">
        <img src={logo} width={25} alt="Logo" />
        <div className="flex justify-center gap-4"> 
          <Link to='/' className="flex"> <img src={timer} width={20} alt="Timer" /> </Link>
          <Link to='/history' className="flex"> <img src={iconList} width={20} alt="list" /> </Link>
         </div>
      </nav>
    </div>
  </nav>
  )
}

export default Header;