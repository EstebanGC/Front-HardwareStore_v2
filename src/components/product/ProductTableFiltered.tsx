import { productTp, selectProdErrorFetch } from "../../state/slices/productSlice";
import { useAppDispatch } from "../../state/store";
import { addProduct } from "../../state/slices/sellSlice";
import React from "react";

type productPropsTp ={
    props: productTp
}

const Products: React.FC<productPropsTp> = ({props}) => {
    
    const dispatch = useAppDispatch()

    const productsCar = (props: productTp, amount: number) => {
        const updateProduct: productTp = {
            id: props.id,
            productName: props.productName,
            productPrice: props.productPrice,
            productDescription: props.productDescription,
            sold: amount,
            minUnits: props.minUnits,
            maxUnits: props.maxUnits,
            availableUnits: props.availableUnits,
            providers: props.providers,
        }
        dispatch(addProduct(updateProduct))
    }

        if(props.availableUnits===0) {
            return <></>
        }

        return (
            <tbody>
                <tr>
                    <td>{props.productName}</td>
                    <td>{props.productPrice}</td>
                    <td>{props.productDescription}</td>
                    <td>{props.minUnits}</td>
                    <td>{props.maxUnits}</td>
                    <td>{props.availableUnits}</td>
                    <td>{props.providers.providerName}</td>
                    <td><input type="number" min="0" max={props.availableUnits} onChange={(e)=> (productsCar(props, Number(e.target.value)))}/></td>
                </tr>
            </tbody>
        )
    }
export default Products;

