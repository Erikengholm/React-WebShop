import { initializeApp } from "firebase/app";
import firebaseConfig from "../FireBaseEun.json";
import { getDatabase, ref, set } from "firebase/database";

const SaveOrder = (id,array) => {

  const app = initializeApp(firebaseConfig);

  var Orders = [];

  const uniqueArray = array.filter((value, index) => {
    const _value = JSON.stringify(value);
    return index === array.findIndex(obj => {
      return JSON.stringify(obj) === _value;
    });
  });

  uniqueArray.forEach((item) => {
    let quantityID = 0;

    array.forEach((item2) => {
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
console.log(Orders);
  let dateString = date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate()+"-"+date.getHours()+":"+date.getMinutes()
    const db = getDatabase();
        set(ref(db, "Orders/" + id+"/"+dateString), { Orders })
          .then((data) => {
            console.log("Saved Data", data);
          })
          .catch((error) => {
            console.log("Storing Error", error);
          });
};

export default SaveOrder;
