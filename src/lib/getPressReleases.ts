import { baseUrl } from "@/lib/pressSanity";

export async function getPressReleases() {
  const query = encodeURIComponent(`*[_type == "post"]{
    _id,
    title,
    slug,
    mainImage,
    publishedAt,
    body,
    categories[]->{
      title
    }
  }`);

  const res = await fetch(`${baseUrl}?query=${query}`, {
    next: { revalidate: 60 },
  });

  const data = await res.json();
  return data.result;
}