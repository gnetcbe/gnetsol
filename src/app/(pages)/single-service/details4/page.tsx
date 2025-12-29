import { Metadata } from "next";
import BlogDetail from "./components/BlogDetail";
import Hero from "./components/Hero";

import logo from "@/assets/img/logo/title2.svg";

export const metadata: Metadata = {
  title: "SEOX || Pay Per Click Advertising",
  icons: {
    icon: logo.src,
  },
};

const Details4 = () => {
  return (
    <>
      <Hero />
      <BlogDetail />
    </>
  );
};

export default Details4;
