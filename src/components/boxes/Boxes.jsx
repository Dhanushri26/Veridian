import { Box, Grid2, Typography } from "@mui/material";
import Logo from '../../assets/Mask group.svg';
import BadgeIcon from "../../icons/Badge";
import IdeaIcon from "../../icons/Idea";
import GiveIcon from "../../icons/Give";
import GlobalIcon from "../../icons/Global";

const Boxes = () => {
  return (
    <Grid2 sx={style.grid}>
      
      <Grid2 size={12} sx={style.grid1}>
      <Typography sx={style.typo}>About Us</Typography>
        <Box sx={style.boxed1}>
          
            <Box sx={style.boxed2}>
              <img src={Logo} alt="Logo" style={{ height: "8em",marginTop:'0.5em' }} />
            </Box>
        
          <Grid2 size={8}>
            <Typography sx={style.typo1}>
              Veridian is an investment, management and development company
              based in Gibraltar. We create value in our investments by
              leveraging our own experience, using tried-and-true strategies and
              extensive industry expertise.</Typography>
              <Typography sx={style.typo1}>
               We work with our business management
              team to develop and implement tailored strategies focused on
              strong products with powerful sales, to develop profit generating
              growth models. Value creation is fundamental to our goal and we
              develop our businesses with this is mind.</Typography> 
              <Typography sx={style.typo1}>
              Veridian&apos;s
              expertise is delivered with a responsible approach to our
              business, our team, our local community, and the environment.
            </Typography>
          </Grid2>
        </Box>
      </Grid2>
      <Grid2 container spacing={5} sx={{ display: "flex", justifyContent: "space-evenly",width:'98%',margin:'auto' }}>
      {data.map((item, index) => (
        <Grid2
          key={index}
          size={5}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly",
          }}
        >
          <Box sx={style.boxed}>
            <Typography sx={style.title}>{item.title}</Typography>
            <Box sx={style.descriptionContainer}>
              <Typography sx={style.description}>{item.description}</Typography>
              {item.icon}
            </Box>
          </Box>
        </Grid2>
      ))}
    </Grid2>
    </Grid2>
  );
};

export default Boxes;
const style = {
  // boxed: {
  //   border: "1px solid black",
  //   height: "12em",
  //   width: "40%",
  // },
  grid: {
    padding: "0",
    width: "95%",
    justifyContent:'center',
    alignItems: "center",
    height: "50em",
    backgroundColor: "#d9eee9",
    margin: "auto",
    marginTop: "2em",
    paddingBottom: "2em",
  },
  boxed1: {
    height: "15em",
    width: "87%",
    margin: "auto",
    display: "flex",
    justifyContent: "space-evenly",
    backgroundColor:'white'
  },
  grid1: {
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    marginBottom: "2em",
  },
  typo: {
    fontSize: "1.5em",
    margin: "1em",
    paddingTop: "1em",
  },
  layer1: {
    justifyContent: "space-between",

    // spacing:'6em',
    // display:'flex',
    // flexDirection:'column'
  },
  boxed2: {
   
    height: "10em",
    backgroundColor: "#e1f0ed",
    width: "50em",
    display: "flex",
    marginTop: "2em",
    marginLeft: "2em",
    justifyContent: "center",
    alignItems: "center",
  },
  typo1: {
    fontSize: "0.9em",
    width: "90%",
    flexGrow: 1,
    margin: "auto",
    marginTop: "1em",
    textAlign: "left",
    // paddingLeft: "10em",
  },
  boxed: {
   
    
   
    width: "100%",
    height: "10em",
    justifyContent: "space-between",
    backgroundColor: "#f9f9f9",
    
  },
  title: {
    fontSize: "1em",
    fontWeight: "bold",
    marginBottom: "0.5em",
    marginLeft:'0.5em',
    paddingTop:'0.5em'
  },
  descriptionContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    // gap: "1em",
    width:'98%',
    marginLeft:'0.5em',
    paddingTop:'0em'
  },
  description: {
    fontSize: "1em",
    color: "#333",
    flexGrow: 1,
    marginLeft:'0.5em',
    
    textAlign: "justify",
  },
};


const data = [
  {
    title: "Excellence",
    description:
      "We strive for excellence by continuously honing our skills & expanding our knowledge. Our commitment to excellence drives innovation and quality, setting us apart as leaders in our field.",
    icon: <BadgeIcon sx={{ fontSize: "1em", color: "#f3a31b",paddingTop:'-1em' }} />,
  },
  {
    title: "Initiative",
    description:
      "We encourage a proactive mindset where our team is empowered to take initiative and pursue opportunities for growth. We drive creativity and transformative solutions.",
    icon: <IdeaIcon sx={{ fontSize: "3em", color: "#f3a31b" }} />,
  },
  {
    title: "Sustainability",
    description:
      "We are dedicated to sustainable practices that positively impact our community and environment. Our commitment to responsibility ensures we contribute to a better future for generations to come.",
    icon: <GiveIcon sx={{ fontSize: "3em", color: "#f3a31b" }} />,
  },
  {
    title: "Integrity",
    description:
      "We operate with honesty and uphold the highest ethical standards. Integrity is the cornerstone of our business, guiding our actions and decisions to earn the trust of our clients and partners.",
    icon: <GlobalIcon sx={{ fontSize: "3em", color: "#f3a31b" }} />,
  },
];
