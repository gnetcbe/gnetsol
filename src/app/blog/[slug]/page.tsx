import "./blogdet.css";

export const dynamic = "force-static";

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

/* ---------- SAFE FETCH HELPERS ---------- */

async function safeJsonFetch(url: string) {
  try {
    const res = await fetch(url, {
      cache: "force-cache",
    });

    const text = await res.text();

    try {
      return JSON.parse(text);
    } catch (e) {
      console.error("Invalid JSON from:", url);
      console.error("Response was:", text);
      return null;
    }
  } catch (error) {
    console.error("Fetch failed for:", url, error);
    return null;
  }
}

/* ---------- STATIC PARAMS ---------- */

export async function generateStaticParams() {
  const blogs = await safeJsonFetch(`${API}/blogs.php`);

  if (!blogs || !Array.isArray(blogs)) {
    return [];
  }

  return blogs.map((blog: { slug: string }) => ({
    slug: blog.slug,
  }));
}

/* ---------- DATA FETCH ---------- */

async function getBlog(slug: string): Promise<Blog | null> {
  return await safeJsonFetch(`${API}/blog.php?slug=${slug}`);
}

async function getRecentBlogs(): Promise<RecentBlog[]> {
  const blogs = await safeJsonFetch(`${API}/blogs.php`);

  if (!blogs || !Array.isArray(blogs)) {
    return [];
  }

  return blogs.slice(0, 5);
}

/* ---------- NEXT 15 PARAM FIX ---------- */

type PageProps = {
  params: Promise<{ slug: string }>;
};

export default async function Page({ params }: PageProps) {
  const { slug } = await params;

  const blog = await getBlog(slug);
  const recentBlogs = await getRecentBlogs();

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
