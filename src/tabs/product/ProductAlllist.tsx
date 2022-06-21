import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from 'react';
import ProductsListTable from '../../components/product/ProductListTable';

const ProductAllList = () => {
    
    let navigate = useNavigate()

    return (
        <div className='main-content'>
            <h1>Products in cellar</h1>
            <ProductsListTable/>
        </div>
    )
}

export default ProductAllList
