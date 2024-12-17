import {
  Box,
  AppBar as MuiAppbar,
  MenuItem,
  Typography,
  List,
  ListItem,
  IconButton,
} from "@mui/material";
// import {useRef } from "react";
import { useState } from "react";
import Logo from "../../assets/Mask group.svg";
import useSectionStore from "../../useSectionStore";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
const Appbar = () => {
  // const [selected, setSelected] = useState("Home");
  const { selectedSection, setSelectedSection } = useSectionStore();
  const [openMenu, setOpenMenu] = useState(false);
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
    setOpenMenu(false);
  };

  const handleMenu = () => {
    setOpenMenu((prev) => !prev);
  };
  return (
    <MuiAppbar sx={style.appBar}>
      <Box sx={style.top}>
        <img
          src={Logo}
          alt="Logo"
          style={{
            height: "3.5em",
            justifyContent: "flex-start",
            paddingLeft: "3em",
          }}
        />
        <Box sx={style.menu}>
          {options.map((option) => (
            <MenuItem
              sx={style.menuItem}
              key={option}
              onClick={() => handleSelect(option)}
              style={
                selectedSection === option
                  ? { borderBottom: "2px solid #009065" }
                  : null
              }
            >
              <Typography sx={style.menuItemTypo}>{option}</Typography>
            </MenuItem>
          ))}
        </Box>
        <Box sx={{ display: { xs: "block", md: "none" }, marginRight: "1em" }}>
          <IconButton onClick={handleMenu}>
            {openMenu ? (
              <CloseIcon sx={{ fontSize: "1em", color: "#000" }} />
            ) : (
              <MenuIcon sx={{ fontSize: "1em", color: "#000" }} />
            )}
          </IconButton>
        </Box>
      </Box>
      {openMenu && (
        <Box sx={style.menuBox}>
          <List>
            {options.map((option) => (
              <ListItem
                key={option}
                button
                onClick={() => handleSelect(option)}
                sx={style.menuBoxItem}
              >
                <Typography
                  sx={{
                    fontSize: "1.2em",
                    paddingLeft: "1em",
                    fontFamily: "IBM Plex Serif",
                    color: selectedSection === option ? "#009065" : "black",
                  }}
                >
                  {option}
                </Typography>
              </ListItem>
            ))}
          </List>
        </Box>
      )}
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
    borderBottom: "1px solid lightgray",
    position: "sticky",
    top: 0,
    zIndex: 10,
    fontFamily: "IBM Plex Serif",
    "@media (max-width: 700px)": {
      width: "100%",
      margin: 0,
    },
  },

  menu: {
    flexGrow: 1,
    display: "flex",
    justifyContent: "Center",
    spacing: 3,
    alignItems: "center",
    "@media (max-width: 700px)": {
      width: "100%",
    },
  },

  menuItem: {
    paddingBottom: "9px",
    display: "inline-block",
    height: "2.5em",
    fontWeight: 200,
    fontFamily: "'IBM Plex Serif', sans-serif",
    marginTop: "-1em",
    "@media (max-width: 700px)": {
      display: "none",
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
  top: {
    display: "flex",
    paddingTop: "1rem",
  },
  "@media (max-width: 700px)": {
    appBar: {
      height: "4em",
      flexDirection: "row",
      justifyContent: "space-between",
      display: "none",
    },
    menu: {
      // flexGrow: 1,
      // display: "flex",
      // justifyContent: "space-around",
      // alignItems: "center",
      display: "none",
    },
    menuItem: {
      display: "none",
    },
  },

  menuBox: {
    position: "absolute",
    top: "5em",
    left: 0,
    width: "100%",
    backgroundColor: "white",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    zIndex: 20,
    textAlign: "center",
    paddingTop: "1em",
    paddingBottom: "1em",
  },
  menuBoxItem: {
    padding: "1em 0",
    "&:hover": {
      backgroundColor: "#f5f5f5",
    },
  },
};
export default Appbar;
