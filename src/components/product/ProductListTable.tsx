import React, { useEffect } from 'react';
import { useAppDispatch } from '../../state/store';
import { possibleStatus } from '../../configuration/possibleStatus';
import { selectProdState, selectProdStatus, selectProdErrorFetch} from "../../state/slices/productSlice";
import { getProducts } from "../../actions/Product/getProduct";
import { useSelector } from 'react-redux';
import ProductTable from "./ProductCreateTable";
import ProductForm from './ProductForm';


interface ProductListProps {}

const ProductsListTable: React.FunctionComponent<ProductListProps> = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        if(status===possibleStatus.IDLE){
            dispatch(getProducts())
        }
    }, [dispatch])

    const getProds = useSelector(selectProdState())
    const status = useSelector(selectProdStatus())
    const error = useSelector(selectProdErrorFetch())

    return (
        <div>
            <table className="table" id='product-table'>
                <thead className="thead-dark">
                    <tr>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Description</th>
                        <th>Minimum units</th>
                        <th>Maximum units</th>
                        <th>Available units</th>
                        <th>Providers</th>
                        <th>Edit</th> 
                        <th>Delete</th>                   
                    </tr>
                </thead>
                        {!error && getProds.map((product) => <ProductTable key={product.id} props={product}/>)}
            </table>
            <ProductForm/>
        </div>
    )
}

export default ProductsListTable

