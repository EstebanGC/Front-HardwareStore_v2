import ProductsListFilter from "../../components/product/ProductTableFiltered";
import { RootState } from "../../state/store";
import { useSelector } from "react-redux";
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ProductListFiltered from "../../components/product/ProductListFiltered";

const ProductList = () => {

    let navigate = useNavigate()

    //useEffect(() => {if (user )})

    return (
        <div className="main-content">
            <h1>Create a new selling</h1>
            <form id="table" onSubmit={()=> navigate("/selling")}>
                <ProductListFiltered/>
            </form>
        </div>
    )
}

export default ProductList