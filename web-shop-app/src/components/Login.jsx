import {useRef} from 'react';


const Login = () =>{

    const handleSubmit = () =>{

    }

    const UserNameRef = useRef();
    const PassWordRef = useRef();


    return(<div className="login-wrapper">
    <h1>Please Log In</h1>
    <form onSubmit={handleSubmit}>
      <label>
        <p>Username</p>
        <input type="text" ref={UserNameRef} />
      </label>
      <label>
        <p>Password</p>
        <input type="password" ref={PassWordRef}/>
      </label>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  </div>)

}

export default Login;