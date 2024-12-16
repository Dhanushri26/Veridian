import { Box } from "@mui/material";
import Appbar from "../../components/appbar/Appbar";
import Intro from "../../components/intro/Intro";
import Boxes from "../../components/boxes/Boxes";
import Investments from "../../components/investments/Investments";
import Footer from "../../components/footer/Footer";
import { createTheme, ThemeProvider } from "@mui/material";
import useSectionStore from "../../useSectionStore";
import { useEffect } from "react";
// import Sliding from "../../components/slider/Sliding";
// import Sliding from "../../components/slider/Sliding";
// import Profile1 from "../../components/profiles/Profile1";
// import TeamSlider from "../../components/slider/TeamSlider";

const theme = createTheme({
  typography: {
    fontFamily: '"IBM Plex Serif","DM Sans", sans-serif',
    fontStyle: "italic",
    fontWeightMedium: 400,
    fontWeight: 300,
  },
});
const Home = () => {
  const { selectedSection } = useSectionStore();
  console.log(selectedSection);

  useEffect(() => {
    const normalizedSection = selectedSection.toLowerCase().replace(/\s+/g, ' ');
    const sectionElement = document.getElementById(normalizedSection);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: "smooth" });
    }
  }, [selectedSection]);
  return (
    <ThemeProvider theme={theme}>
      {/* <CssBaseline /> */}
      <Box sx={style.home}>
        <Appbar />
        <div id="Home">
          <Intro /> {/* Home */}
        </div>
        <div id="About Us">
          <Boxes />
        </div>{" "}
        {/* "About Us", */}
        {/* "Our Team", */}
        <div id="Investment Approach">
          <Investments /> {/* "Investment Approach", */}
        </div>
        <div id="Contact Us">
          <Footer /> {/* "Contact Us", */}
        </div>
      </Box>
    </ThemeProvider>
  );
};

export default Home;

const style = {
  top: {
    top: "0",
    position: "sticky",
  },
  banner1: {
    margin: "7rem 1rem 1rem 1rem",
  },
  bottom: {
    width: "100%",
    height: "3rem",
    backgroundColor: "green",
    bottom: "0",
    margin: "0",
  },
  copyright: {
    color: "white",
    textAlign: "center",
  },
};
