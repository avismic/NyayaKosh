"use client";

import Image from "next/image";
import { Key, useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import ViewContent from "./Content";
import ContentSkeleton from "./loader/ContentLoader";
import { PortableTextBlock } from "@portabletext/types";

interface ViewProps {
  query: string;
}

interface Article {
  _id: string;
  title: string;
  slug: string;
  author: string;
  content: PortableTextBlock[];
  publishedAt: string;
  coverImage: string;
  tags: Array<string> | [];
  category: Array<string>;
  images: Array<string> | [];
}

const View = ({ query }: ViewProps) => {
  const [article, setArticle] = useState<Article | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const fetchedArticles = await client.fetch(query);
        console.log(fetchedArticles);
        if (fetchedArticles) {
          setArticle(fetchedArticles); // Assuming you're fetching a single article
        } else {
          setError("No article found.");
        }
      } catch (err) {
        console.error(err);
        setError("Failed to fetch articles. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchArticles();
  }, [query]);

  if (isLoading) {
    return <ContentSkeleton />;
  }

  if (error) {
    return (
      <div className="text-center my-4 text-red-600">
        <p>{error}</p>
      </div>
    );
  }

  if (!article) {
    return (
      <div className="text-center my-4">
        <p>No article available.</p>
      </div>
    );
  }

  const imageLoader = ({ src }: { src: string }) => {
    // Adjust this logic based on your image hosting requirements
    return src.startsWith("http") ? src : `/test.jpg`;
  };

  return (
    <div className="container mx-auto px-4 my-6">
      <div className="flex items-start gap-3 w-full">
        <div className="post_description shadow-lg p-4 min-w-[70%] max-w-[70%]">
          <div className="relative w-full h-[400px]">
            <Image
              loading="lazy"
              src={article.coverImage || "/test.jpg"} // Use a fallback image
              loader={imageLoader} // Use the custom loader
              className="object-cover object-center rounded-md"
              alt={article.title || "Article Image"}
              fill
            />
          </div>
          <div className="my-4">
            <h1 className="font-bold text-2xl">
              {article.title || "Untitled"}
            </h1>
            <p className="font-semibold text-[#295F98] mt-2">
              {article.author || "Unknown Author"}
            </p>
            <p className="text-sm text-gray-500 mt-1">
              Published on:{" "}
              {new Date(article.publishedAt).toLocaleDateString() || "N/A"}
            </p>
          </div>
          <div className="content_box">
            <ViewContent content={article.content} />
            <div className="mt-8">
              {article.images.map((img: string, index: Key) => (
                <div key={index} className="relative w-full h-[400px]">
                  <Image
                    loading="lazy"
                    src={img || "/test.jpg"} // Use a fallback image
                    loader={imageLoader} // Use the custom loader
                    className="object-cover object-center rounded-md"
                    alt={article.title || "Article Image"}
                    fill
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default View;
