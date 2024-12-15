import { create } from "zustand";
import TeamSlider1 from "../../assets/Group 16.png";
import TeamSlider2 from "../../assets/Slider2.png";
import TeamSlider3 from "../../assets/Slider3.png";
import { Box, Button, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const useSliderStore = create((set) => ({
  currentIndex: 0,
  totalImages: 3,
  moveNext: () =>
    set((state) => ({
      currentIndex: (state.currentIndex + 1) % state.totalImages,
    })),
  movePrev: () =>
    set((state) => ({
      currentIndex:
        (state.currentIndex - 1 + state.totalImages) % state.totalImages,
    })),
}));

const images = [
  {
    id: 1,
    src: TeamSlider1,
    alt: "Team Slider 1",
  },
  {
    id: 2,
    src: TeamSlider2,
    alt: "Team Slider 2",
  },
  {
    id: 3,
    src: TeamSlider3,
    alt: "Team Slider 3",
  },
];

const TeamSlider = () => {
  const { currentIndex, moveNext, movePrev } = useSliderStore();

  return (
    <Box sx={styles.container}>
      <Typography sx={styles.title}>Our Team</Typography>
      <div style={styles.sliderContainer}>
        <Button
          onClick={movePrev}
          sx={styles.arrow}
          style={{
            ...styles.arrow,
            minWidth: "40px",
            width: "40px",
            height: "40px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 0,
          }}
          variant="contained"
        >
          <ArrowBackIcon sx={styles.arrowhead} />
        </Button>
        <div style={styles.carousel}>
          {images.map((image, index) => {
            const position = getPosition(index, currentIndex, images.length);
            return (
              <div
                key={image.id}
                style={{
                  ...styles.imageWrapper,
                  transform: `translateX(${position * 80}%) scale(${
                    position === 0 ? 1 : 0.85
                  })`,
                  opacity: position === 0 ? 1 : 0.7,
                }}
              >
                <img src={image.src} alt={image.alt} style={styles.image} />
              </div>
            );
          })}
        </div>
        <Button
          onClick={moveNext}
          sx={styles.arrow}
          style={{
            ...styles.arrow,
            minWidth: "40px",
            width: "40px",
            height: "40px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 0,
          }}
          variant="contained"
        >
          <ArrowForwardIcon sx={styles.arrowhead} />
        </Button>
      </div>
    </Box>
  );
};

const getPosition = (index, currentIndex, totalImages) => {
  if (index === currentIndex) return 0;
  if ((index - 1 + totalImages) % totalImages === currentIndex) return -1;
  if ((index + 1) % totalImages === currentIndex) return 1;
  return 2;
};

export default TeamSlider;

const styles = {
  container: {
    width: "95%",
    backgroundColor: "#d9eee9",
    margin: "auto",
  },
  sliderContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",  
    maxWidth: "98%",
    margin: "auto",
    overflow: "hidden",
    backgroundColor: "#d9eee9",
    padding: "10px 0",
    borderRadius: "10px",
    height: "15em",
  },
  title: {
    fontSize: "1.5em",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: "1em",
  },
  carousel: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    position: "relative",
    height: "100%",
  },
  imageWrapper: {
    position: "absolute",
    width: "60%",
    height: "100%",
    transition: "transform 0.5s ease, opacity 0.5s ease",
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "contain",
    borderRadius: "4px",
  },
  arrow: {
    cursor: "pointer",
    color: "#fff",
    zIndex: 3,
    backgroundColor: "#006547",
    borderRadius: "50%",
    height: "auto",
    padding: "-0.5rem",
    width: "1.5rem",
  },
  arrowhead: {
    fontSize: "1.2rem",
  },
};
