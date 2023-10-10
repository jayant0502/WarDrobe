import * as React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import { Rating } from "@mui/material";
// import { BtnOutlined } from "../Button";

export default function BasicCard({ products }) {
  console.log(products);

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "1rem",
      }}
    >
      {products &&
        products.map((item, index) => {
          return (
            <Card
              sx={{ bgcolor: "initial", minWidth: "250px", maxWidth: "300px" }}
              key={index}
              variant="plain"
            >
              <AspectRatio minHeight="100%" minWidth="100%">
                <img
                  src={item.images[0]}
                  loading="lazy"
                  alt=""
                  sx={{ objectFit: "contain" }}
                />
              </AspectRatio>

              <CardContent sx={{ textAlign: "start" }}>
                <Typography level="title-lg">{item.title}</Typography>
                <Typography level="body-xs">Total price: {item.id}</Typography>
                <Typography fontSize="lg" fontWeight="lg">
                  {`₹ ${item.price}`}
                </Typography>
              </CardContent>
              <Rating name="read-only" defaultValue={2.5} readOnly />
              <CardContent sx={{ flexDirection: "row" }}>
                <Button
                  variant="outlined"
                  size="md"
                  color="primary"
                  aria-label="Buy Now"
                  sx={{ alignSelf: "start", fontWeight: 600 }}
                >
                  Buy Now
                </Button>
                <Button
                  variant="solid"
                  size="md"
                  color="primary"
                  aria-label="Explore"
                  sx={{ alignSelf: "start", fontWeight: 600 }}
                >
                  Explore
                </Button>
                {/* <Rating
  name="simple-controlled"
//   value={value}
//   onChange={(event, newValue) => {
//     setValue(newValue);
//   }}
/> */}
              </CardContent>
            </Card>
          );
        })}
    </div>
  );
}
