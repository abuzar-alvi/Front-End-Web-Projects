import SectionTitle from "./SectionTitle";
import { FaNextJs } from "react-icons/fa";

const skillsData = [
  { id: 1, name: "HTML", icon: "fab fa-html5" },
  { id: 2, name: "CSS", icon: "fab fa-css3" },
  { id: 3, name: "JavaScript", icon: "fab fa-js-square" },
  { id: 4, name: "React JS", icon: "fab fa-react" },
  { id: 5, name: "Node Js", icon: "fab fa-node-js" },
  { id: 6, name: "Express Js", icon: "fab fa-apple" },
  { id: 7, name: "MongoDB", icon: "fas fa-database" },
  { id: 8, name: "Next JS", icon: "fab fa-js-square" },
  { id: 9, name: "Typescript", icon: "fab fa-react" },
  { id: 10, name: "Web SEO", icon: "fas fa-search" },
];

const Skill = () => {
  return (
    <section id="skill" className="section experience-section">
      <div className="container">
        {/*  */}
        <div className="row">
          {/*  */}
          <div className="col-sm-12 col-lg-6 ">
            <div className="section-heading">
              <h6>
                <span>Skills</span>
              </h6>
              <h3>
                <span>Our Skills</span>
              </h3>
            </div>
            <p className="fs-5">
              We specialize in crafting sleek websites, dynamic web services,
              and captivating online stores, tailored to meet diverse client
              needs. Our passion lies in delivering exceptional experiences that
              resonate with your audience, elevating your online presence. With
              a focus on user-centric design and cutting-edge technology, we
              ensure your digital presence reflects your brand identity and
              drives engagement. Partner with us to unleash your online
              ventures' potential and achieve digital success.
            </p>
          </div>
          {/*  */}
          <div className="col-sm-12 col-lg-6 mt-5">
            <div className="skill-box">
              <div className="row g-2">
                {skillsData.map((skill) => (
                  <div className="col-6 col-md-4 col-lg-6" key={skill.id}>
                    <div className="feature-box-02">
                      <div className="icon">
                        <i className={skill.icon} />
                      </div>
                      <h6>{skill.name}</h6>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/*  */}
        </div>
      </div>
    </section>
  );
};
export default Skill;
