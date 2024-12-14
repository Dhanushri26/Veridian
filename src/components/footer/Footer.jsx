import { Box, Typography } from "@mui/material"

const Footer = () => {
  return (
    <Box sx={style.footer}>
      <Typography sx={style.copyright}>COPYRIGHT © Veridian 2024. All rights reserved. Any and all content included on this website or incorporated by reference is protected by international copyright laws.</Typography>
      <Typography sx={style.terms}>
        Terms of use
      </Typography>
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
  },
  copyright: {
   color:'gray',
    fontSize: "0.8em",
    textAlign: "center",
  },
  terms: {
    color:'gray',
    fontSize: "0.8em",
    marginRight: "1rem",
    textAlign: "center",
  },
}