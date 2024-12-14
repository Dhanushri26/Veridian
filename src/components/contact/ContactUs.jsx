import { Box, Button, Typography } from "@mui/material";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
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
    backgroundColor: "#01825c",
    margin: "auto",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    marginBottom: "2em",
  },
  textContact: {
    color: "white",
    fontSize: "2em",
    paddingTop: "3rem",
  },
  textmore: {
    color: "white",
    fontSize: "1em",
    paddingTop: "1rem",
  },
  outbutton: {
    backgroundColor:'#006547',
    color: "white",
  textTransform: "none",
fontWeight: "bold",
},
  inbutton: {
    backgroundColor:'#f9c300',
    color:'black',
    fontWeight: "bold",
    borderRadius: "0",
    marginRight: "1em",
  },
  move: {
    transform: "rotate(90deg)",
    marginLeft: "0.5em",
    backgroundColor:"#005139",
    padding:'0.3em',
    display:'inline-block'
  }
};
