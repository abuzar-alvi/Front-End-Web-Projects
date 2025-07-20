import SectionTitle from "./SectionTitle";

const portfolioData = [
  {
    id: 1,
    title: "Zivan - Marketing ",
    subtitle: "React/Next JS",
    image: "assets/img/project-1.png",
  },
  {
    id: 2,
    title: "Collax - Digital",
    subtitle: "React/Next JS",
    image: "assets/img/project-2.png",
  },
  {
    id: 3,
    title: "Ruizarch - Architecture",
    subtitle: "React/Next JS",
    image: "assets/img/project-3.png",
  },
  {
    id: 4,
    title: "Nufti - NFT ",
    subtitle: "React JS",
    image: "assets/img/project-4.png",
  },
  {
    id: 5,
    title: "Edumim - Educational",
    subtitle: "React/Next JS",
    image: "assets/img/project-5.png",
  },
  {
    id: 6,
    title: "Cyfonii - NFT",
    subtitle: "React JS",
    image: "assets/img/project-6.png",
  },
  {
    id: 7,
    title: "Quarter - Real Estate",
    subtitle: "React/Next JS",
    image: "assets/img/project-7.png",
  },
  {
    id: 8,
    title: "Mortal.AI - AI Writer",
    subtitle: "React/Next JS",
    image: "assets/img/project-8.png",
  },
  {
    id: 9,
    title: "ProHealth - Medical",
    subtitle: "React JS",
    image: "assets/img/project-9.png",
  },
];

const Portfolio = () => {
  return (
    <section id="work" className="section work-section bg-gray">
      <div className="container">
        <SectionTitle heading={"Latest Projects"} subHeading={"Portfolio"} />
        <div className="row g-4 lightbox-gallery">
          {portfolioData.map((portfolio) => (
            <div className="col-sm-6 col-lg-4" key={portfolio.id}>
              <div className="portfolio-box">
                <div className="portfolio-img">
                  <a href={portfolio.image} className="gallery-link">
                    <img src={portfolio.image} alt="image" />
                  </a>
                </div>
                <div className="portfolio-info">
                  <h6>{portfolio.title}</h6>
                  <span>{portfolio.subtitle}</span>
                  <a href={portfolio.image} className="gallery-link">
                    <i className="fas fa-arrow-right" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Portfolio;
