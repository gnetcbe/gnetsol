import { baseUrl } from "@/lib/pressSanity";
import TopBar from "@/components/layouts/TopBar/page";
import Footer from "@/components/layouts/Footer/Footer";
import CTA from "@/components/layouts/Footer/CTA";
import { PortableText } from "@portabletext/react";
import { pressUrlFor } from "@/lib/pressImageUrl";
import Link from "next/link";
import bg from "@/assets/img/bg/inner-hero-bg.jpg";
import { FaAngleRight } from "react-icons/fa6";

export async function generateStaticParams() {
  const query = encodeURIComponent(`*[_type == "post"]{ slug }`);
  const res = await fetch(`${baseUrl}?query=${query}`);
  const data = await res.json();
  return data.result.map((post: any) => ({ slug: post.slug.current }));
}

async function getPost(slug: string) {
  const query = encodeURIComponent(`
    *[_type == "post" && slug.current == "${slug}"][0]{
      title,
      body,
      mainImage,
      publishedAt,
      excerpt,
      categories[]->{title}
    }
  `);
  const res = await fetch(`${baseUrl}?query=${query}`);
  const data = await res.json();
  return data.result;
}

async function getSidebarPosts() {
  const query = encodeURIComponent(`
    *[_type == "post"]{
      title,
      slug,
      mainImage,
      publishedAt,
      excerpt,
      categories[]->{title}
    }
  `);
  const res = await fetch(`${baseUrl}?query=${query}`);
  const data = await res.json();
  const posts = data.result || [];

  const featured = posts.filter((post: any) =>
    post.categories?.some((cat: any) => cat.title === "Featured")
  );
  const subFeatured = posts.filter((post: any) =>
    post.categories?.some((cat: any) => cat.title === "Sub-Featured")
  );
  const general = posts
    .filter((post: any) =>
      post.categories?.some((cat: any) => cat.title === "General")
    )
    .sort((a: any, b: any) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    )
    .slice(0, 3);

  return [...featured, ...subFeatured, ...general];
}

const components = {
  types: {
    image: ({ value }: any) => (
      <img
        src={pressUrlFor(value).width(900).url()}
        style={{
          width: "100%",
          borderRadius: "12px",
          margin: "24px 0",
          border: "1.5px solid #c5d3e8",
          boxShadow: "0 4px 18px rgba(0,0,0,0.08)",
        }}
        alt=""
      />
    ),
  },
  block: {
    h1: () => null,
  },
};

