import "./App.css";
import Navbar from "./utils/Navbar";
import { Swiper, SwiperSlide } from "swiper/react";
import { Jose } from "./img/members/jose.JPG";
import { Maxime } from "./img/members/maxime.jpg";
import { Philippe } from "./img/members/philippe.png";
import { Romeo } from "./img/members/romeo.jpg";
import { Sergei } from "./img/members/sergei.png";
import { Tarek } from "./img/members/tarek.png";
import { Terence } from "./img/members/terence.png";

function App() {
  return (
    <>
      <Navbar />
      <div className="content">
        <div className="paragraph-wrap">
          <p className="paragraph">
            We are the Awty International School Hackathon Club (Awty Hackclub).
            We cultivate new members' skills through side projects; said skills
            are then implemented in Hackathons. We aim to create a community of
            young developers and entrepreneurs; leveraging teamwork whilst doing
            so. Our club provides a medium for students to express creativity,
            elevate ingenuity, and learn skills that they can implement in their
            future careers.
          </p>
        </div>
        {/* <img src={groupPhoto} className="photo"></img> */}
        <Swiper spaceBetween={50} slidesPerView={3}>
          <SwiperSlide>
            <img src={Tarek} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Sergei} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Terence} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Maxime} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Jose} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Romeo} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Philippe} />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}

export default App;
