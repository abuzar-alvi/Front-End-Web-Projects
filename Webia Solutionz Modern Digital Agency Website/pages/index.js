import Contact from "@/src/components/Contact";
import Footer from "@/src/components/Footer";
import Header from "@/src/components/Header";
import Home from "@/src/components/Home";
import Portfolio from "@/src/components/Portfolio";
import Services from "@/src/components/Services";
import Skill from "@/src/components/Skill";
import Testimonial from "@/src/components/Testimonial";
import ImageView from "@/src/components/popup/ImageView";
import { boston } from "@/src/utils";
import { Fragment, useEffect } from "react";
const Index = () => {
  useEffect(() => {
    boston.scrollToActiveNav();
    boston.imgToSvg();
  }, []);

  return (
    <Fragment>
      <ImageView />
      {/* End */}
      {/* Header */}
      <Header />
      {/* End Header */}
      {/* Main */}
      <main className="wrapper">
        {/* Home Section */}
        <Home />
        {/* End Home Section */}
        {/* Services Section */}
        <Services />
        {/* End Services Section */}
        {/* Skill Section */}
        <Skill />
        {/* End Skill Section */}
        {/* Work Section */}
        <Portfolio />
        {/* End Work Section */}
        {/* testimonial Section */}
        <Testimonial />
        {/* End testimonial Section */}
        {/* Contact Section */}
        <Contact />
        {/* End Contact Section */}
        {/* Effect */}
        <div className="right-effects" />
        <div className="left-effects" />
        {/* End Effect */}
      </main>
      {/* Main */}
      {/* Footer */}
      <Footer />
      {/* End Footer */}
    </Fragment>
  );
};
export default Index;
