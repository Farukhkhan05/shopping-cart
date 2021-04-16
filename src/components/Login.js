import React, { useState } from 'react'
import {useSelector, useDispatch} from 'react-redux';
import {RegisterUser, login_user} from '../actions/cartAction'
import { Alert, AlertTitle } from '@material-ui/lab'
import TextField from '@material-ui/core/TextField';

const Login = () => {

  

  const [show, setshow] = useState(false)
  const [err, seterr] = useState(false);
  const local=JSON.parse(localStorage.getItem("Token"))
  const [register, setregister] = useState({
      UName: "", 
      Pass: "", 
      conPass: ""
  })
  const errshow = useSelector(state => state.alert)
  console.log("errshow", errshow)
  const dispatch = useDispatch();

  // const handleRegister = () => {
  //     setshow(pre => !pre)
  //     // console.log("Show ", show);

  // }
  const handlelogin = () => {
      setshow(pre => !pre)
  }
  const handleInput = (e) => {
      e.target.name === "UName" ? register.UName = e.target.value : e.target.name === "pass" ? register.Pass = e.target.value : register.conPass = e.target.value 
     
      console.log(register);
  }
  // const registerUser = () => {
  //     // setshow(pre => !pre)
  //     if (register.UName === "") {
  //         seterr(pre => !pre)
  //         alert("Enter User Name")
  //     }
  //     else {
  //         if (register.Pass === register.conPass) {
  //             debugger
  //             dispatch(RegisterUser(register))
  //         }
  //         else {
  //             seterr(pre => !pre);
  //             alert("Password Not Matched")
  //         }

  //     }
  // }
  const handleLogin = () => {
    let arr =[{UName:"farukh@gmail.com", Pass:"12345", conPass:"12345"}]
    if(arr[0].UName===register.UName && arr[0].Pass===register.Pass ){
      localStorage.setItem("Token", JSON.stringify(true))
      // dispatch(login_user(register))
      window.location.href="/"
    }else(alert("you enter wrong username and password"))
      
  }
    return (
<div className="form_div">
            {errshow && <Alert className="Alert" severity="error">
                <strong>User Not Exist</strong>
            </Alert>}
            <div className="login_div">
                <div>
                    <input className="topButtons" onClick={handlelogin} type="button" value="Login User" />
                </div>
                {/* <div>
                    <input className="topButtons" onClick={handleRegister} type="button" value="Register User" />
                </div> */}
            </div>
            <br></br>
            <TextField id="standard-basic" name="UName" className="loginInput" label="Enter UserName" onChange={handleInput}></TextField>
            <br></br>
            <br></br>
            <TextField id="password" type="password" name="pass" className="loginInput" label="Enter Password" onChange={handleInput}></TextField>
            <br></br>
            <button className="Loginbutton" onClick={handleLogin}>Login</button>
            {/* {show && <>
                <br></br>
                <TextField id="password" type="password" name="conPass" className="loginInput" label="Re-Enter Password" onChange={handleInput}></TextField>
            </>
            }
            <br></br>
            {show && <><button className="Loginbutton" onClick={handleLogin}>Login</button></>}<br></br>
            {show && <> <button className="Loginbutton" onClick={registerUser}>Register</button></>} */}
        </div>
    )
}

export default Login
