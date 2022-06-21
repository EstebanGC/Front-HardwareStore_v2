import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { auth } from "../../firebaseConfig";
import GoogleLogIn from "./GoogleLogIn"
import { useNavigate } from "react-router-dom";


const LogIn: React.FunctionComponent = () => {

  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')

  const logInForm = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()

    if (userName && password) {
      signInWithEmailAndPassword(auth, userName, password)
        .then((userCredential) => {
          const user = userCredential.user;

        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
        });

      setPassword('')
      setUserName('')
    }
  }

  let navigate =useNavigate();

  return (
    <div>
      <h1>Log In</h1>
      <form className="form">
        <label >Username</label>
        <input type="text" id="username" value={userName}  onChange={(e) => setUserName(e.target.value)} />
        <br />
        <label >Password</label>
        <input type="password" name="password" value={password}  onChange={(e) => setPassword(e.target.value)} />
        <br />
        <button className="btn btn-info" onClick={(e) => logInForm(e)}>Log In</button>
        <br />        
      </form>
      <GoogleLogIn/>
  
      
      <button className="btn btn-info" onClick={() => navigate("/SignUp")}>Sign Up</button><br/>
    </div>
    
  );
};

export default LogIn;
