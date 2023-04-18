import React from "react";
import { Container, Row, Col } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Bodycomp = () => {
  return (
    <Container>
      <Row>
        <Col>
          <Swiper
            spaceBetween={50}
            slidesPerView={3}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            <SwiperSlide>Slide 1</SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
            <SwiperSlide>Slide 5</SwiperSlide>
            <SwiperSlide>Slide 6</SwiperSlide>
          </Swiper>
        </Col>
      </Row>
    </Container>
  );
};

export default Bodycomp;
