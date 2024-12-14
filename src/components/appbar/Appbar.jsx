import { Box, AppBar as MuiAppbar, MenuItem, Typography } from "@mui/material";
import { useState } from "react";
import Logo from '../../assets/Mask group.svg';
const Appbar = () => {
  const [selected, setSelected] = useState("Home");
  const options = [
    "Home",
    "About Us",
    "Our Team",
    "Investment Approach",
    "Contact Us",
  ];
  const handleSelect = (option) => {
    setSelected(option);
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
              selected === option ? { borderBottom: "2px solid #009065" } : null
            }
          >
            <Typography sx={style.menuItemTypo}>{option}</Typography>
          </MenuItem>
        ))}
      </Box>
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
  },
  menu: {
    flexGrow: 1,
    display: "flex",
    justifyContent: "Center",
    spacing: 3,
    alignItems: "center",
  },

  menuItem: {
    paddingBottom: "2px",
    display:'inline-block',
    height:'2.5em'
  },
  menuItemTypo: {
    fontSize: "1.2em",
  },
  top:{
    display:'flex',
    paddingTop:'1rem'
  }
};
export default Appbar;
