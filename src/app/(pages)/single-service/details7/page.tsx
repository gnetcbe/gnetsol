import logo from "@/assets/img/logo/title2.svg";
import { Metadata } from "next";
import BlogDetail from "./components/BlogDetail";
import Hero from "./components/Hero";

export const metadata: Metadata = {
  title: "SEOX || Insurance Policy",
  icons: {
    icon: logo.src,
  },
};

const Details6 = () => {
  return (
    <>
      <Hero />
      <BlogDetail />
    </>
  );
};

export default Details6;
