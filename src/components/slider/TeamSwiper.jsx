import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
// import './TeamSwiper.css';
// Import Swiper styles.
// import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import KeyboardBackspaceOutlinedIcon from '@mui/icons-material/KeyboardBackspaceOutlined';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Profile1 from "../profiles/Profile1";
import Profile2 from "../profiles/Profile2";
import Profile3 from "../profiles/Profile3";
import { Typography } from "@mui/material";

const TeamSwiper = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <div style={{ marginTop: "2em", textAlign: "center",width: "100%", 
      margin: "0 auto", }}>
      
      <Typography sx={{ fontSize: "2em",marginTop:'01em',fontWeight:"bold" }}>
        Our Team
      </Typography>
      <div
        ref={prevRef}
        style={{
          position: "absolute",
          top: "50%",
          left: "-30px",
          transform: "translateY(-50%)",
          zIndex: 10,
          cursor: "pointer",
        }}
      >
        <KeyboardBackspaceOutlinedIcon fontSize="medium" style={{ color: "#000" }} />
      </div>
      <div
        ref={nextRef}
        style={{
          position: "absolute",
          top: "50%",
          right: "-30px",
          transform: "translateY(-50%)",
          zIndex: 10,
          cursor: "pointer",
        }}
      >
        <ArrowForwardIcon fontSize="large" style={{ color: "#000" }} />
      </div>
      <Swiper
        modules={[Pagination, Navigation]}
        spaceBetween={1}
        slidesPerView={1.5}
        centeredSlides={true}
        pagination={{ clickable: true }}
        navigation={true}
        loop={true}
        style={{ color: "black",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "-2rem",
          padding: "0 30px", }}
      >
        <SwiperSlide width="20%">
          <Profile1 />
        </SwiperSlide>
        <SwiperSlide width="100%">
          <Profile2 />
        </SwiperSlide>
        <SwiperSlide width="40%">
          <Profile3 />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default TeamSwiper;
