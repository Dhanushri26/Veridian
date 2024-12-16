import { Box, Grid2, Typography } from "@mui/material";
import ContactUs from "../contact/ContactUs";
import image1 from "../../assets/image 9.png";
import image2 from "../../assets/Group 60.png";
import image3 from "../../assets/image 11.png";
import { Swiper, SwiperSlide } from "swiper/react"; // Import Swiper components
// import "swiper/swiper-bundle.min.css";
import { Pagination, Navigation } from "swiper/modules";
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

// const Investments = () => {
//   return (
//     <>
//       <Box sx={style.investbox}>
//         <Typography sx={style.investtitle}>
//           Hoslistic Investment Approach
//         </Typography>
//         <Box sx={style.details}>
//           {invests.map((item) => (
//             <Grid2 xs={3} key={item.id} container spacing={3} sx={style.grid}>
//               <Box sx={style.container}>
//                 <img
//                   src={item.image}
//                   alt={item.title}
//                   style={{
//                     marginTop: "0.5rem",
//                     paddingBottom: 0,
//                     height: "12rem",
//                   }}
//                 />
//                 <Typography sx={style.containertitle}>{item.title}</Typography>
//                 {/* <Typography sx={style.containertext}>{item.description}</Typography> */}
//                 {Array.isArray(item.description) ? (
//                   item.description.map((paragraph, index) => (
//                     <Typography key={index} sx={style.containertext}>
//                       {paragraph}
//                     </Typography>
//                   ))
//                 ) : (
//                   <Typography sx={style.containertext}>
//                     {item.description}
//                   </Typography>
//                 )}
//               </Box>
//             </Grid2>
//           ))}
//         </Box>
//       </Box>
//       <ContactUs />
//     </>
//   );
// };

// export default Investments;

// const style = {
//   investbox: {
//     width: "95%",
//     height: "52rem",
//     margin: "auto",
//     backgroundColor: "#d9eee9",
//     // display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     textAlign: "center",
//     paddingTop: "5rem",
//   },
//   details: {
//     display: "flex",
//     justifyContent: "space-between",
//     paddingLeft: "3rem",
//     paddingRight: "3rem",
//   },
//   grid: {
//     padding: "0.5rem",
//     display: "flex",
//     flexDirection: "column",
//     justifyContent: "space-between",
//     alignItems: "center",
//     backgroundColor: "white",
//     width: "30%",
//     height: "37em",
//   },
//   investtitle: {
//     color: "black",
//     fontSize: "1.5em",
//     paddingTop: "2rem",
//     paddingBottom: "2rem",
//     fontWeight: "bold",
//   },
//   containertitle: {
//     fontSize: "1em",
//     fontWeight: "bold",
//     textAlign: "Left",
//     margin: "1rem 0 0 1rem",
//     color: "black",
//     // paddingTop: "-10rem",
//   },
//   containertext: {
//     fontSize: "0.8em",
//     textAlign: "Left",
//     margin: "0.5rem 0 0 1rem",
//     fontFamily: "DM Sans",
//   },
//   container: {
//     fontFamily: "DM Sans",
//     color: "#717B85",
//   },
// };


const Investments = () => {
  return (
    <>
      <Box sx={style.investbox}>
        <Typography sx={style.investtitle}>Holistic Investment Approach</Typography>

        <Box sx={{ display: { xs: "block", md: "none" } }}>
          <Swiper spaceBetween={20} slidesPerView={1} modules={[Pagination, Navigation]}
            navigation={{ prevEl: ".swiper-button-prev", nextEl: ".swiper-button-next" }}
            pagination={{ el: ".swiper-pagination", clickable: true }} loop={true}>
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
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="swiper-button-next" style={style.navButton}></div>
          <div className="swiper-button-prev" style={style.navButton}></div>

          <div className="swiper-pagination" style={style.pagination}></div>
        </Box>

        <Box sx={{ display: { xs: "none", md: "flex" }, justifyContent: "space-between", paddingLeft: "3rem", paddingRight: "3rem" }}>
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
    width: "95%",
    height: "52rem",
    margin: "auto",
    backgroundColor: "#d9eee9",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    paddingTop: "5rem",
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
    position: "absolute",
    top: "650%",
    zIndex: 10,
    // backgroundColor: "rgba(0, 0, 0, 0.5)",
    color: "grey",
    padding: "1rem",
    cursor: "pointer",
    fontSize: "1rem",
 
  },
  pagination: {
    position: "absolute",
    bottom: "10px",
    left: "50%",
    transform: "translateX(-50%)",
    zIndex: 10,
    color: "white",
  },
};
