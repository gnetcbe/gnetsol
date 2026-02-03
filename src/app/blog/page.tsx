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

async function getBlogs(): Promise<Blog[]> {
  const res = await fetch(`${API}/blogs.php`, {
    cache: "force-cache"
  });
  return res.json();
}

export default async function BlogPage() {
  const blogs = await getBlogs();

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
