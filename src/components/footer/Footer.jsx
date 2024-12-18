import { Box, Button, Typography } from "@mui/material"
// import { useState } from "react";
// import Dialogue from "../Dialogue/Dialogue";
const Footer = () => {
  // const[openDialogue, setOpenDialogue] = useState(false);
//  const handleDialogue = () => {
//    setOpenDialogue(true);
//  }
  return (
    <Box sx={style.footer}>    
      <Typography sx={style.copyright}>COPYRIGHT © Veridian 2024. All rights reserved. Any and all content included on this website or incorporated by reference is protected by international copyright laws.</Typography>
      <Button sx={style.terms}>
      {/* {openDialogue && 
      <Dialog open={openDialogue}>
        <DialogContent>
              <Dialogue/>
              </DialogContent>
      </Dialog>

    } */}
      <Typography sx={style.terms}>
        Terms of use
      </Typography>
      </Button>
    </Box>    
  )
}
export default Footer

const style = {
  footer: {
    width: "100%",
    height: "3rem",
    borderTop: "1px solid lightgray",
    bottom: "0",
    margin: "0",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    "@media (max-width: 700px)": {
      width: "100%",
      height: "5em", 
      flexDirection: "column",
    }  
  },
  copyright: {
   color:'gray',
    fontSize: "0.8em",
    textAlign: "center",
    fontFamily: "DM Sans",
    "@media (max-width: 700px)": {
      fontSize: "0.7em",     
    }
  },
  terms: {
    color:'gray',
    fontSize: "0.8em",
    marginRight: "1rem",
    textAlign: "center",
    fontFamily:"DM Sans",
    textTransform: "none",
  },
}