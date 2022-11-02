import React from "react";
import Header from "./Header";
import PeopleComment from "../../assets/peopleData/data"


export const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children || <PeopleComment />}
      {/* <Footer /> */}
    </>
  );
};

export default Layout;
