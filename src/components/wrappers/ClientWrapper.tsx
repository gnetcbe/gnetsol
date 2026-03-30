"use client";
import Aos from "aos";
import { ReactNode, useEffect } from "react";
import dynamic from "next/dynamic";

const ScrollToTop = dynamic(() => import("../BackToTop"), { ssr: false });

const ClientWrapper = ({ children }: { children: ReactNode }) => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      {children}
      <ScrollToTop />
    </>
  );
};

export default ClientWrapper;