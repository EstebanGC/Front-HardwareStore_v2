import React, {useState} from 'react';
import { providerTp } from '../../state/slices/providerSlice';

interface ProviderProps {}

type providerPropsTp = {
    props: providerTp
}

const Provider: React.FunctionComponent<providerPropsTp> = ({props}) => {
    return (
        <tbody>
            <tr>
                <td>{props.providerName}</td>
                <td>{props.email}</td>
                <td>{props.passport}</td>
            </tr>
        </tbody>
    )
}