const FetchAllProductData = async () => {
    return new Promise(function (resolve, reject) {
      let apiUrl = "https://fakestoreapi.com/products";
  
      fetch(apiUrl)
        .then((res) => res.json())
        .then((json) => {
          resolve(json);
        }).catch(er =>{
          reject(er);
        });
    });
  };
  
  export default FetchAllProductData;