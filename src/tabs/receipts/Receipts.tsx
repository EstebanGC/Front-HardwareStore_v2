import Receipt from "../../components/receipt/ReceiptTable";
import { RootState } from "../../state/store";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ReceiptList from "../../components/receipt/ReceiptList";


const Receipts = () => {

    const { user } = useSelector((state: RootState) => state.logging)

    let navigate = useNavigate()

    useEffect(() => { if (user === null) { navigate("/") } }, [])

    return (
        <div className="main-content">
            <h1>Receipts</h1>
            <ReceiptList/>
        </div>
    )
}

export default Receipts