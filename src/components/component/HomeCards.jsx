import React from "react";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";

import "../../styles/HomeCard.css";

const HomeCards = ({ title, discription, post }) => {
  return (
    <>
      <Card className="reuseablecard">
        <CardContent>
          <Typography color="textSecondary" gutterBottom>
            {title}
          </Typography>
          <Typography color="textSecondary" gutterBottom>
            {discription}
          </Typography>
          <Typography color="textSecondary" gutterBottom>
            {post}
          </Typography>
        </CardContent>
      </Card>
    </>
  );
};

export default HomeCards;
