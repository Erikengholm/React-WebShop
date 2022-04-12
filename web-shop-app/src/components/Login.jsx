import { useForm } from "react-hook-form";
import LoginService from "../services/LoginService"
import { useState } from "react";
import {Navigate} from 'react-router-dom';
import { useContext } from "react";
import { UserContext } from '../App';

const Login = () =>{
  const { setUser } = useContext(UserContext);

  const [redirect, setredirect] = useState(false)


  const { register, handleSubmit, formState: { errors } } = useForm();
    
    const onSubmit = (data) => {
      LoginService(data).then((res) =>{
        setUser({
          UserID:res.UserID,
          Email:data.email,
          UserName:res.UserName,
          Login:true,
        });
        setredirect(true);

      });
    }

    if(redirect){
      return (<Navigate replace to="/" />)
  }
  else{

    return(<form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("email", { required: "This is required." })} placeholder="Email" />
      {errors.email && <p>{errors.email.message}</p>}

      <input type="password" {...register("password", {
        minLength: {
          value: 3,
          message: 'Length must be 3 or more',
        }, required: "Password is required"
      })} placeholder="Password" />
      {errors.password && <p>{errors.password.message}</p>}

      <button type="Submit">Login</button>
    </form>)
  }
}

export default Login;