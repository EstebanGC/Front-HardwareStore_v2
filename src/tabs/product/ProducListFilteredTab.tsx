import { useNavigate } from "react-router-dom";
import ProductListFiltered from "../../components/product/ProductListFiltered";


const ProductListFilteredTab = () => {

    let navigate = useNavigate()

    return (
        <div className="main-content">
            <h1>Available units</h1>
            <ProductListFiltered/>
        </div>
    )
}

export default ProductListFilteredTab