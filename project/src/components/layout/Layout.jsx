import React from "react";
import Header from "./Header";
import ParaContainer  from "./ParaContainer";
import PeopleComment from "../../assets/peopleData/data"


export const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children || <ParaContainer /> || <PeopleComment />}
      {/* <Footer /> */}
    </>
  );
};

export default Layout;
