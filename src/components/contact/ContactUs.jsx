import { Box, Button, Typography } from "@mui/material";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import backgroundimg from '../../assets/ContactBg.png';
const ContactUs = () => {
  return (
    <Box sx={style.contact}>
      <Typography sx={style.textContact}>Contact us</Typography>
      <Typography sx={style.textmore}>
        Have questions or need more information? Reach out to us at.
      </Typography>
      <Button sx={style.outbutton}>
        <Button sx={style.inbutton}>Mail to</Button>
        &nbsp;info@veridian.com
        <ArrowUpwardIcon sx={style.move}/>
      </Button>
      <Typography sx={style.textmore}>&apos;We&apos;re here to help&apos;</Typography>
    </Box>
  );
};

export default ContactUs;

const style = {
  contact: {
    width: "95%",
    height: "18em",
    background: `url(${backgroundimg})`,
    margin: "auto",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    marginBottom: "2em",
    "@media (max-width: 600px)": {
      width: "100%",
      marginTop:"-7em",
    }
  },
  textContact: {
    color: "white",
    fontSize: "2em",
    paddingTop: "3rem",
    "@media (max-width: 600px)": {
      width: "100%",
      textAlign:"center"
    }
  },
  textmore: {
    color: "white",
    fontSize: "1em",
    paddingTop: "1rem",
    paddingBottom: "1rem",
    fontFamily: "DM Sans",
    "@media (max-width: 600px)": {
      width: "90%",
      textAlign:"center",
      margin: "auto"
    }
  },
  outbutton: {
    backgroundColor:'#006547',
    color: "white",
  textTransform: "none",
fontWeight: "bold",
fontFamily: "DM Sans",
},
  inbutton: {
    backgroundColor:'#f9c300',
    color:'black',
    fontWeight: "bold",
    borderRadius: "0",
    marginRight: "1em",
    fontFamily: "DM Sans",
  },
  move: {
    transform: "rotate(90deg)",
    marginLeft: "0.5em",
    backgroundColor:"#005139",
    padding:'0.3em',
    display:'inline-block'
  }
};
