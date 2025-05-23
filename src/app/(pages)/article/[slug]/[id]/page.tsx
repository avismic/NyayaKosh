import View from "@/components/View";

// Define the type for the fetched article

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string; id: string }>;
}) {
  const { id } = await params;

  const articleQuery = `*[_type == "post" && _id == "${id}"]{
    _id,
    title,
    slug,
    "author": author->name,
    content,
    publishedAt,
    "images": images[].asset->url,
    "coverImage": coverImage.asset->url,
    tags,
    "category": categories[]->title
  }[0]`;

  return <View query={articleQuery} />;
}
