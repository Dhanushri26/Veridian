import { useState } from "react";
import { Grid2, Button, Box, Typography } from "@mui/material";
import Profile1 from "../profiles/Profile1";
import Profile2 from "../profiles/Profile2";
import Profile3 from "../profiles/Profile3";

const Sliding = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const profiles = [
    { id: 0, component: <Profile1 /> },
    { id: 1, component: <Profile2 /> },
    { id: 2, component: <Profile3 /> },
  ];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : profiles.length - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < profiles.length - 1 ? prevIndex + 1 : 0
    );
  };

  return (
    <Grid2 container sx={styles.sliderContainer}>
      <Typography sx={styles.title}>Our Team</Typography>
      <Button onClick={handlePrev} sx={styles.arrowButton1}>
        {"<"}
      </Button>
      <Box sx={styles.slider}>
        <Box
          sx={{
            display: "flex",
            transform: `translateX(-${currentIndex * 100}%)`,
            transition: "transform 0.5s ease-in-out",
          }}
        >
          {profiles.map((profile) => (
            <Box key={profile.id} sx={styles.slide}>
              {profile.component}
            </Box>
          ))}
        </Box>
      </Box>
      <Button onClick={handleNext} sx={styles.arrowButton2}>
        {">"}
      </Button>
    </Grid2>
  );
};

export default Sliding;

const styles = {
  sliderContainer: {
    display: "flex",
    alignItems: "center",
    position: "relative",
    maxWidth: "90%",
    margin: "auto",
    overflow: "hidden",
    // backgroundColor: "#d9eee9",
    paddingLeft: "10px",
    justifyContent: "center",
    textAlign: "center",
   zIndex:5,

  },
  title: {
    fontSize: "1.5em",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: "1em",
    marginTop: "2em",
  },
  slider: {
    width: "100%",
    display: "flex",
    overflow: "hidden",
  },
  slide: {
    minWidth: "100%",
    display: "flex",
    // justifyContent: "center",
    // alignItems: "center",
    flexShrink: 0, 
    boxSizing: "border-box", 
    padding: "10px",
  },
  arrowButton1: {
    minWidth: "40px",
    height: "40px",
    fontSize: "24px",
    borderRadius: "50%",
    backgroundColor: "rgba(0,0,0,0.6)",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    zIndex: 10,
    top:"50%",
    left:0,
    position:'absolute',
  },
  arrowButton2: {
    minWidth: "40px",
    height: "40px",
    fontSize: "24px",
    borderRadius: "50%",
    backgroundColor: "rgba(0,0,0,0.6)",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    zIndex: 10,
    top:"50%",
    right:0,
    position:'absolute',
  }
};
