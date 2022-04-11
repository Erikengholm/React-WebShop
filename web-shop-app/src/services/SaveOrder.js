import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "firebase/app";
import firebaseConfig from "../FireBaseEun.json";
import { getDatabase, ref, set } from "firebase/database";
import Cookies from "universal-cookie";

const SaveOrder = (id) => {
  const cookies = new Cookies();
  const Order = cookies.get("Erik-Web-Shop");

  var Orders = [];

  const uniqueArray = Order.filter((value, index) => {
    const _value = JSON.stringify(value);
    return index === Order.findIndex(obj => {
      return JSON.stringify(obj) === _value;
    });
  });

  uniqueArray.forEach((item) => {
    let quantityID = 0;

    Order.forEach((item2) => {
      if (item2.id === item.id) {
        quantityID++;
      }
    });

    let ProductJson = {
      pricePerItem: item.price,
      TotalPrice: item.price*quantityID,
      id: item.id,
      quantity: quantityID,
    };
    Orders.push(ProductJson);
  });
  let date = new Date()

  let dateString = date.getFullYear()+"-"+date.getMonth()+"-"+date.getDate()+"-"+date.getHours()+"-"+date.getMinutes

  /*  const db = getDatabase();
        set(ref(db, "Orders/" + id+"/"+dateString), { Order })
          .then((data) => {
            console.log("Saved Data", data);
          })
          .catch((error) => {
            console.log("Storing Error", error);
          });*/
};

export default SaveOrder;
