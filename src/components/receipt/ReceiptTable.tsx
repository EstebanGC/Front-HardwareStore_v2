import { receiptTp } from "../../state/slices/receiptSlice";

type receiptPropsTp = {
    props: receiptTp
}

const Receipt: React.FunctionComponent<receiptPropsTp> = ({props}) => {
    return (
        <tbody>
            <tr>
                <td>{props.id}</td>
                <td>{props.units}</td>
                <td>{props.product.productName}</td>
                <td>{props.date}</td>
                <td>{props.product.providers.providerName}</td>
            </tr>
        </tbody>
    )
}

export default Receipt;