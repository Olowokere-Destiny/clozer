import React from "react";
import { Box, Typography } from "@mui/material";
import DividerLine from "./DividerLine";

function Footer() {
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "transparent",
        height: "100px",
        mt: "3rem",
        p: "1.5rem",
        mb: "10rem",
      }}
    >
      <DividerLine />
      <Box
        sx={{
          mt: "2rem",
          display: "flex",
          height: "100%",
          gap: { md: "4rem" },
          flexDirection: {
            xs: "column",
            md: "row",
          },
          rowGap: {
            xs: "1.5rem",
          },
        }}
      >
        <a
          style={{ color: "white" }}
          href="https://storage.googleapis.com/clozer-bc97fb95-legal/TalentPP_v03.pdf"
        >
          Privacy Policy
        </a>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            rowGap:"0.4rem",
            alignSelf: { xs: "center", md: "left" },
          }}
        >
          <Typography
            sx={{
              justifyContent: {
                lg: "center",
              },
              color: "rgb(242, 235, 255)",
              fontSize: "0.8rem",
              display: "flex",
              alignItems: "center",
              columnGap: "0.5rem",
            }}
          >
            Powered by{" "}
            <span
              style={{ color: "white", fontSize: "1.2rem", fontWeight: "600" }}
            >
              Clozer
            </span>
          </Typography>
          <Typography sx={{ color: "#D3D3D3", fontSize: "0.7rem" }}>
            Copyright © 2024 All Rights Reserved Clozer Ltd.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Footer;
