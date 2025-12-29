import { Metadata } from "next";
import BlogArea from "./components/BlogArea";
import Hero from "./components/Hero";

import logo from "@/assets/img/logo/title2.svg";

export const metadata: Metadata = {
  title: "SEOX ||  Our Blog V2",
  icons: {
    icon: logo.src,
  },
};

const Blog02 = () => {
  return (
    <>
      <main>
        <Hero />
        <div className="blog1 sp">
          <BlogArea />
        </div>
      </main>
    </>
  );
};

export default Blog02;
