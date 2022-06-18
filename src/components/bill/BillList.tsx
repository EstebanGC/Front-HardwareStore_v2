import { useAppDispatch } from "../../state/store";
import { possibleStatus } from "../../configuration/possibleStatus";
import { selectBillState, selectBillStatus, selectBillErrorFetch } from "../../state/slices/billSlice";
import { getBills } from "../../actions/Bill/getBills";
import { useSelector } from "react-redux";
import BillTable from './BillTable';
import { useEffect } from "react";

interface BillListProps {}

const BillList: React.FunctionComponent<BillListProps> = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        if(status === possibleStatus.IDLE) {
            dispatch(getBills())
        }
    },[dispatch])

    const getBlls = useSelector(selectBillState())
    const status = useSelector(selectBillStatus())
    const error = useSelector(selectBillErrorFetch())

    return (
        <div>
            <table id='bill-table'>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Date</th>
                        <th>Client</th>
                        <th>Seller</th>
                        <th>Product</th>
                        <th>Total sale</th>
                    </tr>
                </thead>
                {!error && getBlls.map((bill) => <BillTable key={bill.id} props={bill}/>)}
            </table>
        </div>
    )
}

export default BillList;