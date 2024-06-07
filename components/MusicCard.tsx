import React from "react";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
interface Props {
  img: string;
  title: string;
  artist: string;
}
function MusicCard({ img, title, artist }: Props) {
  return (
    <Box
      sx={{
        backgroundColor: "#303030",
        width: { xs: "80vw", sm: "350px", md: "500px" },
        height: { xs: "120px", md: "120px" },
        padding: "4px",
        display: "flex",
        gap: "0.7rem",
        borderRadius: "10px",
      }}
    >
      <Box sx={{ overflow: "hidden" }} width={120}>
        <Image
          src={img}
          width={250}
          height={250}
          style={{ objectFit: "cover" }}
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
        <Typography
          sx={{ color: "white", fontWeight: "600", fontSize: "0.9rem" }}
        >
          {title}
        </Typography>
        <Typography
          sx={{ color: "#909090", fontWeight: "600", fontSize: "0.7rem" }}
        >
          {artist}
        </Typography>
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

export default MusicCard;
