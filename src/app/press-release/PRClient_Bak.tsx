"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { pressUrlFor } from "@/lib/pressImageUrl";
import "./PressRelease.css";

export default function PressReleaseClient({ posts }: any) {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("latest");
  const [visible, setVisible] = useState(6);

  const featured = posts.find((post: any) =>
    post.categories?.some((cat: any) => cat.title === "Featured")
  );

  const subFeatured = posts.find((post: any) =>
    post.categories?.some((cat: any) => cat.title === "Sub-Featured")
  );

  const generalPosts = useMemo(() => {
    let filtered = posts.filter((post: any) =>
      post.categories?.some((cat: any) => cat.title === "General")
    );

    if (search) {
      filtered = filtered.filter((post: any) =>
        post.title.toLowerCase().includes(search.toLowerCase())
      );
    }

    filtered.sort((a: any, b: any) => {
      if (sort === "latest") {
        return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
      }
      return new Date(a.publishedAt).getTime() - new Date(b.publishedAt).getTime();
    });

    return filtered;
  }, [posts, search, sort]);

  const formatDate = (dateStr: string) =>
    new Date(dateStr).toLocaleDateString("en-US", {
      month: "long", day: "2-digit", year: "numeric",
    });

  return (
    <>
      {/* SEARCH + SORT */}
      <section className="pr-toolbar-section">
        <div className="container">
          <div className="pr-toolbar">
            <div className="pr-search-wrap">
              <span className="pr-search-icon">🔍</span>
              <input
                type="text"
                placeholder="Search press releases..."
                className="pr-search-input"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <select
              className="pr-sort-select"
              value={sort}
              onChange={(e) => setSort(e.target.value)}
            >
              <option value="latest">Latest First</option>
              <option value="oldest">Oldest First</option>
            </select>
          </div>
        </div>
      </section>

      {/* FEATURED + SUB-FEATURED */}
      {featured && (
        <section className="pr-top-section">
          <div className="container">
            <div className="pr-section-label">
              <span className="pr-section-line" />
              <span>Top Stories</span>
              <span className="pr-section-line" />
            </div>

            <div className="row g-4">
              {/* FEATURED */}
              <div className="col-lg-8">
                <Link
                  href={`/press-release/${featured.slug.current}`}
                  className="featured-card"
                >
                  <div className="featured-content">
                    <div className="featured-top">
                      <span className="featured-badge">★ Featured</span>
                      {featured.publishedAt && (
                        <span className="pr-date">{formatDate(featured.publishedAt)}</span>
                      )}
                    </div>

                    <h2 className="featured-title">{featured.title}</h2>

                    {featured.excerpt ? (
                      <p className="featured-excerpt">{featured.excerpt}</p>
                    ) : (
                      <p className="featured-excerpt pr-no-excerpt">No description available.</p>
                    )}

                    <span className="pr-read-more">
                      Read Full Release <span className="pr-arrow">→</span>
                    </span>
                  </div>

                  {featured.mainImage && (
                    <div className="featured-image-wrap">
                      <img
                        src={pressUrlFor(featured.mainImage).width(900).url()}
                        alt={featured.title}
                      />
                      <div className="featured-img-overlay" />
                    </div>
                  )}
                </Link>
              </div>

              {/* SUB-FEATURED */}
              <div className="col-lg-4">
                {subFeatured && (
                  <Link
                    href={`/press-release/${subFeatured.slug.current}`}
                    className="sub-featured-card"
                  >
                    {subFeatured.mainImage && (
                      <div className="sub-featured-img-wrap">
                        <img
                          src={pressUrlFor(subFeatured.mainImage).width(500).url()}
                          alt={subFeatured.title}
                        />
                      </div>
                    )}

                    <div className="sub-featured-body">
                      {subFeatured.publishedAt && (
                        <span className="pr-date">{formatDate(subFeatured.publishedAt)}</span>
                      )}
                      <h4 className="sub-featured-title">{subFeatured.title}</h4>
                      {subFeatured.excerpt ? (
                        <p className="sub-featured-excerpt">{subFeatured.excerpt}</p>
                      ) : (
                        <p className="sub-featured-excerpt pr-no-excerpt">No description available.</p>
                      )}
                      <span className="pr-read-more">Read More <span className="pr-arrow">→</span></span>
                    </div>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* GENERAL POSTS */}
      <section className="pr-general-section">
        <div className="container">
          <div className="pr-section-label">
            <span className="pr-section-line" />
            <span>All Press Releases</span>
            <span className="pr-section-line" />
          </div>

          {generalPosts.length === 0 && search && (
            <div className="pr-empty">
              <p>No results found for "<strong>{search}</strong>"</p>
            </div>
          )}

          <div className="row g-4">
            {generalPosts.slice(0, visible).map((post: any) => (
              <div key={post._id} className="col-md-6 col-lg-4">
                <Link
                  href={`/press-release/${post.slug.current}`}
                  className="general-card"
                >
                  {post.mainImage && (
                    <div className="general-img-wrap">
                      <img
                        src={pressUrlFor(post.mainImage).width(600).url()}
                        alt={post.title}
                      />
                      <div className="general-img-overlay" />
                    </div>
                  )}

                  <div className="general-body">
                    {post.publishedAt && (
                      <span className="pr-date">{formatDate(post.publishedAt)}</span>
                    )}
                    <h5 className="general-title">{post.title}</h5>
                    {post.excerpt ? (
                      <p className="general-excerpt">{post.excerpt}</p>
                    ) : (
                      <p className="general-excerpt pr-no-excerpt">No description available.</p>
                    )}
                    <span className="pr-read-more">Read More <span className="pr-arrow">→</span></span>
                  </div>
                </Link>
              </div>
            ))}
          </div>

          {visible < generalPosts.length && (
            <div className="pr-load-more-wrap">
              <button
                className="pr-load-more-btn"
                onClick={() => setVisible((prev) => prev + 6)}
              >
                Load More Releases
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
