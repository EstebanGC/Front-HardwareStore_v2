import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { RootState } from "../state/store";
import React from "react";
import { logOutInReducer } from "../state/slices/loggeInSlice";

const LogOut  = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const {user} = useSelector((state:RootState) => state.logging)

    const logOutApp=(e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()

        dispatch(logOutInReducer())

        navigate("/")
    }

    return (
            <button className="btn btn-info" onClick={(e)=>logOutApp(e)}>Log out</button>
    )
}

export default LogOut