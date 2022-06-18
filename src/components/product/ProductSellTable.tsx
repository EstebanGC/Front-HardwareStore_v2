import { sellTp } from "../../state/slices/sellSlice";

type sellPropsTp = {
    props: sellTp
}

const ProductSellTable: React.FunctionComponent<sellPropsTp> = ({props}) => {
    return (
        <tbody>
            {props.productsSold.map(product => {
                return <tr>
                    <td>{product.productName}</td>
                    <td>{product.productPrice}</td>
                    <td>{product.sold}</td>
                </tr>
            })}
        </tbody>
    )
}