import React, { useState, useEffect } from "react";

import "../../styles/HomePage.css";
import homePage from "../../helper/homePage";
import HomeCards from "../../components/component/HomeCards";

const HomePage = () => {
  const [dogsApi, setDogsApi] = useState([]);
  useEffect(async () => {
    let response = await fetch("https://api.thedogapi.com/v1/breeds", {
      method: "GET",
      headers: {
        "x-api-key": "ef168e4d-6e46-4b82-b783-4046a4c2d80b",
      },
      body: JSON.stringify(),
    });

    let result = await response.json(response);
    setDogsApi(result);
    console.log("result :>> ", result);
  }, []);
  return (
    <>
      <div className="homepage">
        <div className="title">
          <h2 className="titleinfo">Dogs Api</h2>
        </div>

        <div className="map">
          {dogsApi &&
            dogsApi.map((c) => (
              <HomeCards
                name={c.name}
                breed_group={c.breed_group}
                life_span={c.life_span}
                origin={c.origin}
                image={c.image}
                reference_image_id={c.reference_image_id}
              />
            ))}
        </div>
      </div>
    </>
  );
};

export default HomePage;
