import { Box,} from "@mui/material";
import Appbar from "../../components/appbar/Appbar";
import Intro from "../../components/intro/Intro";
import Boxes from "../../components/boxes/Boxes";
import Investments from "../../components/investments/Investments";
import Footer from "../../components/footer/Footer";
import { createTheme, ThemeProvider, CssBaseline } from '@mui/material';
import TeamSlider from "../../components/slider/TeamSlider";

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
        <Appbar sx={{zIndex:1000,position:'sticky',top:0}}/>
      </Box>
      <Box sx={style.banner1}>
        <Intro sx={{zIndex:2}}/>
      </Box>
      <Boxes />
      <TeamSlider sx={style.slider}/>
      <Investments />
      
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
