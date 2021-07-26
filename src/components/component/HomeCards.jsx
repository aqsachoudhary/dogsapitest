import React, { useEffect } from "react";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";

import "../../styles/HomeCard.css";

const HomeCards = ({ breed_group, life_span, name, origin, image }) => {
  useEffect(() => {
    // console.log("img :>> ", image);
  }, []);
  return (
    <>
      <Card className="reuseablecard">
        <CardContent>
          <Typography color="textSecondary" gutterBottom>
            {name}
          </Typography>
          <div className="image">
            <img src={image?.url} style={{ width: "8rem" }} />
          </div>

          <Typography color="textSecondary" gutterBottom>
            {breed_group}
          </Typography>
          <Typography color="textSecondary" gutterBottom>
            {life_span}
          </Typography>
          <Typography color="textSecondary" gutterBottom>
            {origin}
          </Typography>
        </CardContent>
      </Card>
    </>
  );
};

export default HomeCards;
