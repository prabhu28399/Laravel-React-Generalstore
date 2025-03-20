import React from "react";
import UserHeader from "../../user/sections/UserHeader.jsx";
import UserNav from "../../user/sections/UserNav.jsx";
import BodyCustomers from "../sections/BodyCustomers";
import DelSample from "../../user/sections/DelSample.jsx";
const KathabookCustomers = () => {
  return (
    <div>
      {" "}
      <UserHeader />
      <UserNav />
      <BodyCustomers />
      <DelSample />
    </div>
  );
};

export default KathabookCustomers;
