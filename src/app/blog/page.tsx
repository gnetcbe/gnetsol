"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import "./blog.css";

type Blog = {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  featured_image: string;
};

const API = process.env.NEXT_PUBLIC_API_URL!;
const UPLOADS = process.env.NEXT_PUBLIC_UPLOADS_URL!;

export default function BlogPage() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${API}/blogs.php`)
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch blogs:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <section className="container blog-list">
        <p>Loading blogs...</p>
      </section>
    );
  }

  return (
    <section className="container blog-list">
      <div className="blog-grid">
        {blogs.map((blog) => (
          <article key={blog.id} className="blog-card">
            {blog.featured_image && (
              <img
                src={`${UPLOADS}/${blog.featured_image}`}
                alt={blog.title}
                className="blog-image"
              />
            )}

            <div className="blog-content">
              <h2>{blog.title}</h2>
              <p>{blog.excerpt}</p>

              <Link href={`/blog/${blog.slug}`} className="read-more">
                Read More →
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
