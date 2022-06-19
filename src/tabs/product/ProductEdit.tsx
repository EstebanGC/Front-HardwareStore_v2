import ProductEdit from "../../components/product/ProductEdit"
import { RootState} from "../../state/store";
import { useSelector } from "react-redux";
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const EditProduct = () => {

    const { user } = useSelector((state: RootState) => state.logging)

    let navigate = useNavigate()

    useEffect(() => {if (user === null) {navigate("/")}}, [])

    return (
        <div className="main-content">
            <ProductEdit/>       
        </div>
    )
}

export default EditProduct