import ProductEdit from "../../components/product/ProductEdit"
import { RootState} from "../../state/store";
import { useSelector } from "react-redux";
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const EditProduct = () => {
    let navigate = useNavigate()

    return (
        <div className="main-content">
            <ProductEdit/>       
        </div>
    )
}

export default EditProduct