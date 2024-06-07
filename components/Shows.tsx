import React from "react";
import DividerLine from "./DividerLine";
import ShowCard from "./ShowCard";
import { Typography, Container } from "@mui/material";

function Shows({ obj }: ShowsData) {
  return (
    <>
      <DividerLine />

      {/* Shows section */}

      <Container
        id="shows"
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
          return (
            <ShowCard
              key={i}
              img={item?.details?.image_url}
              title={item?.details?.title}
              artist={item?.details?.artists[0]}
            />
          );
        })}
      </Container>
    </>
  );
}

export default Shows;
