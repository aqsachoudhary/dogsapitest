import React from "react";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";

import "../../styles/HomeCard.css";

const HomeCards = ({
  breed_group,
  life_span,
  name,
  origin,
  image,
  reference_image_id,
}) => {
  return (
    <>
      <Card className="reuseablecard">
        <CardContent>
          <Typography color="textSecondary" gutterBottom>
            {name}
          </Typography>
          <img src={image} />
          <img src={reference_image_id} />

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
