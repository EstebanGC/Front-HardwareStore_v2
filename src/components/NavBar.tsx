import { Link } from "react-router-dom";
import { RootState } from "../state/store";
import { useSelector } from "react-redux";
import LogOut from "./logOut";
import "./NavBar.css"

export default function NavBar() {

  const { user } = useSelector((state: RootState) => state.logging)

  if (user !== null) {
    return (
      <nav className="nav-bar">
        
        <ul className='tabs'>
          <Link style={{color:"#66FCF1"}} to="/provider-list">Providers</Link>
          <Link style={{color:"#66FCF1"}} to="/stock">Stock</Link>
          <Link style={{color:"#66FCF1"}} to="/bills">Bills</Link>
          <Link style={{color:"#66FCF1"}} to="/receipts">Receipts</Link>
          <Link style={{color:"#66FCF1"}} to='/new-selling'>Sellings</Link>
          <LogOut />
        </ul>
      </nav>
    )
  }

  return (
    <nav className="nav">
      <Link to="/" className="site-title"></Link>
    </nav>
  )
}
