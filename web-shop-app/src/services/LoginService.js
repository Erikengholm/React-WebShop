import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import firebaseConfig from "../FireBaseEun.json"
import { getDatabase, ref, get } from "firebase/database";

const LoginService = async(LoginUserJson) =>{
   
      const app = initializeApp(firebaseConfig);
      const auth = getAuth(app);
return new Promise(function (resolve, reject) {
  signInWithEmailAndPassword(auth, LoginUserJson.email, LoginUserJson.password)
  .then((userCredential) => {
    // Signed in 
    let user = userCredential.user;
    let uid = user.uid;
    const db = getDatabase();
        get(ref(db, "users/" + uid+"/yourdata"))
          .then((data) => {
            resolve(data.toJSON());
          })
          .catch((error) => {
            console.log("Storing Error", error);
            reject(error)
          });
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    reject(error.message)

  });
});


      
}

export default LoginService