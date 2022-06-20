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
        <div>
            <button className="logout" onClick={(e)=>logOutApp(e)}>Log out</button>
        </div>
    )
}

export default LogOut