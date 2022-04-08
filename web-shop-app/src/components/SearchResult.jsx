import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import FetchAllProductData from "../services/FetchAllProductData";
import GetProductBySearchTitel from "../services/GetProductBySearchTitel";
import ProductCard from "./ProductCard";

const SearchResult = (props) => {
  let location = useLocation();
  //location.state.searchVal
  const [ResultList, setResultList] = useState([]);
  const [DataisLoaded, SetDataLoaded] = useState(false);

  useEffect(() => {
    FetchAllProductData().then((json) => {
      let newArray = GetProductBySearchTitel(json, location.state.searchVal);
      setResultList(newArray);
      SetDataLoaded(true);
    });
  }, [location]);

  const List = ResultList.map((res) => {
    return (<ProductCard Product={res} />)
});
  if (!DataisLoaded) {
    return (
      <div>
        <h1> Datan håller på och laddas </h1>{" "}
      </div>
    );
  } else {
    return (
      <div>
        {List}
      </div>
    );
  }
};
export default SearchResult;
