
import { Box, Grid2, Typography } from "@mui/material";
import Logo from "../../assets/Mask group.svg";
import BadgeIcon from "../../icons/Badge";
import IdeaIcon from "../../icons/Idea";
import GiveIcon from "../../icons/Give";
import GlobalIcon from "../../icons/Global";
import bg from "../../assets/Pattern BG.png";
import TeamSwiper from "../slider/TeamSwiper";

const Boxes = () => {
  return (
    <Grid2 sx={style.grid}>
      <Grid2 size={12} sx={style.grid1}>
        <Typography sx={style.typo}>About Us</Typography>
        <Box sx={style.boxed1}>
          <Box sx={style.boxed2}>
            <img
              src={Logo}
              alt="Logo"
              style={{marginTop: "0.5em",minHeight:"6em" ,height:"auto"}}
            />
          </Box>

          <Grid2 size={8} sx={{ height: "auto" }}>
            <Typography sx={style.typo1}>
              Veridian is an investment, management and development company
              based in Gibraltar. We create value in our investments by
              leveraging our own experience, using tried-and-true strategies and
              extensive industry expertise.
            </Typography>
            <Typography sx={style.typo1}>
              We work with our business management team to develop and implement
              tailored strategies focused on strong products with powerful
              sales, to develop profit generating growth models. Value creation
              is fundamental to our goal and we develop our businesses with this
              is mind.
            </Typography>
            <Typography sx={style.typo1}>
              Veridian&apos;s expertise is delivered with a responsible approach
              to our business, our team, our local community, and the
              environment.
            </Typography>
          </Grid2>
        </Box>
      </Grid2>
      <Grid2 container spacing={2} sx={style.secondwholegrid}>
        {data.map((item, index) => (
          <Grid2 key={index} size={6} spacing={1} sx={style.internalgrid}>
            <Box sx={style.boxed}>
              
              <Typography sx={style.title}>{item.title}</Typography>
              <Box sx={style.descriptionContainer}>
                <Typography sx={style.description}>
                  {item.description}
                </Typography>
                <Box sx={style.iconbox}>
                <div>{item.icon}</div>
                </Box>
              </Box>
            </Box>
          </Grid2>
        ))}
      </Grid2>
      <div id="Our Team">
        <TeamSwiper sx={{ zIndex: 0, marginBottom: "2em" }} />
      </div>
    </Grid2>
  );
};

