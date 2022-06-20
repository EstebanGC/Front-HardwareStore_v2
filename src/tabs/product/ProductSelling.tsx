import { RootState, useAppDispatch } from "../../state/store";
import { useSelector } from "react-redux";
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { nanoid } from '@reduxjs/toolkit';
import moment from 'moment';
import ProductSellTable from "../../components/product/ProductSellTable";
import { billTp } from "../../state/slices/billSlice";
import { createBill } from "../../actions/Bill/createBill";
import { addProduct, emptyProducts, sellTp } from "../../state/slices/sellSlice";
import { productTp } from "../../state/slices/productSlice";
import { updateProduct } from "../../actions/Product/updateProduct";


const ProductSelling = () => {

    const { user } = useSelector((state: RootState) => state.logging)
    
    let navigate = useNavigate()

    useEffect(() => { if (user === null) { navigate("/") } }, [])

    const selling = useSelector((state:RootState) => state.sell)

    //Call last object

    const auxiliarState: sellTp = {
        productsSold: []
    }

    let test = [...selling.productsSold]

    test.reduceRight((acc, obj, i) => {
        acc[obj.id]?test.splice(i, 1): acc[obj.id] = true;
        return acc;
    }, Object.create(null));

    test.map(object => auxiliarState.productsSold.push(object))

    //Call logged user state

    //const getUser = useSelector()
    
    let total = auxiliarState.productsSold.map(product => product.productPrice*product.sold).reduce((a,b) => a+b,0)

    const [clientName, setClientName] = useState("")
    

    const dispatch = useAppDispatch();

    const onSelling = async(e:React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault()

        if(clientName&&total!=0){
            const addBill: billTp = {
                id: nanoid(),
                date: moment(new Date()).format("MM-DD-YYYY"),
                clientName: clientName,
                sellerName: user.displayName,
                productsSold: auxiliarState.productsSold,
                totalSale: total,
            }

            dispatch(createBill(addBill))
            dispatch(emptyProducts())
            navigate("/new-selling")

            let productToUpdate = [...auxiliarState.productsSold]

            productToUpdate.map(product => {
                const productUpdated: productTp = {
                    id: product.id,
                    productName: product.productName,
                    productPrice: product.productPrice,
                    productDescription: product.productDescription,
                    sold: 0,
                    minUnits: product.minUnits,
                    maxUnits: product.maxUnits,
                    availableUnits: product.availableUnits-product.sold,
                    providers: product.providers,
                }

                if (productUpdated.minUnits > productUpdated.availableUnits) {
                    alert("You have the minimum units allowed!")
                }
                console.log(productUpdated)
                dispatch(updateProduct(productUpdated))
            })

        }else{
            alert("You need to fill all fields")
        }
    }

    return (
        <div className="main-content">
            <table id="table">
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Amount</th>
                    </tr>
                </thead>
                {<ProductSellTable props={auxiliarState} />}
            </table>
            <form className="form"  id="addProduct" onSubmit={(e) => onSelling(e)}>
                <label>Total</label>
                <input type="number" id="total" value={total}/>
                <label>Client Name</label>
                <input type="text" id="name"  onChange={(e) => setClientName(e.target.value)}/>
                <label>Seller Name</label>
                <input type="text" id="description"  value={user.displayName} />
                <input type="submit" value="Selling"/>
                <br/>
                <button className="button3" onClick={() => {navigate("/new-selling");dispatch(emptyProducts())}}>Back</button>
                <br/>
            </form>
        </div>
    )
}

export default ProductSelling

