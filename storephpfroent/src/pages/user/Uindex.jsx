import React from "react";
import UserHeaderTheme from "../../components/UserHeaderTheme";
import UNavbar from "./UNavbar";
import Footer from "../common/Footer";
import ProfileTheme from "../../components/ProfileTheme";
import StatsCard from "../../components/StatsCard";

const Uindex = () => {
  return (
    <div>
      <UserHeaderTheme />
      <UNavbar />
      <StatsCard />
      <ProfileTheme />

      <Footer />
    </div>
  );
};

export default Uindex;
