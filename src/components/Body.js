import RastaurantCard from "./RastaurantCard.js";
import resList from "../utils/mockData";
import { useState } from "react";
const Body = () => {
  //Local State Variable - Super powerfull variable
  const [listOfRestaurants, setListOfRestaurants] = useState(resList);
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            filterList = listOfRestaurants.filter(
              (res) => res.listOfRestaurants > 4
            );
            setListOfRestaurants(filterList);
            console.log(filterList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          <RastaurantCard key={restaurant.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
