import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/effect-coverflow/effect-coverflow.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";
import SwiperCore, {
  Autoplay,
  EffectCoverflow,
  Pagination,
  Navigation,
} from "swiper/core";
import FreeMode from "swiper";
import HomeLayout from "../components/HomeLayout";
import "./style.css";
import Footer from "../components/Footer";
import america from "../assets/img/america.png";
import igire from "../assets/img/iro.jpg";
import rwanda from "../assets/img/rwanda.svg";
import noble from "../assets/img/noble.jpeg";
import graduate from "../assets/img/graduate.JPG";
import sitGraduate from "../assets/img/sitGraduate.JPG";
import cake from "../assets/img/cake.JPG";
import kigali from "../assets/img/kigali.jpg";
import bugesera from "../assets/img/bugesera.jpeg";
import "./queries.css";
import About from "./about";
import Program from "./program";
import "./apply.css";
import AOS from "aos";
import "aos/dist/aos.css";

SwiperCore.use([Autoplay, EffectCoverflow, Pagination, Navigation]);

const Home = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      <div className="home-container">
        <HomeLayout />
      </div>
      <About />
      <div
        className="img-carousel"
        data-aos="zoom-in-up"
        data-aos-duration="2000"
      >
        {/* <div className="container">
          <div className="title_wrapper">
            <div className="reactLogo">
              <img src={america} />
            </div>
          </div>
          <div className="title_">
            <span>React</span>Swiper Slider
          </div>
        </div> */}
        <Swiper
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          navigation={true}
          effect={"coverflow"}
          centeredSlides={true}
          slidesPerView={window.innerWidth < 768 ? 1 : "auto"}
          loop={true}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={cake} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={graduate} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={sitGraduate} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={kigali} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={bugesera} />
          </SwiperSlide>
        </Swiper>
      </div>
      <Program />
      <div
        className="section-partner"
        data-aos="zoom-in-right"
        data-aos-duration="2000"
      >
        <div className="container">
          <h2 className="heading-partner-in">Partner With</h2>
          <div className="logos">
            <img src={america} alt="america flag" />
            <img src={rwanda} alt="rwanda flag" />
            <img src={noble} alt="noble flag" />
            <img src={igire} alt="igire flag" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Home;
