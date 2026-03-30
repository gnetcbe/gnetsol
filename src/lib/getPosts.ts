import { baseUrl } from "@/lib/sanity";

export async function getPosts() {
const query = encodeURIComponent(`*[_type == "post"]{
  _id,
  title,
  slug,
  mainImage
}`);

  const res = await fetch(`${baseUrl}?query=${query}`, {
    next: { revalidate: 60 },
  });

  const data = await res.json();
  return data.result;
}

