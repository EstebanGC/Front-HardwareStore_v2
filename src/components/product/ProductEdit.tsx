import React, {useState} from 'react';
import { useAppDispatch } from '../../state/store';
import { useLocation } from 'react-router-dom';
import { productTp } from '../../state/slices/productSlice';
import { useNavigate } from 'react-router-dom';
import { updateProduct } from '../../actions/Product/updateProduct';
import { nanoid } from '@reduxjs/toolkit';
import { receiptTp } from '../../state/slices/receiptSlice';
import { createReceipt } from '../../actions/Receipt/createReceipt';
import moment from 'moment';

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

    var pastPrice = productEdit.productPrice;

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
                availableUnits: 0,
                providers: productEdit.providers,
            }
            dispatch(updateProduct(productUpdated))
            
            let currentDate = moment(new Date()).format("MM/DD/YYYY hh:mm:ss")

            if(addAvailableUnits !=0) {
                
                const receiptCreated: receiptTp = {
                    id: nanoid(),
                    units:addAvailableUnits,
                    product: productUpdated,
                    date: currentDate,
                }
                dispatch(createReceipt(receiptCreated))
            }
            navigate("/Inventory")
        } else if (availableUnits + addAvailableUnits > productEdit.maxUnits) {
            alert("You can not exceed the maximum units")
        } else {
            alert("You have to use only positive numbers")
        }
    }

    return (
        <div>
            <form className='product-edit-form' id='addProduct' onSubmit={(e)=> onEdit(e)}>
                <label>Change description</label>
                <input type='text' id='description' placeholder={productEdit.productDescription} onChange={(e) => setProductDescription(e.target.value)}/> 
                <label>Price</label>
                <input type='text' min='0' id='price' placeholder={String(productEdit.productPrice)} onChange={(e) => setProductPrice(Number(e.target.value))}/>
                <label>Available units</label>
                <br/>
                <th>{productEdit.availableUnits}</th>
                <br/>
                <label>Add units</label>
                <input type='numeber' min='0' max={productEdit.maxUnits - productEdit.availableUnits} id='available-units' placeholder="Add available units ..."
                onChange={(e)=> setAddAvailableUnits(Number(e.target.value))}/>
                <input type='submit' value="Update" />
                <br/>
                <button className='button3' onClick={() => navigate("/Inventory")}>Back</button>
            </form>

        </div>
    )
}


export default ProductForm;