import { Box,} from "@mui/material";
import Appbar from "../../components/appbar/Appbar";
import Intro from "../../components/intro/Intro";
import Boxes from "../../components/boxes/Boxes";
import Investments from "../../components/investments/Investments";
import Footer from "../../components/footer/Footer";
import { createTheme, ThemeProvider, CssBaseline } from '@mui/material';

const theme = createTheme({
  typography: {
    fontFamily: '"DM Sans", sans-serif', 
    fontStyle:'italic',
  },
});
const Home = () => {
  return (
    <ThemeProvider theme={theme}> 
      <CssBaseline /> 
    <Box sx={style.home}>
      <Box sx={style.top}>
        <Appbar />
      </Box>
      <Box sx={style.banner1}>
        <Intro />
      </Box>
      <Boxes />
      <Investments />
      {/* <Box sx={style.bottom}>
        <Typography sx={style.copyright}>COPYRIGHT © Veridian 2024. All rights reserved. Any and all content included on this website or incorporated by reference is protected by international copyright laws.</Typography>
      </Box> */}
      <Footer/>
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
