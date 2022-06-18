import React, { useState } from 'react';
import { useAppDispatch } from '../../state/store';
import { useNavigate } from 'react-router-dom';
import { nanoid } from '@reduxjs/toolkit';
import { providerTp } from '../../state/slices/providerSlice';
import { createProvider } from '../../actions/Provider/createProvider';

interface ProviderFormProp{}

const ProviderForm: React.FC<ProviderFormProp> = (props) => {
    const [providerName, serProviderName] = useState("")
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
            serProviderName("")
            setEmail("")
            setPassport("")
        }
    }
    

    let navigate = useNavigate();

    return (
        <div>
            <form className='provider-form'>
                <label>Name</label>
                <input  type="text" name="providerName" value={providerName} />
                <br/>
                <label>E-mail</label>
                <input  type="text" name="providerEmail" value={email} />
                <br/>
                <label>Passport</label>
                <input  type="text" name="providerPassport" value={passport}/>
                <br/>
                <button className='provider-bttn'  type="submit">Add Provider</button>
            </form>
        </div>
        )
}

export default ProviderForm




