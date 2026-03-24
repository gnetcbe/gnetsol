import { baseUrl } from "../../../lib/sanity";
import TopBar from "@/components/layouts/TopBar/page";
import Footer from "@/components/layouts/Footer/Footer";
import CTA from "@/components/layouts/Footer/CTA";
import { PortableText } from "@portabletext/react";
import { urlFor } from "@/lib/imageUrl";
import Hero from './Hero';
import Link from "next/link";

// ✅ Static params
export async function generateStaticParams() {
  const query = encodeURIComponent(`*[_type == "post"]{ slug }`);
  const res = await fetch(`${baseUrl}?query=${query}`);
  const data = await res.json();

  return data.result.map((post: any) => ({
    slug: post.slug.current,
  }));
}

// 🔹 Get single post
async function getPost(slug: string) {
  const query = encodeURIComponent(`*[_type == "post" && slug.current == "${slug}"][0]{
    title,
    body,
    mainImage
  }`);

  const res = await fetch(`${baseUrl}?query=${query}`);
  const data = await res.json();

  return data.result;
}

// 🔹 Get latest 5 posts
async function getLatestPosts() {
  const query = encodeURIComponent(`*[_type == "post"] | order(_createdAt desc)[0...5]{
  title,
  slug,
  mainImage
}`);

  const res = await fetch(`${baseUrl}?query=${query}`);
  const data = await res.json();

  return data.result;
}

const components = {
  types: {
    image: ({ value }: any) => (
      <img
        src={urlFor(value).width(800).url()}
        className="img-fluid my-4"
        alt=""
      />
    ),
  },
};

export default async function BlogDetail({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getPost(params.slug);
  const latest = await getLatestPosts();

  if (!post) return <div>Post not found</div>;

  return (
    <>
      <TopBar />

      <main>
          <Hero />
        <section className="container ">
          
          {/* 🔥 BACK BUTTON */}
          <Link href="/blog" className="btn btn-outline-light mb-4">
            ← Back to Blog
          </Link>

          <div className="row">
            
            {/* 🔥 MAIN CONTENT */}
            <div className="col-lg-8">
              <h1>{post.title}</h1>

              {post.mainImage && (
                <img
                  src={urlFor(post.mainImage).width(900).url()}
                  className="img-fluid my-4"
                  alt={post.title}
                />
              )}

              <div className="blog-content">
                <PortableText value={post.body} components={components} />
              </div>
            </div>
 {/* 🔥 SIDEBAR */}
<div className="col-lg-4">
  
  {/* 🔙 BACK BUTTON (now at top of sidebar) */}
  <Link href="/blog" className="btn btn-outline-primary w-100 mb-4">
    ← Back to Blog
  </Link>

  <div className="sidebar-box">

    <h5 className="mb-3">Latest Blogs</h5>

    {latest.map((item: any, index: number) => (
      <div key={item.slug.current}>

        <Link href={`/blog/${item.slug.current}`} className="sidebar-post d-flex">
          
          {/* 🔥 THUMB IMAGE */}
          {item.mainImage && (
            <img
              src={urlFor(item.mainImage).width(80).height(80).url()}
              alt={item.title}
            />
          )}

          <div className="ms-3">
            <p className="mb-0">{item.title}</p>
          </div>

        </Link>

        {/* 🔥 SEPARATOR */}
        {index !== latest.length - 1 && <hr />}

      </div>
    ))}

  </div>
</div>

          </div>
        </section>
      </main>

      <CTA />
      <Footer />
    </>
  );
}