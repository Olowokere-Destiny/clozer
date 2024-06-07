import React from "react";
import { Typography, Container } from "@mui/material";
import DividerLine from "./DividerLine";
import CrewCard from "./CrewCard";
function Crew({obj}: CrewsData) {
  return (
    <>
      {/* Crew section */}
      <DividerLine />
      <Container
      id="crew"
        sx={{
          overflow: "auto",
          marginTop: "1rem",
          display: "flex",
          flexDirection: "column",
          gap: "0.8rem",
          alignItems: "center",
          mb: "1rem",
        }}
      >
        <Typography
          sx={{
            color: "white",
            fontWeight: "600",
            fontSize: "1.4rem",
            mt: "2rem",
            alignSelf: "start",
          }}
        >
          {obj?.title}
        </Typography>
        {obj?.items?.map((item, i) => {
          return <CrewCard key={i} img={item?.details?.image_url} artist={item?.details?.name} />;
        })}
      </Container>
    </>
  );
}

export default Crew;