export default async function PressReleaseDetail({ params }: any) {
  const { slug } = await params;
  const post = await getPost(slug);
  const sidebarPosts = await getSidebarPosts();

  if (!post) return <div>Press Release not found</div>;

  return (
    <>
      <TopBar />

      <style>{`
        .pr-back-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: #fff;
          border: 1.5px solid #c5d3e8;
          color: #0d6efd;
          font-weight: 600;
          font-size: 14px;
          padding: 8px 18px;
          border-radius: 8px;
          text-decoration: none;
          transition: all 0.2s;
          margin-bottom: 24px;
        }
        .pr-back-btn:hover {
          background: #0d6efd;
          color: #fff;
          border-color: #0d6efd;
        }
        .pr-post-header { margin-bottom: 24px; }
        .pr-hero-meta {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 13px;
          color: #666;
          margin-bottom: 12px;
          flex-wrap: wrap;
        }
        .cat-badge {
          background: #e8f0ff;
          color: #0d6efd;
          font-weight: 600;
          padding: 3px 10px;
          border-radius: 20px;
          font-size: 12px;
        }
        .pr-hero-title {
          font-size: 32px;
          font-weight: 800;
          color: #0d1b2e;
          line-height: 1.25;
          margin-bottom: 12px;
        }
        .pr-hero-excerpt {
          font-size: 15px;
          color: #4a5568;
          line-height: 1.7;
          margin-bottom: 0;
        }
        .pr-main-image {
          width: 100%;
          border-radius: 14px;
          border: 1.5px solid #c5d3e8;
          box-shadow: 0 6px 28px rgba(0,0,0,0.10);
          margin: 28px 0;
          display: block;
        }
        .blog-content {
          font-size: 16px;
          color: #2d3748;
          line-height: 1.85;
        }
        .blog-content h1, .blog-content h2, .blog-content h3 {
          color: #0d1b2e;
          font-weight: 700;
          margin-top: 32px;
          margin-bottom: 12px;
        }
        .blog-content p { margin-bottom: 18px; }
        .blog-content ul, .blog-content ol {
          padding-left: 24px;
          margin-bottom: 18px;
        }
        .blog-content li { margin-bottom: 8px; }
        .blog-content a { color: #0d6efd; }
        .blog-content blockquote {
          border-left: 4px solid #0d6efd;
          padding: 12px 20px;
          background: #f0f6ff;
          border-radius: 0 8px 8px 0;
          margin: 24px 0;
          font-style: italic;
          color: #4a5568;
        }

        /* Sidebar */
        .sidebar-wrap {
          position: sticky;
          top: 24px;
        }
        .sidebar-box {
          background: #fff;
          border-radius: 14px;
          border: 1.5px solid #c5d3e8;
          box-shadow: 0 5px 22px rgba(0,0,0,0.07);
          overflow: hidden;
        }
        .sidebar-header {
          background: linear-gradient(135deg, #0d6efd, #1a85ff);
          padding: 16px 20px;
        }
        .sidebar-header h5 {
          color: #fff;
          font-weight: 700;
          font-size: 15px;
          margin: 0;
          letter-spacing: 0.3px;
        }
        .sidebar-list { padding: 8px 0; }
        .sidebar-item {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          padding: 14px 18px;
          text-decoration: none;
          transition: background 0.18s;
          border-bottom: 1px solid #eef2f9;
        }
        .sidebar-item:last-child { border-bottom: none; }
        .sidebar-item:hover { background: #f4f8ff; }
        .sidebar-thumb {
          width: 68px;
          height: 60px;
          border-radius: 8px;
          object-fit: cover;
          object-position: top;
          flex-shrink: 0;
          border: 1.5px solid #c5d3e8;
        }
        .sidebar-thumb-placeholder {
          width: 68px;
          height: 60px;
          border-radius: 8px;
          background: #e8f0ff;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 22px;
        }
        .sidebar-item-meta {
          font-size: 11.5px;
          color: #999;
          margin-bottom: 4px;
        }
        .sidebar-item-meta .s-cat {
          color: #0d6efd;
          font-weight: 600;
        }
        .sidebar-item-title {
          font-size: 13.5px;
          font-weight: 600;
          color: #1a2233;
          line-height: 1.4;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .sidebar-item-excerpt {
          font-size: 12px;
          color: #777;
          margin-top: 4px;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          line-height: 1.5;
        }
      `}</style>

      <main>

        {/* Hero */}
        <div className="inner-hero" style={{ backgroundImage: `url(${bg.src})` }}>
          <div className="container">
            <div className="row">
              <div className="col-lg-9 m-auto text-center">
                <div className="inner-main-heading">
                  <h1>Press Release</h1>
                  <div className="breadcrumbs-pages">
                    <ul>
                      <li><Link href="/">Home</Link></li>
                      <li className="angle"><FaAngleRight className="fa-solid" /></li>
                      <li><Link href="/press-release">Press Releases</Link></li>
                      <li className="angle"><FaAngleRight className="fa-solid" /></li>
                      <li>{post.title}</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="container py-5">
          <div className="row g-5">

            {/* Main Content */}
            <div className="col-lg-8">

              <Link href="/press-release" className="pr-back-btn">
                ← Back to Press Releases
              </Link>

              <div className="pr-post-header">
                {post.publishedAt && (
                  <div className="pr-hero-meta">
                    <span>
                      📅 {new Date(post.publishedAt).toLocaleDateString("en-US", {
                        month: "long", day: "2-digit", year: "numeric"
                      })}
                    </span>
                  </div>
                )}
                <h1 className="pr-hero-title">{post.title}</h1>
                {post.excerpt && (
                  <p className="pr-hero-excerpt">{post.excerpt}</p>
                )}
              </div>

              {post.mainImage && (
                <img
                  src={pressUrlFor(post.mainImage).width(1200).url()}
                  className="pr-main-image"
                  alt={post.title}
                />
              )}

              <div className="blog-content">
                <PortableText value={post.body} components={components} />
              </div>
            </div>

            {/* Sidebar */}
            <div className="col-lg-4">
              <div className="sidebar-wrap">
                <div className="sidebar-box">
                  <div className="sidebar-header">
                    <h5>📰 Latest Press Releases</h5>
                  </div>
                  <div className="sidebar-list">
                    {sidebarPosts.map((item: any) => {
                      return (
                        <Link
                          key={item.slug.current}
                          href={`/press-release/${item.slug.current}`}
                          className="sidebar-item"
                        >
                          {item.mainImage ? (
                            <img
                              src={pressUrlFor(item.mainImage).width(140).height(120).url()}
                              alt={item.title}
                              className="sidebar-thumb"
                            />
                          ) : (
                            <div className="sidebar-thumb-placeholder">📄</div>
                          )}

                          <div style={{ flex: 1, minWidth: 0 }}>
                            {item.publishedAt && (
                              <div className="sidebar-item-meta">
                                {new Date(item.publishedAt).toLocaleDateString("en-US", {
                                  month: "short", day: "2-digit", year: "numeric"
                                })}
                              </div>
                            )}
                            <div className="sidebar-item-title">{item.title}</div>
                            {item.excerpt && (
                              <div className="sidebar-item-excerpt">{item.excerpt}</div>
                            )}
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
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
