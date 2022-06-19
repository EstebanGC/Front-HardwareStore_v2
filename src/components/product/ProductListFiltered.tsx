import React, {useEffect} from 'react';
import { useAppDispatch} from '../../state/store';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { possibleStatus } from '../../configuration/possibleStatus';
import { getProducts } from '../../actions/Product/getProduct';
import { selectProdState, selectProdStatus, selectProdErrorFetch } from '../../state/slices/productSlice';
import ProductTable from './ProductTable';


interface ProductListProps {}


const ProductListFiltered: React.FunctionComponent<ProductListProps> = () => {
    
    let navigate = useNavigate();

    const dispatch = useAppDispatch();

    useEffect(() => {
        if(status === possibleStatus.IDLE) {
            dispatch(getProducts())
        }
    }, [dispatch])

    const getProdcts = useSelector(selectProdState())
    const status = useSelector(selectProdStatus())
    const error = useSelector(selectProdErrorFetch())

    return (
        <div>
            <table id='table'>
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Description</th>
                        <th>Minimum units</th>
                        <th>Maximum units</th>
                        <th>Available units</th>
                        <th>Provider</th>
                        <th>Amount</th>
                    </tr>
                </thead>
                {!error&&getProdcts.map((product) => <ProductTable key={product.id} props={product}/> )}
            </table>
        </div>
    )
}

export default ProductListFiltered;