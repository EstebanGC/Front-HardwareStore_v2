import { RootState } from "../../state/store";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom';
 
const Receipts = () => {
    //const {user} = useSelector((state:RootState) => state.logging)
    let navigate = useNavigate()

    //useEffect(() => { if ( user===null) {navigate("/")}}, [])

    return (
        <div className='main-content'>
            <div className='divUrls'>
                <ul className="divUrls">
                    <Link to='/providers'>Providers</Link>
                    <Link to='/balance'>Balance</Link>
                    <Link to='/new-selling'>New selling</Link>
                    <Link to='/bills'>Bills</Link>
                    <Link to='/receipts'>Receipts</Link>
                </ul>
            </div>
        </div>
    )
}

export default Receipts;