export default Boxes;
const style = {
  grid: {
    padding: "0",
    width: "90%",
    justifyContent: "center",
    alignItems: "center",
    // minheight: "50em",
    height: "auto",
    backgroundColor: "#d9eee9",
    margin: "auto",
    marginTop: "2em",
    paddingBottom:0,
    // paddingBottom: "10em",
    backgroundImage: `url(${bg})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    fontFamily: "DM Sans",
    "@media (max-width: 700px)": {
      height: "auto",
      paddingBottom: "2em",
      width: "100%",
      backgroundColor:"#d9eee9",
    },
  },
  secondwholegrid: {
    display: "flex",
    justifyContent: "space-evenly",
    width: "95%",
    margin: "auto",
    height:"auto",
    paddding:0,
    "@media (max-width: 700px)": {
     
      height: "auto",
      justifyContent: "center",
      alignItems: "center",
      textAlign:"left",
      width: "94%",
      margin: "auto",
    },
  },
  boxed1: {
    height: "auto",
    minHeight: "15em",
    width: "95%",
    margin: "auto",
    display: "flex",
    justifyContent: "space-evenly",
    backgroundColor: "white",
    "@media (max-width: 700px)": {
      flexDirection: "column",
      height: "auto",
      width: "94%",
      backgroundColor: "white",
    },
  },
  internalgrid: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
    
    "@media (max-width: 700px)": {
    
    width: "100%",
    margin: "auto",
    backgroundColor: "white",
    height: "auto",
      
    }
  },
  grid1: {
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    marginBottom: "2em",
    height: "auto",
    "@media (max-width: 700px)": {
      textAlign: "center",
      backgroundColor: "#d9eee9",
      width: "100%",
    },
  },
  typo: {
    fontSize: "1.2em",
    margin: "1em",
    paddingTop: "1em",
    fontWeight: "bold",
    "@media (max-width: 700px)": {
      fontSize: "1.5em",
      marginTop: "-8%",
    },
  },
  layer1: {
    justifyContent: "space-between",
  },
  
  boxed2: {
   
    height:"11em",
    paddingBottom:0,
    backgroundColor: "#e1f0ed",
    width: "50em",
    display: "flex",
    marginTop: "2em",
    marginLeft: "2em",
    justifyContent: "center",
    alignItems: "center",
    "@media (max-width: 700px)": {
      margin: "auto",
      width: "96%",
      paddingTop: "1em",
      paddingBottom: "1em",
      marginTop: "1em",
      backgroundColor:"#d9eee9"
    },
  },
  typo1: {
    fontSize: "0.9em",
    width: "90%",
    flexGrow: 1,
    margin: "auto",
    marginTop: "1em",
    textAlign: "left",
    fontFamily: "DM Sans",
    color: "#717B85",
    "@media (max-width: 700px)": {
      marginBottom: "2em",
    },
  },
  boxed: {
    width: "98%",
    height: "auto",
    minHeight:"8.5em",
    justifyContent: "space-between",
    backgroundColor: "#ffffff",
    "@media (max-width: 700px)": {
      position:"relative",
      height: "auto",
      width: "100%",
      marginBottom: "1.5em",
    
     
    },
  },
  title: {
    fontSize: "1em",
    fontWeight: "bold",
    marginLeft: "1.5em",
    paddingTop: "1em",
    "@media (max-width: 700px)": {
      top:"40%",
      paddingTop:"8%",
      position:"absolute",
      textAlign: "left",
      marginLeft:"6%",
      display:"block"
    },
  },
  descriptionContainer: {
    display: "flex",
    justifyContent: "space-between",
    width: "98%",
    marginLeft: "0.5em",
    height: "auto",
    minHeight:"4em",
   
    "@media (max-width: 700px)": {
      // flexDirection: "column-reverse",
      height: "12em",
      width: "90%",
      marginBottom: "1.5em",
      padding: "1em", 
      paddingBottom:"2em",
      // bottom:0,
      // position:"absolute"
    },
  },
  description: {
    fontSize: "0.8em",
    backgroundColor: "#ffffff",
    flexGrow: 1,
    marginLeft: "1.2em",
    marginTop: "0.5em",
    textAlign: "justify",
    width: "70%",
    fontFamily: "DM Sans",
    color: "#717B85",
    paddingLeft:"-1em",
    "@media (max-width: 700px)": {
      width: "90%",
      marginLeft: "0",
      marginTop: "2em",
      paddingTop:"-1em",
      fontSize: "0.9em",
      position:"absolute",
      bottom:0
     
     
    },
  },
  iconset:{
    "@media (max-width: 700px)": {
     
    }
  },
  iconbox:{
    marginTop:"-1.5em",
    "@media (max-width: 700px)": {
      marginLeft:"-3.5em",
      position:"absolute",
      top:25
    }
  }
};


const data = [
  {
    title: "Excellence",
    description:
      "We strive for excellence by continuously honing our skills & expanding our knowledge. Our commitment to excellence drives innovation and quality, setting us apart as leaders in our field.",
    icon: <BadgeIcon sx={{ fontSize: "1em", color: "#f3a31b", paddingTop: "-1em" }}/> 
  },
  {
    title: "Initiative",
    description:
      "We encourage a proactive mindset where our team is empowered to take initiative and pursue opportunities for growth. We drive creativity and transformative solutions.",
    icon: <IdeaIcon sx={{ fontSize: "2em", color: "#f3a31b" }} />,
  },
  {
    title: "Sustainability",
    description:
      "We are dedicated to sustainable practices that positively impact our community and environment , commitment to responsibility ensures we contribute to a better future for generations to come.",
    icon: <GiveIcon sx={{ fontSize: "1em", color: "#f3a31b" }} />,
  },
  {
    title: "Integrity",
    description:
      "We operate with honesty and uphold the highest ethical standards. Integrity is the cornerstone of our business, guiding our actions and decisions to earn the trust of our clients and partners.",
    icon: <GlobalIcon sx={{ fontSize: "2em", color: "#f3a31b" }} />,
  },
];
