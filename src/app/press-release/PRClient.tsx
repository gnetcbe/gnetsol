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
      month: "short", day: "2-digit", year: "numeric",
    });

  const isNew = (dateStr: string) => {
    const diff = Date.now() - new Date(dateStr).getTime();
    return diff < 1000 * 60 * 60 * 24 * 14; // within 14 days
  };

  const totalPosts = posts.length;
  const generalCount = generalPosts.length;

  return (
    <>
      {/* STATS BAR */}
      <div className="pr-stats-bar">
        <div className="container">
          <div className="pr-stats-inner">
            <div className="pr-stat">
              <span className="pr-stat-num">{totalPosts}</span>
              <span className="pr-stat-label">Total Releases</span>
            </div>
            <div className="pr-stat-divider" />
             
            <div className="pr-stat">
              <span className="pr-stat-dot" />
              <span className="pr-stat-label pr-stat-live">Live Updates</span>
            </div>

            {/* SEARCH + SORT */}
            <div className="pr-toolbar">
              <div className="pr-search-wrap">
                <svg className="pr-search-icon" viewBox="0 0 20 20" fill="none">
                  <circle cx="9" cy="9" r="6" stroke="#aaa" strokeWidth="1.8"/>
                  <path d="M14 14l3 3" stroke="#aaa" strokeWidth="1.8" strokeLinecap="round"/>
                </svg>
                <input
                  type="text"
                  placeholder="Search releases..."
                  className="pr-search-input"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
                {search && (
                  <button className="pr-clear-btn" onClick={() => setSearch("")}>✕</button>
                )}
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
        </div>
      </div>

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
                <Link href={`/press-release/${featured.slug.current}`} className="featured-card">
                  <div className="featured-content">
                    <div className="featured-top">
                      <span className="featured-badge">★ Featured</span>
                      {featured.publishedAt && isNew(featured.publishedAt) && (
                        <span className="pr-new-tag">NEW</span>
                      )}
                      {featured.publishedAt && (
                        <span className="pr-date">
                          <span className="pr-cal-icon">📅</span>
                          {formatDate(featured.publishedAt)}
                        </span>
                      )}
                    </div>

                    <h2 className="featured-title">{featured.title}</h2>

                    {featured.excerpt && (
                      <p className="featured-excerpt">{featured.excerpt}</p>
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
                  <Link href={`/press-release/${subFeatured.slug.current}`} className="sub-featured-card">
                    {subFeatured.mainImage && (
                      <div className="sub-featured-img-wrap">
                        <img
                          src={pressUrlFor(subFeatured.mainImage).width(500).url()}
                          alt={subFeatured.title}
                        />
                        {subFeatured.publishedAt && isNew(subFeatured.publishedAt) && (
                          <span className="pr-img-new-tag">NEW</span>
                        )}
                      </div>
                    )}
                    <div className="sub-featured-body">
                      {subFeatured.publishedAt && (
                        <span className="pr-date">
                          <span className="pr-cal-icon">📅</span>
                          {formatDate(subFeatured.publishedAt)}
                        </span>
                      )}
                      <h4 className="sub-featured-title">{subFeatured.title}</h4>
                      {subFeatured.excerpt && (
                        <p className="sub-featured-excerpt">{subFeatured.excerpt}</p>
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
            <span>
              All Press Releases
              {search
                ? ` — ${generalPosts.length} result${generalPosts.length !== 1 ? "s" : ""} for "${search}"`
                : ` (${generalCount})`}
            </span>
            <span className="pr-section-line" />
          </div>

          {generalPosts.length === 0 && search && (
            <div className="pr-empty">
              <div className="pr-empty-icon">🔍</div>
              <p>No results found for "<strong>{search}</strong>"</p>
              <button className="pr-clear-search" onClick={() => setSearch("")}>Clear Search</button>
            </div>
          )}

          <div className="row g-4">
            {generalPosts.slice(0, visible).map((post: any, i: number) => (
              <div key={post._id} className="col-md-6 col-lg-4">
                <Link
                  href={`/press-release/${post.slug.current}`}
                  className="general-card"
                  style={{ animationDelay: `${(i % 6) * 60}ms` }}
                >
                  {post.mainImage && (
                    <div className="general-img-wrap">
                      <img
                        src={pressUrlFor(post.mainImage).width(600).url()}
                        alt={post.title}
                      />
                      <div className="general-img-overlay" />
                      {post.publishedAt && isNew(post.publishedAt) && (
                        <span className="pr-img-new-tag">NEW</span>
                      )}
                    </div>
                  )}
                  <div className="general-body">
                    {post.publishedAt && (
                      <span className="pr-date">
                        <span className="pr-cal-icon">📅</span>
                        {formatDate(post.publishedAt)}
                      </span>
                    )}
                    <h5 className="general-title">{post.title}</h5>
                    {post.excerpt && (
                      <p className="general-excerpt">{post.excerpt}</p>
                    )}
                    <span className="pr-read-more">Read More <span className="pr-arrow">→</span></span>
                  </div>
                </Link>
              </div>
            ))}
          </div>

          {visible < generalPosts.length && (
            <div className="pr-load-more-wrap">
              <span className="pr-load-count">
                Showing {Math.min(visible, generalPosts.length)} of {generalPosts.length}
              </span>
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
