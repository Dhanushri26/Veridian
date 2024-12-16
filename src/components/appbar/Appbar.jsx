import { Box, AppBar as MuiAppbar, MenuItem, Typography } from "@mui/material";
// import {useRef } from "react";
import Logo from '../../assets/Mask group.svg';
import useSectionStore from "../../useSectionStore";
import MenuIcon from '@mui/icons-material/Menu';
const Appbar = () => {
  // const [selected, setSelected] = useState("Home");
  const { selectedSection, setSelectedSection } = useSectionStore();
  const options = [
    "Home",
    "About Us",
    "Our Team",
    "Investment Approach",
    "Contact Us",
  ];
  const handleSelect = (option) => {
    setSelectedSection(option);
    const sectionElement = document.getElementById(option);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <MuiAppbar sx={style.appBar}>
      <Box sx={style.top}>
      <img src={Logo} alt="Logo" style={{ height: "3.5em",justifyContent:'flex-start',paddingLeft:'3em' }} />
      <Box sx={style.menu}>
        
        {options.map((option) => (
          <MenuItem
            sx={style.menuItem}
            key={option}
            onClick={() => handleSelect(option)}
            style={
              selectedSection === option ? { borderBottom: "2px solid #009065" } : null
            }
          >
            <Typography sx={style.menuItemTypo}>{option}</Typography>
          </MenuItem>
        ))}
      </Box>
      <MenuIcon sx={{display:{xs:'inline',md:'none',justifyContent:'flex-end',paddingRight:'0.5em',paddingTop:'0.5em'}}} />
      </Box>
    </MuiAppbar>
  );
};
const style = {
  appBar: {
    backgroundColor: "white",
    color: "gray",
    height: "5em",
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
    boxShadow: "none",
    borderBottom:'1px solid lightgray',
    position:'sticky',
    top:0,
    zIndex:10,
    fontFamily: "IBM Plex Serif",
    "@media (max-width: 700px)": {
      width: "100%",
      margin:0
    }
   
    
  },
  menu: {
    flexGrow: 1,
    display: "flex",
    justifyContent: "Center",
    spacing: 3,
    alignItems: "center",
    "@media (max-width: 700px)": {
      width:"100%",
    }
  },

  menuItem: {
    paddingBottom: "9px",
    display:'inline-block',
    height:'2.5em',
    fontWeight:200,
    fontFamily:"'IBM Plex Serif', sans-serif",
    marginTop:"-1em",
    "@media (max-width: 700px)": {
      display:'none'
    },
    // fontSize:'1.2em',
    // fontWeight:'bold',
    // fontFamily:"'Times New Roman', sans-serif",
  },
  menuItemTypo: {
    fontSize: "1.2em",
    fontWeight: "semibold",
    color: "black",
  },
  top:{
    display:'flex',
    paddingTop:'1rem'
  },
  "@media (max-width: 700px)": {
    appBar: {
      height: "4em", // Smaller height for mobile
      flexDirection: "row", // Change layout direction for mobile
      justifyContent: "space-between",
      display:'none'
    },
    menu: {
      // flexGrow: 1,
      // display: "flex",
      // justifyContent: "space-around", // Space out items for mobile
      // alignItems: "center",
      display:'none'
    },
    menuItem: {
     display:'none'
    },
    
  }
};
export default Appbar;
