import { useSelector } from "react-redux";
import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import ProviderList from "../../components/provider/ProviderList";
import { RootState } from "../../state/store";

const ProvidersList = () => {
    let navigate=useNavigate()

    return(
        <div className="main-content">
            <h1>Providers</h1>
            <ProviderList/>
            <br/>
            <div className="centering">
                <button className="button4" onClick={() => navigate("/create-provider")}>Add provider</button>
            </div>            
        </div>
    )
}

export default ProvidersList