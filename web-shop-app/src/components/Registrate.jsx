import { useForm } from "react-hook-form";
import RegistrateService from "../services/RegistrateService"

const Registrate = () => {

  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data) => {
    RegistrateService(data);
  };


  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("email", { required: "This is required." })} placeholder="Email" />
      {errors.email && <p>{errors.email.message}</p>}

      <input {...register("UserName")} placeholder="User name" />
      <input type="password" {...register("password", {
        minLength: {
          value: 3,
          message: 'Length must be 3 or more',
        }, required: "Password is required"
      })} placeholder="Password" />
      {errors.password && <p>{errors.password.message}</p>}

      <input {...register("Adress", { required: "This is required." })} placeholder="Adresse" />
      {errors.Adress && <p>{errors.Adress.message}</p>}


      <button type="Submit">Create acount</button>
    </form>
  )

}

export default Registrate;