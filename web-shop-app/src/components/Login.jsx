import { useForm } from "react-hook-form";
import LoginService from "../services/LoginService"
import { useState } from "react";
import { Navigate } from 'react-router-dom';
import { useContext } from "react";
import { UserContext } from '../App';
import "../styles/RegiLoginForm.css"

const Login = () => {
  const { setUser } = useContext(UserContext);

  const [redirect, setredirect] = useState(false)


  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    LoginService(data).then((res) => {
      setUser({
        UserID: res.UserID,
        Email: data.email,
        UserName: res.UserName,
        Login: true,
      });
      setredirect(true);

    });
  }

  if (redirect) {
    return (<Navigate replace to="/" />)
  }
  else {

    return (
      <div className="FormDiv">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div class="row">
            <div class="col-40">
              <label for="email">Email </label>
            </div>
            <div class="col-60">
              <input {...register("email", { required: "Email is required." })} placeholder="Email" />
            </div>
          </div>
          <div class="row ErrorRow">

            {errors.email && <p className="ErrorMessage">{errors.email.message}</p>}

          </div>

          <div class="row">
            <div class="col-40">
              <label for="password">Password </label>
            </div>
            <div class="col-60">
              <input type="password" {...register("password", {
                minLength: {
                  value: 6,
                  message: 'Length must be 6 or more',
                }, required: "Password is required"
              })} placeholder="Password" />

            </div>
          </div>
          <div class="row ErrorRow">

            {errors.password && <p className="ErrorMessage">{errors.password.message}</p>}
          </div>
          <div class="row">
            <input type="submit" value="Logga in" />
          </div>
        </form>
      </div>
    )
  }
}

export default Login;