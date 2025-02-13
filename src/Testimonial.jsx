import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "./Testimonial.css";

const testimonials = [
  {
    img: "https://media.licdn.com/dms/image/v2/C5603AQGmXYCLqF2yKg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1615546451997?e=1744243200&v=beta&t=Lm7XbSAvs-g5MlNF531SLvjMVydDE2lxPoqHtBe2XgQ",
    quote: "It was an incredible experience where I explored both Back-end and Front-end development. I learned not just about various languages and tools but also the principles of writing clean code. The journey went beyond syntax, diving into software architecture.",
    name: "Chigozie Joshua",
    profession: "Software Developer at Bluecode",
  },
  {
    img: "https://media.licdn.com/dms/image/v2/D4D03AQHxKAHVupO8uA/profile-displayphoto-shrink_800_800/B4DZOdvn1xHMAc-/0/1733518328237?e=1744243200&v=beta&t=UEAo61_nnCbm8uFEaofIzyYVfn-WBc2ORfsRUN21Br4",
    quote: "At Boldlinks, we weren't just taught programming syntax—we learned to build. We developed the discipline and mental fortitude of software engineering. It was an awesome experience that prepared us for real-world challenges",
    name: "Ibrahim Olayioye",
    profession: "UI/UX Designer",
  },
  {
    img: "https://media.licdn.com/dms/image/v2/C5603AQHcMbaFQHfijQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1639482328704?e=1744243200&v=beta&t=VXXbQElnWST1ThXFJZXp0_ufsZ-yzNY2-JuVlWsnyiQ",
    quote: "I owe Boldlinks Technology so much because it gave me more than the penny I paid. Today I work as a developer with MYSOL Nigeria Limited where I work with other developers to improve the HRMS application built on LARAVEL FRAMEWORK.",
    name: "Aderemi Suliamon",
    profession: "Project Manager",
  },
];

const Testimonial = () => {
  return (
    <div className="container mt-5" id="TESTIMONIALS">
      <h5 className="text-center TEST">TESTIMONIALS</h5>
      <h1 className="text-center"><b>What Our Students Say</b></h1>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          600: { slidesPerView: 2 },
          1000: { slidesPerView: 3 },
        }}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className="testimonial-card text-center card p-3 mt-5">
              <img
                src={testimonial.img}
                alt="Client"
                className="rounded-circle mx-auto d-block mb-3"
                style={{ width: "100px", height: "100px" }}
              />
              <div className="client font-weight-bold text-center"><h6><b>{testimonial.name}</b></h6></div>
              <div className="profession text-center"><b>{testimonial.profession}</b></div>
              <p>{testimonial.quote}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonial;
