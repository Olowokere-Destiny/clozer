import React, { useState } from "react";
import { Box } from "@mui/material";

function Tabs() {
  const [active, setActive] = useState("music");
  const activeStyles = {
    borderRadius: "3px",
    fontWeight: "600",
    paddingLeft: "0.6rem",
    paddingRight: "0.6rem",
    paddingTop: "0.3rem",
    paddingBottom: "0.3rem",
    fontSize: "1.3rem",
    color: "white",
    backgroundColor: "#404040",
    cursor: "pointer",
    flexShrink: 0,
  };
  const normalStyle = {
    flexShrink: 0,
    cursor: "pointer",
    paddingLeft: "0.6rem",
    paddingRight: "0.6rem",
    paddingTop: "0.3rem",
    paddingBottom: "0.3rem",
    fontSize: "1.3rem",
    color: "white",
  };
  const tabItems = [
    {
      name: "My Music",
      to: "#music",
      tag: "music",
    },
    {
      name: "My Shows",
      to: "#shows",
      tag: "shows",
    },
    {
      name: "My Crew",
      to: "#crew",
      tag: "crew",
    },
    {
      name: "My Merch",
      to: "#merch",
      tag: "merch",
    },
  ];
  return (
    <Box
      className="no-scrollbar"
      sx={{
        py: "3rem",
        px: { xs: "0.8rem", lg: "1rem" },
        width: {
          xs: "100vw",
          md: "55vw",
          lg: "45vw",
        },
        margin: "auto",
        display: "flex",
        justifyContent: {
          xs: "left",
          md: "space-between",
        },
        overflow: "auto",
      }}
    >
      {tabItems.map((item, i) => {
        return (
          <a
            href={item.to}
            key={i}
            style={active === item.tag ? activeStyles : normalStyle}
            onClick={() => {
              setActive(item.tag);
            }}
          >
            {item.name}
          </a>
        );
      })}
    </Box>
  );
}

export default Tabs;
