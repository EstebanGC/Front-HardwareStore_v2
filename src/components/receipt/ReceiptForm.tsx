import React, {useState, useEffect } from "react";
import { useAppDispatch } from "../../state/store";
import { productTp, selectProdState } from "../../state/slices/productSlice";
import { useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { useNavigate } from "react-router-dom";
import { getProducts } from "../../actions/Product/getProduct";
import { createReceipt } from "../../actions/Receipt/createReceipt";
import { receiptTp } from "../../state/slices/receiptSlice";


interface ReceiptFormProps {}

const ReceiptForm: React.FunctionComponent<ReceiptFormProps> = (props) => {
    const [units,setUnits] = useState(0)
    const [product, setProduct] = useState({} as productTp)
    const [date,setDate] = useState("")
    
    
    const dispatch = useAppDispatch()

    let navigate = useNavigate();


    useEffect(() => {dispatch(getProducts())}, [dispatch] )

        const onAdd = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if(date&&(units>0)){
            const addReceipt: receiptTp = {
                id: nanoid(),
                units: units,
                product: product,
                date:date
            }
            dispatch(createReceipt(addReceipt))
            
            navigate("/receipt")
        } else {
            alert("All fields have to be filled, the values have to be positive and minimum units have to be less than maximum units")
         }
        }

        const getProduct = useSelector(selectProdState())

        const selectProdOnList = (e: React.ChangeEvent<HTMLSelectElement>) => {
            setProduct(getProduct.filter((product) => product.id === e.target.value) [0])
        }

        return (
            <div>
                <form className="form" id="addProduct" onSubmit={(e) => onAdd(e)}>
                <label >Units</label>
                <input className='controls' type="number" id="product-price"  onChange={(e) => setUnits(Number(e.target.value))}/>
                <br/>
                <label >Select a product</label>
                <select id="providers" name="providers" onChange={(e) => selectProdOnList(e)}>
                    <option disabled selected> Select a product </option>
                    {getProduct.map((product) => <option key={product.id} value={product.id}>
                        {product.productName}
                    </option>)}
                </select>
                <br/>
                <label >Date</label>
                <input className='controls' type="text" min="0" id="product-description" onChange={(e) => setDate(e.target.value)}/>
                <br/>
                <button className="btn btn-info"  type="submit">Add Receipt</button>
                
                </form>
            </div>
        )
    }

    export default ReceiptForm