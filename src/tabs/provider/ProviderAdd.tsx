import ProviderForm from "../../components/provider/ProviderForm";
import { RootState } from "../../state/store";
import { useSelector } from "react-redux";
import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";

const AddProvider = () => {
    const {user}= useSelector((state:RootState) => state.logging)

    let navigate= useNavigate()

    useEffect(()=> {if(user===null) {navigate("/")}}, [])

    return (
        <div className="main-content">
            <h1>Add provider</h1>
            <ProviderForm/>
            <div className="centering">
                <button className="button3" onClick={() => navigate("/provider-list")}>Back</button>
            </div>
        </div>
    )
}

export default AddProvider