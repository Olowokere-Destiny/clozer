import React from "react";
import { Typography, Box } from "@mui/material";
function Hero({title}: {title:string}) {
  return (
    <Box
      sx={{
        position: "relative",
        objectFit: "cover",
      }}
    >
      <Box
        sx={{
          position: "relative",
          width: { xs: "100vw", md: "40vw", lg: "30vw" },
          margin: "auto",
        }}
      >
        <img
          src="https://storage.googleapis.com/clozer-bc97fb95-images/RKAs4VxFlOZ1q2uWhD6UIYgybuj2/avatar-1717568012.png"
          style={{ width: "100%", height: "100%" }}
          className="hero-image"
        />
        <div className="gradient-cover"></div>
      </Box>
      <Typography
        variant="h3"
        sx={{
          fontSize: "36px",
          textAlign: "center",
          fontWeight: "bold",
          color: "white",
          mt: "1rem"
        }}
      >
        {title}
      </Typography>
    </Box>
  );
}

export default Hero;
