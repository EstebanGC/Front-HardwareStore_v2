import React, { useEffect } from 'react';
import { useAppDispatch } from '../../state/store';
import { possibleStatus } from '../../configuration/possibleStatus';
import { useSelector } from 'react-redux';
import { selectRecState, selectRecStatus, selectRecErrorFetch } from '../../state/slices/receiptSlice';
import { getReceipts } from '../../actions/Receipt/getReceipts';
import Receipt from "./ReceiptTable";
import ReceiptForm from './ReceiptForm';

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
        <table className='table' id="table">
            <thead className="thead-dark">
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
        <ReceiptForm/>
       </div>
    )
}

export default ReceiptList; 