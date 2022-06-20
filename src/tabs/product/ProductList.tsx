import { RootState } from "../../state/store";
import { useSelector } from "react-redux";
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ProductListFiltered from "../../components/product/ProductListFiltered";
import { logInInReducer } from "../../state/slices/loggeInSlice";


const ProductList = () => {

    const { user } = useSelector((state: RootState) => state.logging)

    let navigate = useNavigate()

    useEffect(() => {if (user === null) {navigate("/")}}, [])

    return (
        <div className="main-content">
            <h1>Create a new selling</h1>
            <form id="table" onSubmit={()=> navigate("/selling")}>
                <ProductListFiltered/>
                <input className="goToOrder" id="submit" type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default ProductList