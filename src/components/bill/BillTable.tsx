import { billTp } from "../../state/slices/billSlice";

type billPropsTp ={
    props: billTp
}

const Bill: React.FunctionComponent<billPropsTp> =({ props}) => {
    return (
        <tbody>
            <tr>
                <td>{props.id}</td>
                <td>{props.date}</td>
                <td>{props.clientName}</td>
                <td>{props.sellerName}</td>
                <td><table>{props.productsSold.map(product => {
                    return <tr>
                        <td>{product.productName}</td>
                        <td>{product.sold}</td>
                    </tr>
                })}
                </table></td>
                <td>{props.totalSale}</td>
            </tr>
        </tbody>
    )
}

export default Bill;