import React from "react";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
interface Props {
  img: string;
  artist: string;
}
function CrewCard({ img, artist }: Props) {
  return (
    <Box
    sx={{
        backgroundColor: "#303030",
        width: { xs: "100%", md: "500px" },
        height: "120px",
        padding: "4px",
        display: "flex",
        alignItems:"center",
        gap: "0.7rem",
        borderRadius: "10px",
        flexShrink: 0,
        overflow: "hidden"
      }}
    >
      <Box sx={{ overflow: "hidden", flexShrink: "0" }} width={120}>
        <Image
          src={img}
          width={250}
          height={250}
          style={{height: "120px"}}
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
        <Typography sx={{ color: "white", fontWeight:"600", fontSize:{xs:"1.1rem", md:"1.3rem" } }}>{artist}</Typography>
      </div>
    </Box>
  );
}

export default CrewCard;
