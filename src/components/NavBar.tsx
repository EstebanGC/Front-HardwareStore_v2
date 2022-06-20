import { Link } from "react-router-dom";
import { RootState } from "../state/store";
import { useSelector } from "react-redux";
import LogOut from "./logOut";

export default function NavBar() {

    const {user}  = useSelector((state:RootState) => state.logging)

    if(user!==null) {
        return (
            <nav className="nav-bar">
                <Link to="/home" className="site-title">
        </Link>
        <ul>
          <Link to="/provider-list">Providers</Link>
          <Link to="/stock">Stock</Link>
          <Link to="/new-selling">Products</Link>
          <Link to="/bills">Bills</Link>
          <Link to="/receipts">Receipts</Link>
          <LogOut/>
        </ul>
      </nav>
      )
    }

    return(
    <nav className="nav">
    <Link to="/" className="site-title"></Link>
            </nav>
    )
}
