import React, { useState } from 'react';
import { useAppDispatch } from '../../state/store';
import { useNavigate } from 'react-router-dom';
import { nanoid } from '@reduxjs/toolkit';
import { providerTp } from '../../state/slices/providerSlice';
import { createProvider } from '../../actions/Provider/createProvider';

interface ProviderFormProp{}

const ProvidersForm: React.FC<ProviderFormProp> = (props) => {
    const [providerName, setProviderName] = useState("")
    const [email, setEmail] = useState("")
    const [passport, setPassport] = useState("")

    const dispatch = useAppDispatch()

    const onAdd = async(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (providerName&&email&&passport){
            const newProvider: providerTp ={
                id: nanoid(),
                providerName,
                email,
                passport }
            dispatch(createProvider(newProvider))
            setProviderName("")
            setEmail("")
            setPassport("")
        }
    }

    let navigate = useNavigate();

    return (
        <div>
            <form className='form' id="addProvider" onSubmit={(e) => {onAdd(e); navigate("/provider-list")}}>
                <label>Name</label>
                <input className='controls' type="text" name="providerName" value={providerName}  onChange={(e) => setProviderName(e.target.value)} />
                <br/>
                <label>E-mail</label>
                <input className='controls' type="text" name="providerEmail"  value={email}  onChange={(e) => setEmail(e.target.value)} />
                <br/>
                <label>Passport</label>
                <input className='controls'  type="text" name="providerPassport" value={passport}  onChange={(e) => setPassport(e.target.value)}/>
                <br/>
                <button className="btn btn-info"  type="submit">Add Provider</button>
            </form>
        </div>
        )
}

export default ProvidersForm




