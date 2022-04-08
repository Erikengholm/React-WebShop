import { useForm } from "react-hook-form";
import LoginService from "../services/LoginService"


const Login = () =>{


    const { Login, handleSubmit, formState: { errors } } = useForm();
    
    const onSubmit = () =>{
      LoginService();
    }



    return(<div className="login-wrapper">
    <h1>Please Log In</h1>
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...Login("email", { required: "This is required." })} placeholder="Email" />
      {errors.email && <p>{errors.email.message}</p>}

      <input type="password" {...Login("password", {
        minLength: {
          value: 3,
          message: 'Length must be 3 or more',
        }, required: "Password is required"
      })} placeholder="Password" />
      {errors.password && <p>{errors.password.message}</p>}

      <button type="Submit">Login</button>
    </form>
  </div>)

}

export default Login;