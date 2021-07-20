import React, { useState, useEffect } from "react";
import Card from "@material-ui/core/Card";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import IconButton from "@material-ui/core/IconButton";

import "../../styles/HomePage.css";
// import homePage from "../../helper/homePage";
import HomeCards from "../../components/component/HomeCards";

const HomePage = () => {
  const [dogsApi, setDogsApi] = useState([]);
  // const [dogApi, setDogApi] = useState([]);
  const [name, setName] = useState("");
  const fetchdata = async () => {
    let response = await fetch("https://api.thedogapi.com/v1/breeds", {
      method: "GET",
      headers: {
        "x-api-key": "ef168e4d-6e46-4b82-b783-4046a4c2d80b",
      },
      body: JSON.stringify(),
    });

    let result = await response.json(response);
    setDogsApi(result);
    // console.log("result :>> ", result);
  };
  useEffect(() => {
    fetchdata();
  }, []);

  const handleClick = async (value) => {
    // validate name if not then return
    // fetch api call
    // get breed by search->query param(name)
    // response-> setState({}

    let response = await fetch(
      `https://api.thedogapi.com/v1/breeds/search?name=${value}`,
      {
        method: "GET",
        headers: {
          "x-api-key": "ef168e4d-6e46-4b82-b783-4046a4c2d80b",
        },
        body: JSON.stringify(),
      }
    );
    let result = await response.json(response);

    setDogsApi(result);

    console.log("response :>> ", result);
    setName(value);
    // console.log(
    //   "[jdhfgf>>",
    //   `https://api.thedogapi.com/v1/breeds/search?q=${value}`
    // );
  };
  return (
    <form action="">
      <>
        <div className="homepage">
          <div className="title">
            <h2 className="titleinfo">Dogs Api</h2>
          </div>
          <Card className="searchCard">
            <div>
              <IconButton
                type="submit"
                aria-label="search"
                onClick={handleClick}
              >
                <SearchIcon />
              </IconButton>
              <InputBase
                placeholder="Search"
                value={name}
                inputProps={{ "aria-label": "search google maps" }}
                onChange={(e) => {
                  handleClick(e.target.value);
                }}
              />
            </div>
          </Card>

          <div className="check">
            {dogsApi && dogsApi.length > 0 ? (
              dogsApi?.map((c, index) => (
                <HomeCards
                  key={index}
                  name={c.name}
                  breed_group={c.breed_group}
                  life_span={c.life_span}
                  origin={c.origin}
                  image={c.image}
                />
              ))
            ) : (
              <p> sorry you dont have any dog </p>
            )}
          </div>
          {/* new state check and display card with dog info */}
        </div>
      </>
    </form>
  );
};

export default HomePage;
