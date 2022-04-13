const SimpleShoppingList = (array,IfForTable) =>{
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
    let ProductJson;
    if(IfForTable){
        ProductJson = {
            pricePerItem: item.price,
            TotalPrice: item.price*quantityID,
            Titel: item.title,
            quantity: quantityID,
          };
    }
    else{
        ProductJson = {
            pricePerItem: item.price,
            TotalPrice: item.price*quantityID,
            id: item.id,
            quantity: quantityID,
          };
    }
   
    Orders.push(ProductJson);
  });
  return Orders
}

export default SimpleShoppingList