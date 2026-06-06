import TopBar from "@/components/layouts/TopBar/page";
import Footer from "@/components/layouts/Footer/Footer";
import CTA from "@/components/layouts/Footer/CTA";
import { getPressReleases } from "@/lib/getPressReleases";
import PRClient from "./PRClient";
import Hero from './Hero';

export default async function PressReleasePage() {
  const posts = await getPressReleases();

  return (
    <>
      <TopBar />
         <Hero />
      <main>
        <PRClient posts={posts} />
      </main>

      <CTA />
      <Footer />
    </>
  );
}