import React from "react";
import UserHeader from "./UserHeader.jsx";
import StatsCard from "../../components/StatsCard";
import UNavbar from "../../pages/user/UNavbar.jsx";
import ProfileTheme from "../../components/ProfileTheme.jsx";
import Footer from "./../../pages/common/Footer.jsx";

const Uindex = () => {
  return (
    <div>
      <UserHeader />
      <UNavbar />
      <StatsCard />
      <ProfileTheme />

      <Footer />
    </div>
  );
};

export default Uindex;
