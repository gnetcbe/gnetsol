"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import "./blogdet.css";

type Blog = {
  title: string;
  content: string;
  featured_image: string;
};

type RecentBlog = {
  title: string;
  slug: string;
  featured_image: string;
};

const API = process.env.NEXT_PUBLIC_API_URL!;
const UPLOADS = process.env.NEXT_PUBLIC_UPLOADS_URL!;

export default function BlogDetailPage() {
  const params = useParams();
  const slug = params?.slug as string;

  const [blog, setBlog] = useState<Blog | null>(null);
  const [recentBlogs, setRecentBlogs] = useState<RecentBlog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) return;

    Promise.all([
      fetch(`${API}/blog.php?slug=${slug}`).then((res) => res.json()),
      fetch(`${API}/blogs.php`).then((res) => res.json()),
    ])
      .then(([blogData, recentData]) => {
        setBlog(blogData);
        setRecentBlogs(recentData.slice(0, 5));
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching blog:", err);
        setLoading(false);
      });
  }, [slug]);

  if (loading) {
    return (
      <section className="container">
        <p>Loading blog...</p>
      </section>
    );
  }

  if (!blog) {
    return (
      <section className="container">
        <h1>Blog not found</h1>
      </section>
    );
  }

  return (
    <section className="container blog-single">
      <div className="blog-layout">
        <article className="blog-main">
          <h1 className="blog-heading">{blog.title}</h1>

          {blog.featured_image && (
            <img
              src={`${UPLOADS}/${blog.featured_image}`}
              alt={blog.title}
              className="blog-hero"
            />
          )}

          <div
            className="blog-body"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />
        </article>

        <aside className="blog-sidebar">
          <a href="/blog" className="back-to-blog">
            ← Back to Blog
          </a>

          <h3 className="sidebar-title">Latest Articles</h3>

          <div className="latest-thumb-list">
            {recentBlogs.map((item) => (
              <a
                key={item.slug}
                href={`/blog/${item.slug}`}
                className="latest-thumb-item"
              >
                {item.featured_image && (
                  <img
                    src={`${UPLOADS}/${item.featured_image}`}
                    alt={item.title}
                    className="latest-thumb-img"
                  />
                )}

                <span className="latest-thumb-title">
                  {item.title}
                </span>
              </a>
            ))}
          </div>
        </aside>
      </div>
    </section>
  );
}
