import BillList from "../../components/bill/BillTable";
import { RootState } from "../../state/store";
import { useSelector } from "react-redux";
import { useEffect} from 'react'
import { useNavigate } from "react-router-dom";
import BillLists from "../../components/bill/BillList";

const Bills = () => {

    //const { user } = useSelector((state: RootState) => state.logging)
    
    let navigate = useNavigate()

    //useEffect(() => {if (user === null) {navigate("/")}}, [])

    return (
        <div className="main-content">
        <h1>Bill list</h1>
        <BillLists/>
        </div>
    )
}

export default Bills