"use client";
import Aos from "aos";
import { ReactNode, useEffect, useState } from "react";
import Loader from "../Loader";

import dynamic from "next/dynamic";

const ScrollToTop = dynamic(() => import("../BackToTop"), { ssr: false });

const AppProvidersWrapper = ({ children }: { children: ReactNode }) => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    Aos.init();
    setTimeout(() => setLoading(false), 200);
  }, []);

  return (
    <>
      {loading ? <Loader /> : children}
      <ScrollToTop />
    </>
  );
};

export default AppProvidersWrapper;
