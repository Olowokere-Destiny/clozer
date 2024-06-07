import React from "react";
import { Typography, Box, Container } from "@mui/material";
import DividerLine from "./DividerLine";
import heroLady from "../assets/hero-lady.png";
import MerchCard from "./MerchCard";
function Merch({obj}: MerchData) {
  return (
    <>
      <DividerLine />
      {/* Merch Section */}
      <Container sx={{ marginTop: "1rem"}} id="merch">
      <Typography
        sx={{
          color: "white",
          fontWeight: "600",
          fontSize: "1.4rem",
          mt: "2rem",
          mb: "1.4rem"
        }}
      >
        {obj?.title}
      </Typography>
        <Box sx={{ display: "flex", columnGap: "0.6rem"}}>
          {obj?.items?.map((item, i) => {
            return <MerchCard key={i} name={item?.details?.title} price={item?.details?.price} img={item?.details?.image_url} />;
          })}
        </Box>
      </Container>
    </>
  );
}

export default Merch;
