/*
*Header
  - Logo
  - Nav Items
*Body
  - Search
  - RestaurantContaier
     - RastaurantCard
        -Img
        -Name of Restaurant, Start Rating,delevry time
*Footer
  - Copyright
  - Links
  - Address
  - Contact
*/

import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?nwm=1&nws=1&industry=fast-food&sf=&txt_keyword=All"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RastaurantCard = ({ resData }) => {
  if (!resData) return null;

  const { card } = resData;
  const { info } = card.card;
  const {
    name,
    cuisines,
    avgRating,
    costForTwo,
    deliveryTime,
    cloudinaryImageId,
  } = info;
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-logo"
        alt="res-logo"
        src={
          "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
          cloudinaryImageId
        }
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} Stars</h4>
      <h4>₹{costForTwo}300 for two</h4>
      <h4>{deliveryTime} minutes</h4>
    </div>
  );
};

const resList = [
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "255963",
          name: "Mama Mia Pizza",
          cloudinaryImageId: "dbe9ce80ac4d20560005cea827db31fb",
          locality: "Sector 7",
          areaName: "Sector 7",
          costForTwo: "₹300 for two",
          cuisines: ["Pizzas", "Pastas", "Beverages", "Desserts"],
          avgRating: 4.2,
          parentId: "131084",
          avgRatingString: "4.2",
          totalRatingsString: "2.2K+",
          sla: {
            deliveryTime: 26,
            lastMileTravel: 1.8,
            serviceability: "SERVICEABLE",
            slaString: "25-30 mins",
            lastMileTravelString: "1.8 km",
            iconType: "ICON_TYPE_EMPTY",
          },
        },
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "255964",
          name: "Mama Mia Pizza",
          cloudinaryImageId: "dbe9ce80ac4d20560005cea827db31fb",
          locality: "Sector 7",
          areaName: "Sector 7",
          costForTwo: "₹300 for two",
          cuisines: ["Pizzas", "Pastas", "Beverages", "Desserts"],
          avgRating: 4.2,
          parentId: "131084",
          avgRatingString: "4.2",
          totalRatingsString: "2.2K+",
          sla: {
            deliveryTime: 26,
            lastMileTravel: 1.8,
            serviceability: "SERVICEABLE",
            slaString: "25-30 mins",
            lastMileTravelString: "1.8 km",
            iconType: "ICON_TYPE_EMPTY",
          },
        },
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "255965",
          name: "Mama Mia Pizza",
          cloudinaryImageId: "dbe9ce80ac4d20560005cea827db31fb",
          locality: "Sector 7",
          areaName: "Sector 7",
          costForTwo: "₹300 for two",
          cuisines: ["Pizzas", "Pastas", "Beverages", "Desserts"],
          avgRating: 4.2,
          parentId: "131084",
          avgRatingString: "4.2",
          totalRatingsString: "2.2K+",
          sla: {
            deliveryTime: 26,
            lastMileTravel: 1.8,
            serviceability: "SERVICEABLE",
            slaString: "25-30 mins",
            lastMileTravelString: "1.8 km",
            iconType: "ICON_TYPE_EMPTY",
          },
        },
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "255966",
          name: "Mama Mia Pizza",
          cloudinaryImageId: "dbe9ce80ac4d20560005cea827db31fb",
          locality: "Sector 7",
          areaName: "Sector 7",
          costForTwo: "₹300 for two",
          cuisines: ["Pizzas", "Pastas", "Beverages", "Desserts"],
          avgRating: 4.2,
          parentId: "131084",
          avgRatingString: "4.2",
          totalRatingsString: "2.2K+",
          sla: {
            deliveryTime: 26,
            lastMileTravel: 1.8,
            serviceability: "SERVICEABLE",
            slaString: "25-30 mins",
            lastMileTravelString: "1.8 km",
            iconType: "ICON_TYPE_EMPTY",
          },
        },
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "255967",
          name: "Mama Mia Pizza",
          cloudinaryImageId: "dbe9ce80ac4d20560005cea827db31fb",
          locality: "Sector 7",
          areaName: "Sector 7",
          costForTwo: "₹300 for two",
          cuisines: ["Pizzas", "Pastas", "Beverages", "Desserts"],
          avgRating: 4.2,
          parentId: "131084",
          avgRatingString: "4.2",
          totalRatingsString: "2.2K+",
          sla: {
            deliveryTime: 26,
            lastMileTravel: 1.8,
            serviceability: "SERVICEABLE",
            slaString: "25-30 mins",
            lastMileTravelString: "1.8 km",
            iconType: "ICON_TYPE_EMPTY",
          },
        },
      },
    },
  },
];

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {resList.map((restaurant) => (
          <RastaurantCard key={restaurant.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);

