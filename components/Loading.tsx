import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

export default function Loading() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        minHeight: "100vh",
        bgcolor: "rgba(0, 0, 0, 0.88)",
      }}
    >
      <CircularProgress
        sx={{ alignSelf: "start", margin: "auto", color: "white" }}
      />
    </Box>
  );
}
