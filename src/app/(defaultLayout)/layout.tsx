"use client";

import Footer from "@/components/shared/Footer";
import Nav from "@/components/shared/nav";


const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
     <Nav></Nav>
      <main >{children}</main>
      <Footer></Footer>

    </>
  );
};

export default CommonLayout;
