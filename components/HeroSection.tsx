import React, { useState } from "react";
import { Box, IconButton } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Hero from "../components/Hero";
import HeroModal from "./HeroModal";


function Herosection({ profile }: {profile: ProfileProps}) {
  const [modalOpen, setModalOpen] = useState(false);
  const handleOpen = () => setModalOpen(true);
  const handleClose = () => setModalOpen(false);
  console.log(profile)
  return (
    <>
      <HeroModal
        modalOpen={modalOpen}
        handleClose={handleClose}
        profile={profile}
      />
      <Box
        sx={{
          width: {
            xs: "100vw",
            md: "70vw",
          },
          height: "auto",
          position: "relative",
          margin: "auto",
          marginTop: {
            md: "100px",
          },
        }}
      >
        <IconButton
          disableRipple
          onClick={handleOpen}
          aria-label="menu"
          sx={{
            position: "absolute",
            top: {
              xs: "1rem",
              md: "0",
            },
            right: "20px",
            bgcolor: "gray",
            cursor: "pointer",
            zIndex: 100,
            opacity: {
              xs: "0.7",
              sm: "1"
            }
          }}
        >
          <MoreVertIcon sx={{ color: "white" }} />
        </IconButton>

        <Hero title={profile[0]?.display_name?.text} />
      </Box>
    </>
  );
}

export default Herosection;
