import { Metadata } from 'next'
import { getPosts } from "@/lib/getPosts";
import Link from "next/link";
import TopBar from "@/components/layouts/TopBar/page";
import Footer from "@/components/layouts/Footer/Footer";
import CTA from "@/components/layouts/Footer/CTA";
import { urlFor } from "@/lib/imageUrl";
import Hero from './Hero';

/* ✅ SEO METADATA */
export const metadata: Metadata = {
  title: 'Blog | Web Development & IT Insights | G-Net Solutions Coimbatore',
  description:
    'Read the latest articles, tips, and insights on web development, digital marketing, software solutions, and IT services from G-Net Solutions in Coimbatore.',
  keywords: [
    'web development blog coimbatore',
    'it services blog coimbatore',
    'digital marketing tips coimbatore',
    'software development insights',
    'g-net solutions blog',
  ],
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: 'Blog | Web Development & IT Insights | G-Net Solutions Coimbatore',
    description:
      'Latest articles on web development, digital marketing, and IT services from G-Net Solutions in Coimbatore.',
    url: 'https://www.g-netsolutions.com/blog',
    siteName: 'G-Net Solutions',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'G-Net Solutions Blog - Web Development & IT Insights',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog | G-Net Solutions Coimbatore',
    description:
      'Web development, digital marketing, and IT insights from G-Net Solutions in Coimbatore.',
  },
  alternates: {
    canonical: 'https://www.g-netsolutions.com/blog',
  },
}

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <>
      <TopBar />

      <main>
         <Hero />
        
        {/* BLOG GRID */}
        <section className="container bloglist pb-5">
          <div className="row">
            {posts.map((post: any) => (
              <div key={post._id} className="col-md-6 col-lg-4 mb-4">
                <div className="blog-card h-100">
                  
                  {/* IMAGE */}
                  {post.mainImage && (
                    <img
                      src={urlFor(post.mainImage).width(600).url()}
                      className="img-fluid"
                      alt={post.title}
                    />
                  )}

                  <div className="p-3">
                    <h5>{post.title}</h5>

                    <Link href={`/blog/${post.slug.current}`}>
                      <span className="read-more">Read More →</span>
                    </Link>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <CTA />
      <Footer />
    </>
  );
}