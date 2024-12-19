import { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Profile1 from "../profiles/Profile1";
import Profile2 from "../profiles/Profile2";
import Profile3 from "../profiles/Profile3";
import { Typography, IconButton } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
const TeamSwiper = () => {
  const [slidesPerView, setSlidesPerView] = useState(1.5);

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 700) {
        setSlidesPerView(1);
      } else {
        setSlidesPerView(1.5);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      style={{
        marginTop: "2em",
        textAlign: "center",
        width: "100%",
        margin: "0 auto",
        position: "relative",
        height: "auto",
        // minHeight: "50em",
      }}
    >
      <Typography
        sx={{ fontSize: "2em", marginTop: "2em", fontWeight: "bold" }}
      >
        Our Team
      </Typography>
      <IconButton
        ref={prevRef}
        sx={{
          position: "absolute",
          top: "50%",
          left: "1%",
          zIndex: 2,
          transform: "translateY(-50%)",
          backgroundColor: "#11423f",
          color: "white",
          paddingTop:"0.5em",
          height:"2em",
          width:"2em",
          // fontSize: "1.5em",
          // boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
          "&:hover": { backgroundColor: "#f0f0f0" },
          display : {xs:"none",md:"block"}
        }}
        
      >
        <ArrowBackIcon fontSize="medium" />
      </IconButton>
      <IconButton
        ref={nextRef}
        sx={{
          position: "absolute",
          top: "50%",
          right: "1%",
          zIndex: 2,
          transform: "translateY(-50%)",
          backgroundColor: "#11423f",
          color: "white",
          // fontSize: "1.5em",
          paddingTop:"0.5em",
          height:"2em",
          width:"2em",
          display : {xs:"none",md:"block"},
          // boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
          "&:hover": { backgroundColor: "#f0f0f0" },
        }}
      >
        <ArrowForwardIcon fontSize="medium" />
      </IconButton>
      <Swiper
        modules={[Pagination, Navigation]}
        spaceBetween={20}
        slidesPerView={slidesPerView}
        centeredSlides={true}
        pagination={window.innerWidth <= 700 ? { clickable: true } : false}
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
        style={{
          color: "black",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          marginTop: "0.5rem",
          overflow: "hidden",
          height:"auto",
          marginBottom:"-2em"
          // minHeight:"80em",

          
        }}
      >
        <SwiperSlide>
          <Profile1 />
        </SwiperSlide>
        <SwiperSlide>
          <Profile2 />
        </SwiperSlide>
        <SwiperSlide>
          <Profile3 />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default TeamSwiper;
