
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

/* 🔴 REQUIRED for static export */
export async function generateStaticParams() {
  const res = await fetch(`${API}/blogs.php`);
  const blogs = await res.json();

  return blogs.map((blog: { slug: string }) => ({
    slug: blog.slug,
  }));
}

/* 🔹 Single blog */
async function getBlog(slug: string): Promise<Blog> {
  const res = await fetch(`${API}/blog.php?slug=${slug}`);
  if (!res.ok) throw new Error("Blog not found");
  return res.json();
}
 

async function getRecentBlogs(): Promise<RecentBlog[]> {
  const res = await fetch(`${API}/blogs.php`);
  const blogs = await res.json();
  return blogs.slice(0, 5);
}


export default async function Page({
  params,
}: {
  params: { slug: string };
}) {
  const blog = await getBlog(params.slug);
  const recentBlogs = await getRecentBlogs();

  return (
    <section className="container blog-single">
      <div className="blog-layout">
        {/* LEFT CONTENT */}
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

        {/* RIGHT SIDEBAR */}
        {/* RIGHT SIDEBAR */}
{/* RIGHT SIDEBAR */}
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
