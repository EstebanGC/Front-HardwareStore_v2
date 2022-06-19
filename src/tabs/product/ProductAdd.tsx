import AddProduct from "../../components/product/ProductForm";
import { RootState } from "../../state/store";
import { useSelector } from "react-redux";
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ProductAdd = () => {

    const {user} = useSelector((state:RootState) => state.logging)
    let navigate = useNavigate()
    useEffect(() => {if(user==null) {navigate("/")}}, [])

    return (
        <div className="main-content">
            <h1>Add product</h1>
        </div>
    )
}

export default ProductAdd