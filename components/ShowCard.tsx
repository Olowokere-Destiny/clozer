import React from "react";
import { Box, Typography } from "@mui/material";
import Image, { StaticImageData } from "next/image";
interface Props {
  img: string;
  title: string;
  artist: string;
}
function ShowCard({ img, title, artist }: Props) {
  return (
    <Box
      sx={{
        backgroundColor: "#303030",
        width: { xs: "100%", md: "500px" },
        height: "120px",
        padding: "4px",
        display: "flex",
        gap: "0.7rem",
        borderRadius: "10px",
      }}
    >
      <Box sx={{ overflow: "hidden", width: "120px", flexShrink:"0" }}>
        <img
          src={img}
          style={{ height: "120px", width: "100%" }}
        />
      </Box>
      <div
        style={{
          marginTop: "0.8rem",
          display: "flex",
          rowGap: "0.4rem",
          flexDirection: "column",
        }}
      >
        <p style={{ color: "white", fontWeight:"600", fontSize:"0.9rem" }} className="custom-ellipsis">{title}</p>
        <Typography sx={{ color: "#989898",fontWeight:"600", fontSize: "0.8rem" }}>{artist}</Typography>
        <button
          style={{
            fontSize: "0.7rem",
            fontWeight: "bold",
            color: "white",
            background: "#505050",
            width: "max-content",
            borderRadius: "30px",
            border: "none",
            padding: "0.4rem",
            paddingLeft: "1rem",
            paddingRight: "1rem",
          }}
        >
          Play
        </button>
      </div>
    </Box>
  );
}

export default ShowCard;
