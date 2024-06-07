import React from "react";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
interface Props {
  name: string;
  img: string;
  price: string;
}
function MerchCard({ name, price, img }: Props) {
  return (
    <Box sx={{ width: {xs:"150px", md: "200px"}, height: "auto", overflow: "hidden" }}>
      <Image src={img} width={250} height={250} style={{borderRadius: "8px"}} />
      <Typography
        sx={{ color: "white", fontWeight: "bold", fontSize: "1.1rem" }}
      >
        {name}
      </Typography>
      <Typography
        sx={{ color: "white", fontSize: "1rem" }}
      >
        {price}
      </Typography>
    </Box>
  );
}

export default MerchCard;
