import Head from "next/head";
import { Typography, Box, Container, IconButton } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Hero from "../components/Hero";
import MusicCard from "../components/MusicCard";
import Shows from "../components/Shows";
import Crew from "../components/Crew";
import Merch from "../components/Merch";
import { useEffect, useState } from "react";
import Tabs from "../components/Tabs";
export default function Home() {
  const [data, setData] = useState([]);
  const [profile, setProfile] = useState<ProfileProps>([]);
  useEffect(() => {
    fetch(process.env.NEXT_PUBLIC_PROFILE as string)
    .then((response) => response.json())
    .then((data) => setProfile(data))
    .catch((error) => console.error("Error fetching data:", error));

    fetch(process.env.NEXT_PUBLIC_TABS_DATA as string)
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const musicData: MusicData = data[0];
  const showsData = data[2];
  const crewData = data[3];
  const merchData = data[4];

  return (
    <div
      style={{
        minHeight: "100vh",
      }}
    >
      <Head>
        <title>{profile[0]?.username}</title>
        <meta
          name="description"
          content="Clozer.io assignment by Olowokere Destiny"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Hero section */}
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
          aria-label="menu"
          sx={{
            position: "absolute",
            top: {
              xs: "1rem",
              md: "0"
            },
            right: "20px",
            bgcolor: "gray",
            cursor: "pointer",
            zIndex: 100,
          }}
        >
          <MoreVertIcon sx={{ color: "white" }} />
        </IconButton>

        <Hero title={profile[0]?.display_name?.text} />
      </Box>

      <Box
        sx={{
          width: {
            xs: "100vw",
            md: "70vw",
          },
          height: "auto",
          margin: "auto",
        }}
      >
        <Tabs />
        {/* Music section */}
        <Box className="no-scrollbar"
          sx={{
            overflow: "auto",
            marginTop: "0.75rem",
            marginBottom: "3rem",
            width: {
              xs: "100vw",
              md: "55vw",
              lg: "45vw",
            },
            margin: 'auto'
          }}
        
        >
          <Typography
            sx={{
              color: "white",
              fontWeight: "600",
              fontSize: "1.4rem",
              ml: "1rem",
              mt: "2rem",
            }}
          >
            {musicData?.title}
          </Typography>
          <Container
            className="custom-grid"
          >
            {musicData?.items.length > 0 &&
              musicData?.items?.map((item, i) => {
                return (
                  <MusicCard
                    key={i}
                    img={item?.details?.CoverURL}
                    title={item?.details?.Album}
                    artist={item?.details?.Artists[0]}
                  />
                );
              })}
          </Container>
        </Box>
      </Box>
      <Box
        sx={{
          width: {
            xs: "100vw",
            md: "55vw",
            lg: "45vw",
          },
          margin: "auto",
        }}
      >
        <Shows obj={showsData}  />
        <Crew obj={crewData} />
        <Merch obj={merchData} />
      </Box>
    </div>
  );
}
