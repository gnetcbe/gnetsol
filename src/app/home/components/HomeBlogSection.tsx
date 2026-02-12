import Link from "next/link";
import { Col, Container, Row } from 'react-bootstrap'
import "./blog.css";

export const dynamic = "force-dynamic";

type Blog = {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  featured_image: string;
};

const API = process.env.NEXT_PUBLIC_API_URL!;
const UPLOADS = process.env.NEXT_PUBLIC_UPLOADS_URL!;

async function getBlogs(): Promise<Blog[]> {
  const res = await fetch(`${API}/blogs.php`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch blogs");
  }

  return res.json();
}

// ✅ Homepage version – only latest 3
export default async function HomeBlogSection() {
  const blogs = await getBlogs();

  // Take only the first 3 (assuming API returns newest first)
  const latestBlogs = blogs.slice(0, 3);

  return (
    <section className="container blog-list">
      <Row>
                      <Col lg={6}>
                        <div className="heading4">                         
                          <h1 className="text-anime-style-3">
                           Latest Blog
                          </h1>
                        </div>
                      </Col>
          
                      <Col lg={6}>
                        <div className="text-end button md:mt-20 sm:mt-20 md:text-start sm:text-start">
                          <Link href="/blog" className="theme-btn8">
                            <span className="theme-btn8__shape" />
                            <span className="theme-btn8__shape" />
                            <span className="theme-btn8__shape" />
                            <span className="theme-btn8__shape" />
                            <span className="theme-btn8__text">
                              View All 
                            </span>
                          </Link>
                        </div>
                      </Col>
                    </Row>
      <div className="blog-grid mt20">
        {latestBlogs.map((blog) => (
          <article key={blog.id} className="blog-card">
            {blog.featured_image && (
              <img
                src={`${UPLOADS}/${blog.featured_image}`}
                alt={blog.title}
                className="blog-image"
              />
            )}

            <div className="blog-content">
              <h3>{blog.title}</h3>
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
