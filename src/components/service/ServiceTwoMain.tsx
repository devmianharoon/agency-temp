import Breadcrumb from "@/sheardComponent/Breadcrumb";
import React from "react";
import AboutService from "../about/AboutService";
import OurServices from "./OurServices";
import ContactSection from "../home-two/ContactSection";
import Brand from "../home/Brand";
const ServiceTwoMain = () => {
  return (
    <>
      <Breadcrumb pageTitle="Service" />
      <div className="pt-130 pb-100">
        <AboutService />
      </div>
      <OurServices />
      <ContactSection />
      <Brand />
    </>
  );
};

export default ServiceTwoMain;
