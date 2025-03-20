import React from "react";
import UserHeader from "../../user/sections/UserHeader.jsx";
import UserNav from "../../user/sections/UserNav.jsx";
import BodyCustomerDetails from "../sections/BodyCustomerDetails.jsx";

const KathabookCustomerDetails = () => {
  return (
    <div>
      {" "}
      <UserHeader />
      <UserNav />
      <BodyCustomerDetails />
    </div>
  );
};

export default KathabookCustomerDetails;
