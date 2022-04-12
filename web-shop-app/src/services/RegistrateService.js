import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "firebase/app";
import firebaseConfig from "../FireBaseEun.json";
import { getDatabase, ref, set } from "firebase/database";

const RegistrateService = async (SignInJson) => {
  // Initialize Firebase
  console.log(firebaseConfig);
  const app = initializeApp(firebaseConfig);

  // Initialize Firebase Authentication and get a reference to the service
  const auth = getAuth(app);
  return new Promise(function (resolve, reject) {
    createUserWithEmailAndPassword(auth, SignInJson.email, SignInJson.password)
      .then((userCredential) => {
        let user = userCredential.user;
        let uid = user.uid;
        let yourdata = {
          UserID:uid,
          UserName: SignInJson.UserName,
          Adress: SignInJson.Adress,
        };
        console.log(yourdata)
        const db = getDatabase();
        set(ref(db, "users/" + uid), { yourdata })
          .then((data) => {
            console.log("Saved Data", data);
            resolve(yourdata);
          })
          .catch((error) => {
            console.log("Storing Error", error);
            reject(error)
          });
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
        reject(errorMessage)
        // ..
      });
  });
};

export default RegistrateService;
