import { getPosts } from "@/lib/getPosts";
import Link from "next/link";
import TopBar from "@/components/layouts/TopBar/page";
import Footer from "@/components/layouts/Footer/Footer";
import CTA from "@/components/layouts/Footer/CTA";
import { urlFor } from "@/lib/imageUrl";
import Hero from './Hero';

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