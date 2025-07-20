import { Swiper, SwiperSlide } from "swiper/react";
import { sliderProps } from "../sliderProps";
import SectionTitle from "./SectionTitle";
const testimonialData = [
  {
    id: 1,
    avatar: "assets/img/avatar-1.jpg",
    name: "John Smith",
    designation: "Founder",
    company: "DevSinc",
    comment:
      "Webia Solutionz exceeded our expectations with their service. The website they created for us is top-notch",
  },
  {
    id: 2,
    avatar: "assets/img/avatar-2.jpg",
    name: "Emily Johnson",
    designation: "Marketing Manager",
    company: "Plateup",
    comment:
      "I'm incredibly impressed with Webia Solutionz. Their professionalism and expertise shine through in every project.",
  },
  {
    id: 3,
    avatar: "assets/img/avatar-3.jpg",
    name: "Michael Brown",
    designation: "Director",
    company: "Logiks Dev",
    comment:
      "Working with Webia Solutionz has been a delight. Their attention to detail and dedication to client are commendable.",
  },
  {
    id: 4,
    avatar: "assets/img/avatar-4.jpg",
    name: "Sophia Rodriguez",
    designation: "CEO",
    company: "Sunrise Solutions",
    comment:
      "Webia Solutionz is the best choice for web solutions. They go above and to deliver exceptional results every time.",
  },
];

const Testimonial = () => {
  return (
    <section className="section testimonial-section">
      <div className="container">
        <SectionTitle
          heading={"Client's Kind Word"}
          subHeading={"Testimonial"}
        />
        <Swiper {...sliderProps.testimonial} className="lightbox-gallery">
          {testimonialData.map((testimonial) => (
            <SwiperSlide className="feature-box-03" key={testimonial.id}>
              <div className="feature-img">
                <img src={testimonial.avatar} alt="image" />
              </div>
              <div className="feature-content">
                <div className="icons">
                  <i className="fas fa-quote-left" />
                </div>
                <p>{testimonial.comment}</p>
                <h6>{testimonial.name}</h6>
                <span>
                  {testimonial.designation} at {testimonial.company}
                </span>
              </div>
            </SwiperSlide>
          ))}
          <div className="owl-dots"></div>
        </Swiper>
      </div>
    </section>
  );
};
export default Testimonial;
