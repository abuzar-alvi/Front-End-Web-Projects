import SectionTitle from "./SectionTitle";

const serviceData = [
  {
    id: 1,
    name: "Web Design",
    icon: "bi bi-palette",
    desc: "Crafting visually stunning websites that captivate audiences and reflect your brand identity is our expertise. Let us design a website that not only looks beautiful but also drives results for your business.",
  },
  {
    id: 2,
    name: "Web Development",
    icon: "bi bi-code-slash",
    desc: "From concept to deployment, our development team specializes in building robust and scalable web solutions tailored to your specific needs. Trust us to bring your digital vision to life with precision and efficiency.",
  },
  {
    id: 3,
    name: "Web Bug-Fixing",
    icon: "bi bi-bug",
    desc: "Don't let technical glitches hinder your online presence. Our team of experienced developers is here to diagnose and fix any bugs or issues on your website promptly, keeping it running smoothly and efficiently.",
  },
  {
    id: 4,
    name: "Web Tutoring",
    icon: "bi bi-book",
    desc: "Empower yourself or your team with our personalized web tutoring sessions. Whether you're looking to enhance your web design skills or delve into web development concepts, our experienced tutors provide tailored guidance to help you reach your goals.",
  },
  {
    id: 5,
    name: "Web SEO",
    icon: "bi bi-graph-up",
    desc: "Improve your website's visibility and attract more organic traffic with our comprehensive SEO services. From keyword research to on-page optimization, we employ proven strategies to boost your search engine rankings and drive results.",
  },
  {
    id: 6,
    name: "Programming",
    icon: "bi bi-code",
    desc: "Empower yourself or your team with our personalized web tutoring sessions. Whether you're looking to enhance your web design skills or delve into web development concepts, our experienced tutors provide tailored guidance to help you reach your goals.",
  },
];
const Services = () => {
  return (
    <section id="services" className="section services-section bg-gray">
      <div className="container">
        <SectionTitle heading={"Services We Offer"} subHeading={"Services"} />
        <div className="row gy-4">
          {serviceData.map((service) => (
            <div className="col-sm-6 col-lg-4" key={service.id}>
              <div className="feature-box-01">
                <div className="feature-content">
                  <div className="number">
                    <span>0{service.id}</span>
                  </div>
                  <h5>{service.name}</h5>
                  <p>{service.desc}</p>
                  <div className="icon">
                    <i className={service.icon} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Services;
