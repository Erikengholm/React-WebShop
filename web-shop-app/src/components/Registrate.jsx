import { useForm } from "react-hook-form";
import RegistrateService from "../services/RegistrateService"
import { useState } from "react";
import { Navigate } from 'react-router-dom';
import { useContext } from "react";
import { UserContext } from '../App';
import "../styles/RegiLoginForm.css"

const Registrate = () => {
  const { setUser } = useContext(UserContext);

  const [Redirect, setRedirect] = useState(false)

  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data) => {
    RegistrateService(data).then((json) => {
      console.log(json)
      setUser({
        UserID: json.UserID,
        Email: data.email,
        UserName: json.UserName,
        Login: true,
      });
      setRedirect(true);
    }).catch(er => {
      console.log(er)
    });
  };

  if (Redirect) {
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
              <input {...register("email", { required: "This is required." })} placeholder="Email" />
            </div>
          </div>
          <div class="row ErrorRow">

            {errors.email && <p className="ErrorMessage">{errors.email.message}</p>}

          </div>
          <div class="row">
            <div class="col-40">
              <label for="UserName">Användarnamn </label>
            </div>
            <div class="col-60">
              <input {...register("UserName")} placeholder="User name" />
            </div>
          </div>
          <div class="row ErrorRow">

            {errors.UserName && <p>{errors.UserName.message}</p>}
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
            <div class="col-40">
              <label for="Adress">Adresse </label>
            </div>
            <div class="col-60">
              <input {...register("Adress", { required: "This is required." })} placeholder="Adresse" />
            </div>
          </div>
          <div class="row ErrorRow">

            {errors.Adress && <p>{errors.Adress.message}</p>}
          </div>
          <div class="row">
            <input type="submit" value="Registrera" />
          </div>
        </form>
      </div>
    )
  }
}

export default Registrate;