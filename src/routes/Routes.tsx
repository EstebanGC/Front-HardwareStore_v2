import { useSelector } from "react-redux";
import { RootState } from '../state/store';
import { Route, Routes } from 'react-router-dom';
import Bills from "../tabs/bills/Bills";
import Receipts from "../tabs/receipts/Receipts";
import LogIn from "../tabs/login/LogIn";
import SignUp from "../tabs/login/LogIn";
import ProductEdit from "../tabs/product/ProductEdit";
import ProductSelling from "../tabs/product/ProductSelling";
import ProductList from "../tabs/product/ProductList";
import ProductAllList from "../tabs/product/ProductAlllist";
import ProviderList from "../tabs/provider/ProviderList";
import ProviderAdd from "../tabs/provider/ProviderList";
import ProductListFilteredTab from "../tabs/product/ProducListFilteredTab";
import AddReceipt from "../tabs/receipts/ReceiptAdd";



export default function RoutesSite() {

    const {user} = useSelector((state:RootState)=> state.logging)

    if(user!=null){

    return (
        <Routes>
            <Route path='/bills' element={<Bills />} />
            
            <Route path='/edit-product' element={<ProductEdit />} />
            <Route path='/new-selling' element={<ProductList />} />
            <Route path='/selling' element={<ProductSelling />} />
            <Route path='/stock' element={<ProductAllList />} />
            <Route path='/add-provider' element={<ProviderAdd />} />
            <Route path='/provider-list' element={<ProviderList />} />
            <Route path='/receipts' element={<Receipts />} />
            <Route path='/product-car' element={<ProductListFilteredTab/>}/>
            <Route path='/new-receipt' element={<AddReceipt/>}/>
            
        </Routes>
    )
}
    return (
        <Routes>
            
           <Route path='/' element={<LogIn/>}/>
           <Route path='/sign-up' element={<SignUp/>}/>
        </Routes>
)

}
