import React from "react";
import ResponsiveAppBar from "../../components/Navbar/Navbar";
import SectionOne from "../../Sections/secOne/SectionOne";
import CustomSlider from "../../components/Slider/Slider";
import SecTwo from "../../Sections/secTwo/SecTwo";
import HotelHeading from "../../Sections/HotelHeading";
import RoomsGrid from "../../Sections/secThree";
import Footer from "../../Sections/Footer";
import ContactUsForm from "../../Sections/ContantUs";
const Home = () => {
  return (
    <>
      <ResponsiveAppBar />
      <SectionOne />
      <HotelHeading />
      <SecTwo />
      <CustomSlider />
      <RoomsGrid />
      <ContactUsForm />
      <Footer />
    </>
  );
};

export default Home;
