import React from "react";

import "../../styles/HomePage.css";
import homePage from "../../helper/homePage";
import HomeCards from "../../components/component/HomeCards";

const HomePage = () => {
  return (
    <>
      <div className="homepage">
        <div className="title">
          <h2 className="titleinfo">Dogs Api</h2>
        </div>

        <div className="map">
          {homePage.map((c) => (
            <HomeCards
              title={c.title}
              discription={c.discription}
              post={c.post}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default HomePage;
