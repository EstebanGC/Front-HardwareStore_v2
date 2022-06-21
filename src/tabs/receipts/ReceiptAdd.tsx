import ReceiptForm from "../../components/receipt/ReceiptForm";
import { RootState } from "../../state/store";
import { useSelector } from "react-redux";
import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";

const AddReceipt = () => {
    const {user}= useSelector((state:RootState) => state.logging)

    let navigate= useNavigate()

    useEffect(()=> {if(user===null) {navigate("/")}}, [])

    return (
        <div className="main-content">
            <h1>Add receipt</h1>
            <ReceiptForm/>
            <div className="centering">
                <button className="btn btn-info" onClick={() => navigate("/receipts")}>Back</button>
            </div>
        </div>
    )
}

export default AddReceipt