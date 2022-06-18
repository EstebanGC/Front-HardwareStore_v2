import { productTp } from "../../state/slices/productSlice";
import { useAppDispatch } from "../../state/store";
import { deleteProduct } from "../../actions/Product/deleteProduct";
import { Link } from "react-router-dom";

type productPropsTp = {
    props: productTp
}

const Product: React.FunctionComponent<productPropsTp> = ({props}) => {
    const dispatch = useAppDispatch()

    const onDelete = (props: productTp) => {
        if(props.availableUnits === 0) {
            dispatch(deleteProduct(props))
        } else {
            alert("You can not delete this product because you still have available units")
        }
    }

    return (
        <tbody>
            <tr>
                <td>{props.productName}</td>
                <td>{props.productPrice}</td>
                <td>{props.productDescription}</td>
                <td>{props.minUnits}</td>
                <td>{props.maxUnits}</td>
                <td>{props.providers.providerName}</td>
                <td>
                    <Link to='./productEdit' state={{productEdit: props}}>
                        <button className="product-add">
                            Edit
                        </button>
                    </Link>
                </td>
                <td><button className="delete" onClick={()=> onDelete(props)}>Delete</button></td>
            </tr>
        </tbody>
    )
};

export default Product;