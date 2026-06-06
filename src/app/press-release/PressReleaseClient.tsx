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
        return (
          new Date(b.publishedAt).getTime() -
          new Date(a.publishedAt).getTime()
        );
      }

      return (
        new Date(a.publishedAt).getTime() -
        new Date(b.publishedAt).getTime()
      );
    });

    return filtered;
  }, [posts, search, sort]);

  return (
    <>
      {/* HERO */}
      <section className="press-hero">
        <div className="container">
          <div className="breadcrumb-wrap">
            Home / Press Releases
          </div>

          <h1>Press Releases</h1>

          <p>
            Stay updated with the latest company news,
            announcements and achievements from G-Net Solutions.
          </p>
        </div>
      </section>

      {/* SEARCH + SORT */}
      <section className="container my-4">
        <div className="toolbar">
          <input
            type="text"
            placeholder="Search press releases..."
            className="form-control"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <select
            className="form-select"
            value={sort}
            onChange={(e) => setSort(e.target.value)}
          >
            <option value="latest">Latest First</option>
            <option value="oldest">Oldest First</option>
          </select>
        </div>
      </section>

      {/* FEATURED */}
      {featured && (
        <section className="container mb-4">
          <div className="row g-4">
            <div className="col-lg-8">
              <div className="featured-card">
                <div className="featured-content">
                  <span className="badge bg-primary">
                    Featured
                  </span>

                  <h2>{featured.title}</h2>

                  <Link
                    href={`/press-release/${featured.slug.current}`}
                    className="read-more"
                  >
                    Read Full Release →
                  </Link>
                </div>

                {featured.mainImage && (
                  <img
                    src={pressUrlFor(featured.mainImage)
                      .width(900)
                      .url()}
                    alt={featured.title}
                  />
                )}
              </div>
            </div>

            {/* SUB FEATURED */}
            <div className="col-lg-4">
              {subFeatured && (
                <div className="sub-featured-card">
                  {subFeatured.mainImage && (
                    <img
                      src={pressUrlFor(subFeatured.mainImage)
                        .width(500)
                        .url()}
                      alt={subFeatured.title}
                    />
                  )}

                  <h4>{subFeatured.title}</h4>

                  <Link
                    href={`/press-release/${subFeatured.slug.current}`}
                    className="read-more"
                  >
                    Read More →
                  </Link>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* GENERAL POSTS */}
      <section className="container pb-5">
        <div className="row">
          {generalPosts
            .slice(0, visible)
            .map((post: any) => (
              <div
                key={post._id}
                className="col-md-6 col-lg-4 mb-4"
              >
                <div className="general-card">
                  {post.mainImage && (
                    <img
                      src={pressUrlFor(post.mainImage)
                        .width(600)
                        .url()}
                      alt={post.title}
                    />
                  )}

                  <div className="p-3">
                    <h5>{post.title}</h5>

                    <Link
                      href={`/press-release/${post.slug.current}`}
                    >
                      Read More →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
        </div>

        {visible < generalPosts.length && (
          <div className="text-center">
            <button
              className="btn btn-primary"
              onClick={() =>
                setVisible((prev) => prev + 6)
              }
            >
              Load More
            </button>
          </div>
        )}
      </section>
    </>
  );
}