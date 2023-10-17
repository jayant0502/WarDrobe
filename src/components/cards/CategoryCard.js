import * as React from "react";
import Card from "@mui/joy/Card";
import CardCover from "@mui/joy/CardCover";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import { BtnContained } from "../Button";

export default function GradientCover({ title, description, btnTitle, image }) {
  return (
    <Card
      sx={{
        minHeight: "400px",
        width: 320,
        borderRadius: "none",
        border: "none",
        display: "flex",
        textAlign: "start",
        position: "relative",
      }}
    >
      <CardCover >
        <img src={image} loading="lazy" alt="" style={{ 
       objectPosition:"right", objectFit:"cover", width:"100%", height: "100%"}}/>
      </CardCover>
      <CardCover
        sx={
          {
            backgroundColor:"#000000",
            opacity:".5",
            position:"absolute"
            // background:
            //   "linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)",
          }
        }
      />
      <CardContent
        sx={{ justifyContent: "flex-end", padding: "1.1rem 0 1.1rem 0" }}
      >
        <Typography level="title-lg" fontSize={"1.589rem"} textColor="#fff">
          {title}
        </Typography>
        <Typography textColor="#fff" marginTop={1} marginBottom={2}>
          {description}
        </Typography>
        <BtnContained
          variant="Contained"
          title={btnTitle}
          sx={{ color: "black !important", height: "30px" }}
        ></BtnContained>
      </CardContent>
    </Card>
  );
}
