import { Metadata } from "next";
import View from "@/components/View";
import { client } from "@/sanity/lib/client";

export async function generateMetadata({
  params,
}: {
  params: { slug: string; id: string };
}): Promise<Metadata> {
  const { id } = params;

  // Fetch article data
  const articleQuery = `*[_type == "post" && _id == "${id}"]{
    title,
    "author": author->name,
    content,
    publishedAt,
    "coverImage": coverImage.asset->url,
    tags,
    "slug": slug.current
  }[0]`;

  const article = await client.fetch(articleQuery);

  if (!article) {
    return {
      title: "Article Not Found - NyayaKosh",
      description: "The article you are looking for could not be found.",
    };
  }

  const metadata: Metadata = {
    title: `${article.title} - NyayaKosh`,
    description:
      article.content?.slice(0, 150) || "Explore legal insights at NyayaKosh.",
    authors: [{ name: article.author }],
    keywords: article.tags || [],
    openGraph: {
      title: article.title,
      description:
        article.content?.slice(0, 150) ||
        "Explore legal insights at NyayaKosh.",
      url: `https://nyayakosh.in/article/${article.slug}/${id}`,
      images: article.coverImage
        ? [{ url: article.coverImage, alt: article.title }]
        : [],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description:
        article.content?.slice(0, 150) ||
        "Explore legal insights at NyayaKosh.",
      images: article.coverImage ? [article.coverImage] : [],
    },
    alternates: {
      canonical: `https://nyayakosh.in/article/${article.slug}/${id}`,
    },
  };

  return metadata;
}

export default async function Page({
  params,
}: {
  params: { slug: string; id: string };
}) {
  const { id } = params;

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
