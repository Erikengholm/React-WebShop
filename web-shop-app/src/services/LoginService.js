import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import firebaseConfig from "../FireBaseEun.json"

const LoginService = (LoginUserJson) =>{
   
      const app = initializeApp(firebaseConfig);
      const auth = getAuth(app);
signInWithEmailAndPassword(auth, LoginUserJson.email, LoginUserJson.password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user)
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage)

  });

      
}

export default LoginService