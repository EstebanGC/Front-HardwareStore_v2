import React, {useState, useEffect} from 'react';
import { useAppDispatch } from '../../state/store';
import { useLocation } from 'react-router-dom';
import { productTp, selectProdErrorFetch } from '../../state/slices/productSlice';
import { useNavigate } from 'react-router-dom';
import { updateProduct } from '../../actions/Product/updateProduct';
import { nanoid } from '@reduxjs/toolkit';
import { receiptTp } from '../../state/slices/receiptSlice';
import { createReceipt } from '../../actions/Receipt/createReceipt';
import moment from 'moment';
import { getProducts } from '../../actions/Product/getProduct';
import "../../App.css";


interface ProductFormProps{}

const ProductForm: React.FunctionComponent<ProductFormProps> = (props) => {

    interface stateEdit {
        productEdit: productTp
    }

    const location = useLocation()
    const localState= location.state as stateEdit;
    const {productEdit} = localState

    const [productPrice, setProductPrice] = useState(productEdit.productPrice)
    const [productDescription, setProductDescription] = useState(productEdit.productDescription)
    const [availableUnits, setAvailableUnits] = useState(productEdit.availableUnits)
    const [addAvailableUnits, setAddAvailableUnits] = useState(0)

    const dispatch = useAppDispatch()

    let navigate = useNavigate();

    
    const onEdit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (productPrice&&productDescription&&addAvailableUnits&&(availableUnits+addAvailableUnits < productEdit.maxUnits)) {
            const productUpdated: productTp ={
                id: productEdit.id,
                productName: productEdit.productName,
                productPrice: productPrice,
                productDescription: productDescription,
                sold: 0,
                minUnits: productEdit.minUnits,
                maxUnits: productEdit.maxUnits,
                availableUnits: availableUnits + addAvailableUnits,
                providers: productEdit.providers,
            }

            console.log(productUpdated)
            dispatch(updateProduct(productUpdated))
            useEffect(() => {dispatch(getProducts())}, [dispatch] )
            
            let currentDate = moment(new Date()).format("MM-DD-YYYY ")

            if(addAvailableUnits !=0) {
                
                const receiptCreated: receiptTp = {
                    id: nanoid(),
                    units:addAvailableUnits,
                    product: productUpdated,
                    date: currentDate,
                }
                dispatch(createReceipt(receiptCreated))
            }
            navigate("/stock")
        } else if (availableUnits + addAvailableUnits > productEdit.maxUnits) {
            alert("You can not exceed the maximum units")
        } 
    }

    return (
        <div>
            <form className='form' id='addProduct' onSubmit={(e)=> onEdit(e)}>
                <label>Change description</label>
                <input className='controls' type='text' id='description' placeholder={productEdit.productDescription} onChange={(e) => setProductDescription(e.target.value)}/> 
                <br/>
                <label>Price</label>
                <input className='controls' type='text' id='price' placeholder={String(productEdit.productPrice)} onChange={(e) => setProductPrice(Number(e.target.value))}/>
                <br/>
                <label>Available units</label>          
                <th>{productEdit.availableUnits}</th>
                <br/>
                <label>Add units</label>
                <input className='controls' type='number' min='0' max={productEdit.maxUnits - productEdit.availableUnits} id='available-units' 
                onChange={(e)=> setAddAvailableUnits(Number(e.target.value))}/>
                <br/>
                <input className="btn btn-info" type='submit' value="Update" />
                <button className="btn btn-info" onClick={() => navigate("/stock")}>Back</button>
            </form>

        </div>
    )
}


export default ProductForm;