import { taskCancelled } from "@reduxjs/toolkit/dist/listenerMiddleware/exceptions";
import { useEffect } from "react";
import { Provider, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getProviders } from "../../actions/Provider/getProviders";
import { possibleStatus } from "../../configuration/possibleStatus";
import { selectProvErrorFetch, selectProvState, selectProvStatus } from "../../state/slices/providerSlice";
import { RootState, useAppDispatch } from "../../state/store";
import ProviderForm from "./ProviderForm";

interface ProviderListProps {}

const ProviderList: React.FunctionComponent<ProviderListProps> = () => {
    const dispatch = useAppDispatch();

    useEffect(() =>{
        if(status === possibleStatus.IDLE){
            dispatch(getProviders())
        }
    }, [dispatch])

    const getAllProviders = useSelector(selectProvState())
    const status = useSelector(selectProvStatus())
    const error = useSelector(selectProvErrorFetch())

    const { user } = useSelector((state: RootState) => state.logged)
    const navigate = useNavigate()

    return (
        <div>
            <ProviderForm/>
            <table id="table">
                <thead>
                    <tr>
                        <th>Provider</th>
                        <th>E-mail</th>
                        <th>Provider Id</th>
                    </tr>
                </thead>
                {!error && getAllProviders.map((provider)=> <Provider key={provider.id} props={provider}/>)}
            </table>
        </div>
    )
};

export default ProviderList;