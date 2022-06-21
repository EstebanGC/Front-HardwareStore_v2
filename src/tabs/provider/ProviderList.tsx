import { useSelector } from "react-redux";
import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import ProviderList from "../../components/provider/ProviderList";
import { RootState } from "../../state/store";

const ProvidersList = () => {

    const { user } = useSelector((state: RootState) => state.logging)

    let navigate=useNavigate()

    useEffect(() => {if (user === null) {navigate("/")}}, [])

    return(
        <div className="main-content">
            <h1>Providers</h1>
            <ProviderList/>
            <br/>
            <div className="centering">
            </div>            
        </div>
    )
}

export default ProvidersList