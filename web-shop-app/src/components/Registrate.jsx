import { useForm } from "react-hook-form";
import { useEffect } from "react";

const Registrate = () =>{

    const { register, handleSubmit, formState: { errors }  } = useForm();
  const onSubmit = (data) =>{
    console.log(data)
  };


  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("email",  { required: "This is required." })} placeholder="Email" />
      {errors.email && <p>{errors.email.message}</p>}

      <input {...register("UserName", { minLength: 2 })} placeholder="User name" />
      <input type="password" {...register("password", { minLength: {
        value: 3,
        message: 'Length must be 3 or more',
    },required: true })} placeholder="Password" />
      {errors.password && <p>{errors.password.message}</p>}

      <input {...register("Adress", { minLength: 2,message: "Måste vara 2 karaktärer" })} placeholder="Adresse" />
      {errors.Adress && <p>{errors.Adress.message}</p>}

      
      <button type="Submit">Create acount</button>
    </form>
      )

}

export default Registrate;