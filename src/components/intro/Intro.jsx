import { Box,Button,Typography } from "@mui/material";
import SubdirectoryArrowLeftIcon from "@mui/icons-material/SubdirectoryArrowLeft";
import background from '../../assets/Group 62.png';
const Intro = () => {
  return (
    <Box sx={style.intro}>
      <Typography sx={style.introwelcome}> INVESTMENT MANAGEMENT</Typography>
      <Typography sx={style.center}>
        Empowering Investments with Expertise and Strategy
      </Typography>
      <Button sx={style.knowmore}>
        Know More <SubdirectoryArrowLeftIcon sx={style.knowicon} />
      </Button>
    </Box>
  );
};

const style = {
  intro: {
    width: "97%",
    background: `url(${background})`,
    backgroundSize: "cover",
    height: "28rem",
    textAlign: "center",
    margin: "auto",
    marginTop:"3em",
    "@media (max-width: 600px)": {
      height: "40rem",
      paddingTop: "2rem",
      marginTop:"1rem",
      fontSize: "0.8em",
      width:"100%",
     
    },
  },
  introwelcome: {
    color: "white",
    fontSize: "0.8em",
    marginTop: "5rem",
    backgroundColor: "#f9c300",
    display: "inline-block",
    padding: "0.2rem",
  },
  center: {
    color: "white",
    fontSize: "3em",
    width: "70%",
    margin: "auto",
    marginTop: "0.5rem",
    fontWeight: "bold",
  },
  knowmore: {
    backgroundColor: "#006547",
    color: "white",
    marginTop: "1rem",
    fontSize: "0.9em",
    textTransform: "none",
  },
  knowicon: {
    transform: "rotate(-90deg)",
    fontSize: "1.5em",
  },
};
export default Intro;
