import { Box, Grid2, IconButton, Typography } from "@mui/material";
import ContactUs from "../contact/ContactUs";
import image1 from "../../assets/image 9.png";
import image2 from "../../assets/Group 60.png";
import image3 from "../../assets/image 11.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useRef } from "react";
const invests = [
  {
    id: 1,
    title: "Investment Approach and Strategy",
    image: image1,
    description: [
      "Veridian focuses on companies across a number of different sectors, predominantly internet-based companies with long term growth potential, with the aim of releasing the potential of businesses, sustainably improving operations and generating significant growth and profitability. ",
      "Our investment strategy creates value at every stage of an investment. Utilizing the strengths of our industry experienced team, Veridian has crafted a streamlined process from identifying potential opportunities through due diligence and deal documentation and onward to integration and transformation. Veridian’s unique combination of people and processes is market-tested to generate and release significant value and growth.",
    ],
  },
  {
    id: 2,
    title: "Portfolio Management",
    image: image2,
    description: [
      "The central investment of Veridian is in the Pragmatic Play group of companies headed by Tamaris (Gibraltar) Limited. Pragmatic Play is a world-leading game developer providing player-favourites to the most successful global brands in the iGaming industry.",
      "Powering up new possibilities of play through one single API, Pragmatic Play offers a multi-product portfolio of award-winning slots, live casino, bingo, virtual sports, sportsbook and more, available in all major regulated markets, languages and currencies. Driven by persistence to craft immersive experiences and responsible thrills, Pragmatic Play’s professional team consistently deliver best in class services to its partners worldwide with a dedication to creating games that players love time and time again.",
    ],
  },
  {
    id: 3,
    title: "Corproate social responsibility",
    image: image3,
    description:
      "Veridian supports responsible investing and evaluates environmental, social and governance issues in its investments. Veridian believes that responsible investing and return on investment go together, and consideration of ESG issues improves portfolio company performance and investment results.",
  },
];
const Investments = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <>
      <Box sx={style.investbox}>
        <Typography sx={style.investtitle}>
          Holistic Investment Approach
        </Typography>
        <IconButton
          ref={prevRef}
          sx={{
            display: { xs: "block", md: "none" },
            position: "absolute",
           marginTop:"8em",
            left: "1%",
            zIndex: 2,
            transform: "translateY(-50%)",
            backgroundColor: "#11423f",
            color: "white",
            alignItems:"center",
            "&:hover": { backgroundColor: "#f0f0f0" },
          }}
        >
          <ArrowBackIcon fontSize="medium" />
        </IconButton>
        <IconButton
          ref={nextRef}
          sx={{
            display: { xs: "block", md: "none" },
            position: "absolute",
            // top: "700%"
             marginTop:"8em",
            right: "1%",
            zIndex: 2,
            transform: "translateY(-50%)",
            backgroundColor: "#11423f",
            color: "white",
            fontSize: "1.5em",
            "&:hover": { backgroundColor: "#f0f0f0" },
          }}
        >
          <ArrowForwardIcon fontSize="medium"  />
        </IconButton>
        <Box sx={{ display: { xs: "block", md: "none" } }}>
          <Swiper
            spaceBetween={20}
            slidesPerView={1}
            modules={[Pagination, Navigation]}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            onSwiper={(swiper) => {
             
              setTimeout(() => {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
                swiper.navigation.init();
                swiper.navigation.update();
              });
            }}
            // pagination={{ el: ".swiper-pagination", clickable: true }}
            loop={true}
          >
            {invests.map((item) => (
              <SwiperSlide key={item.id}>
                <Box sx={style.container}>
                  <img
                    src={item.image}
                    alt={item.title}
                    style={{
                      marginTop: "0.5rem",
                      paddingBottom: 0,
                      height: "12rem",
                      width:"90%"
                    }}
                  />
                  <Typography sx={style.containertitle}>
                    {item.title}
                  </Typography>
                  {Array.isArray(item.description) ? (
                    item.description.map((paragraph, index) => (
                      <Typography key={index} sx={style.containertext}>
                        {paragraph}
                      </Typography>
                    ))
                  ) : (
                    <Typography sx={style.containertext}>
                      {item.description}
                    </Typography>
                  )}
                </Box>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="swiper-button-next" style={style.navButton}></div>
          <div className="swiper-button-prev" style={style.navButton}></div>

          <div className="swiper-pagination" style={style.pagination}></div>
        </Box>

        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            justifyContent: "space-between",
            paddingLeft: "3rem",
            paddingRight: "3rem",
          }}
        >
          {invests.map((item) => (
            <Grid2 xs={3} key={item.id} container spacing={3} sx={style.grid}>
              <Box sx={style.container}>
                <img
                  src={item.image}
                  alt={item.title}
                  style={{
                    marginTop: "0.5rem",
                    paddingBottom: 0,
                    height: "12rem",
                  }}
                />
                <Typography sx={style.containertitle}>{item.title}</Typography>
                {Array.isArray(item.description) ? (
                  item.description.map((paragraph, index) => (
                    <Typography key={index} sx={style.containertext}>
                      {paragraph}
                    </Typography>
                  ))
                ) : (
                  <Typography sx={style.containertext}>
                    {item.description}
                  </Typography>
                )}
              </Box>
            </Grid2>
          ))}
        </Box>
      </Box>
      <ContactUs />
    </>
  );
};

export default Investments;

const style = {
  investbox: {
    width: "97%",
    height: "52rem",
    margin: "auto",
    backgroundColor: "#d9eee9",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    paddingTop: "5rem",
    "@media (max-width: 700px)": {
      marginBottom: "3em",
      width: "100%",
    },
  },
  details: {
    display: "flex",
    justifyContent: "space-between",
    paddingLeft: "3rem",
    paddingRight: "3rem",
  },
  grid: {
    padding: "0.5rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "white",
    width: "30%",
    height: "38em",
  },
  investtitle: {
    color: "black",
    fontSize: "1.5em",
    paddingTop: "2rem",
    paddingBottom: "2rem",
    fontWeight: "bold",
  },
  containertitle: {
    fontSize: "1em",
    fontWeight: "bold",
    textAlign: "Left",
    margin: "1rem 0 0 1rem",
    color: "black",
  },
  containertext: {
    fontSize: "0.8em",
    textAlign: "Left",
    margin: "0.5rem 0 0 1rem",
    fontFamily: "DM Sans",
  },
  container: {
    fontFamily: "DM Sans",
    color: "#717B85",
    backgroundColor: "white",
    width: "96%",
    height: "37em",
    margin: "auto",
  },

  navButton: {
    display:"none"
  },
  
};
