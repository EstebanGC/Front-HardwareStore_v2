import React, { useEffect } from 'react';
import { useAppDispatch } from '../../state/store';
import { possibleStatus } from '../../configuration/possibleStatus';
import { useSelector } from 'react-redux';
import { selectRecState, selectRecStatus, selectRecErrorFetch } from '../../state/slices/receiptSlice';
import { getReceipts } from '../../actions/Receipt/getReceipts';
import Receipt from "./ReceiptTable";

interface ReceiptListProps {}

const ReceiptList: React.FunctionComponent<ReceiptListProps> = () => {

    const dispatch = useAppDispatch();

    useEffect(() => {
        if (status===possibleStatus.IDLE) {
            dispatch(getReceipts())
        }
    },[dispatch])

    const getRecpts= useSelector(selectRecState())
    const status = useSelector(selectRecStatus())
    const error = useSelector(selectRecErrorFetch())

    return (
       <div>
        <table id="table">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Units</th>
                    <th>Product</th>
                    <th>Date</th>
                    <th>Provider</th>
                </tr>
            </thead>
                    {!error && getRecpts.map((receipt) => <Receipt key={receipt.id} props={receipt}/>)}
        </table>
       </div>
    )
}

export default ReceiptList; 