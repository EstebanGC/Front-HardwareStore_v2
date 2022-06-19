import ReceiptList from "../../components/receipt/ReceiptList";
import { RootState } from "../../state/store";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


const Receipts = () => {
    let navigate = useNavigate()

    return (
        <div className="main-content">
            <h1>Receipts</h1>
            <ReceiptList />
        </div>
    )
}