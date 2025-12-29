import { StaticImageData } from "next/image";

import brand1 from "@/assets/img/logo/brands8-logo1.png";
import brand10 from "@/assets/img/logo/brands8-logo10.png";
import brand2 from "@/assets/img/logo/brands8-logo2.png";
import brand3 from "@/assets/img/logo/brands8-logo3.png";
import brand4 from "@/assets/img/logo/brands8-logo4.png";
import brand5 from "@/assets/img/logo/brands8-logo5.png";
import brand6 from "@/assets/img/logo/brands8-logo6.png";
import brand7 from "@/assets/img/logo/brands8-logo7.png";
import brand8 from "@/assets/img/logo/brands8-logo8.png";
import brand9 from "@/assets/img/logo/brands8-logo9.png";

import ser1 from "@/assets/img/icons/service8-icon1.svg";
import ser2 from "@/assets/img/icons/service8-icon2.svg";
import ser3 from "@/assets/img/icons/service8-icon3.svg";
import ser4 from "@/assets/img/icons/service8-icon4.svg";

import author from "@/assets/img/testimonial/tes9-author-thumb.png";

import team1 from "@/assets/img/team/team8-image1.png";
import team2 from "@/assets/img/team/team8-image2.png";
import team3 from "@/assets/img/team/team8-image3.png";
import team4 from "@/assets/img/team/team8-image4.png";

import blog1 from "@/assets/img/blog/blog8-image1.png";
import blog2 from "@/assets/img/blog/blog8-image2.png";
import blog3 from "@/assets/img/blog/blog8-image3.png";

export type BrandIconType = {
  image: StaticImageData;
  count: number;
};

export type FaqType = {
  id: string;
  title: string;
  image: StaticImageData;
};

export type WorkType = {
  number: number;
  count: number;
  title: string;
  comment: string;
  token?: string;
};

export type TestimonialType = {
  comment: string;
  name: string;
  title: string;
  avatar: StaticImageData;
};

export type TeamServiceType = {
  image: StaticImageData;
  name: string;
  title: string;
};

export type BlogType = {
  image: StaticImageData;
  comment: string;
  count: number;
};

export const blogData: BlogType[] = [
  {
    image: blog1,
    comment:
      "5 Essential Strategies For Consult Sustainable Of Business Growth",
    count: 1200,
  },
  {
    image: blog2,
    comment: "How to Drive Generate Leads with SEO Digital Marketing",
    count: 1000,
  },
  {
    image: blog3,
    comment: "Top Digital Marketing for E-Commerce Success Business",
    count: 800,
  },
];

export const teamserviceData: TeamServiceType[] = [
  {
    image: team1,
    name: "Kireon Pollardy",
    title: "Founder And CEO",
  },
  {
    image: team2,
    name: "Jaclin Farnandez",
    title: "Digital Marketing Manager",
  },
  {
    image: team3,
    name: "Julian Blackwell",
    title: "PPC Campaign Manager",
  },
  {
    image: team4,
    name: "Maya Fitzgerald",
    title: "Content Strategist",
  },
  {
    image: team1,
    name: "Kireon Pollardy",
    title: "Founder And CEO",
  },
  {
    image: team2,
    name: "Jaclin Farnandez",
    title: "Digital Marketing Manager",
  },
  {
    image: team3,
    name: "Julian Blackwell",
    title: "PPC Campaign Manager",
  },
  {
    image: team4,
    name: "Maya Fitzgerald",
    title: "Content Strategist",
  },
];

export const testimonialData: TestimonialType[] = [
  {
    comment:
      "We’ve been working with SEOX for over a year now, and the best results have been outstanding! Their team took the time to the on understand our business and crafted a tailored strategy that best dramatically improved our search rankings and web traffic.",
    name: "Sheldon Jackson",
    title: "Shop Store Owner",
    avatar: author,
  },
  {
    comment:
      "We’ve been working with SEOX for over a year now, and the best results have been outstanding! Their team took the time to the on understand our business and crafted a tailored strategy that best dramatically improved our search rankings and web traffic.",
    name: "Sheldon Jackson",
    title: "Shop Store Owner",
    avatar: author,
  },
];

export const workData: WorkType[] = [
  {
    number: 1,
    count: 800,
    title: "Consultation Discovery",
    comment:
      "We start by understanding best you business needs, goals, challenges.",
    token: "add-after",
  },
  {
    number: 2,
    count: 1000,
    title: "Design And Development",
    comment:
      "Our best design custom blockchain architecture developed secure app",
    token: "add-after",
  },
  {
    number: 3,
    count: 1200,
    title: "Continuous Improvement",
    comment: "Blockchain technology is ever-evolving. We continually update",
  },
];

export const tabContent: FaqType[] = [
  {
    id: "1",
    title: "SEO Optimization",
    image: ser1,
  },
  {
    id: "2",
    title: "Pay-Per-Click PPC",
    image: ser2,
  },
  {
    id: "3",
    title: "Social Media Marketing",
    image: ser3,
  },
  {
    id: "4",
    title: "Content Marketing",
    image: ser4,
  },
];

export const brandIconData: BrandIconType[] = [
  {
    image: brand1,
    count: 800,
  },
  {
    image: brand2,
    count: 900,
  },
  {
    image: brand3,
    count: 1200,
  },
  {
    image: brand4,
    count: 1000,
  },
  {
    image: brand5,
    count: 900,
  },
];

export const brandicon2: BrandIconType[] = [
  {
    image: brand6,
    count: 800,
  },
  {
    image: brand7,
    count: 700,
  },
  {
    image: brand8,
    count: 1100,
  },
  {
    image: brand9,
    count: 900,
  },
  {
    image: brand10,
    count: 1000,
  },
];
