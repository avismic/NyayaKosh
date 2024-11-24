"use client";

import { useEffect, useState } from "react";
import moment from "moment";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import Categories from "@/components/Categories";
import { client } from "@/sanity/lib/client";

type Article = {
  _id: string;
  title: string;
  slug: { current: string };
  author: string;
  publishedAt: string;
  coverImage: string;
  description: string;
  category: string[];
};

const articleQuery = `*[_type == "post"]{
  _id,
  title,
  slug,
  "author": author->name,
  publishedAt,
  description,
  "coverImage": coverImage.asset->url,
  "category": categories[]->title
}`;

function useArticles() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const fetchedArticles = await client.fetch(articleQuery);
        setArticles(fetchedArticles);
      } catch (err) {
        console.error(err);
        setError("Failed to fetch articles. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchArticles();
  }, []);

  return { articles, isLoading, error };
}

function ArticleCard({ article }: { article: Article }) {
  return (
    <Card key={article._id} className="flex flex-col">
      <CardHeader>
        {article.coverImage ? (
          <Image
            src={article.coverImage}
            alt={article.title}
            width={300}
            height={200}
            className="w-full h-48 object-cover rounded-t-lg"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-48 bg-gray-300 flex items-center justify-center rounded-t-lg">
            <span className="text-gray-500">No Image</span>
          </div>
        )}
      </CardHeader>
      <CardContent className="flex-grow">
        <CardTitle className="mb-2">
          <Link
            href={`/article/${article.slug.current}/${article._id}`}
            className="hover:underline text-lg font-semibold line-clamp-2"
          >
            {article.title}
          </Link>
        </CardTitle>
        <p className="text-sm text-gray-500 mb-2">
          By {article.author} | {moment(article.publishedAt).fromNow()}
        </p>
        <p className="text-sm line-clamp-3 text-gray-700">
          {article.description || "No description available."}
        </p>
      </CardContent>
    </Card>
  );
}

const ArticleLoadingCard = () => {
  return (
    <div className="flex flex-col w-full h-[300px]">
      <div className="w-full h-[200px] bg-gray-300 rounded-md animate-pulse"></div>
      <div className="w-full h-[30px] mt-3 bg-gray-200 rounded-md animate-pulse"></div>
      <div className="w-full h-[10px] mt-2 bg-gray-200 rounded-md animate-pulse"></div>
      <div className="w-full h-[10px] mt-2 bg-gray-200 rounded-md animate-pulse"></div>
    </div>
  );
};

export default function HomePage() {
  const { articles, isLoading, error } = useArticles();
  const [filteredArticles, setFilteredArticles] = useState<Article[]>(articles);
  const [selectedCategory, setSelectedCategory] = useState<string>("");

  useEffect(() => {
    if (selectedCategory) {
      setFilteredArticles(
        articles.filter((article) =>
          article.category.includes(selectedCategory)
        )
      );
    } else {
      setFilteredArticles(articles);
    }
  }, [articles, selectedCategory]);

  if (error)
    return (
      <div className="container mx-auto px-4 py-6">
        <p className="text-red-500 text-center">{error}</p>
      </div>
    );

  return (
    <div className="container mx-auto px-4 py-6">
      <Categories
        setSelectedCategory={setSelectedCategory}
        selectedCategory={selectedCategory}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {isLoading
          ? Array.from({ length: 8 }).map((_, index) => (
              <ArticleLoadingCard key={index} />
            ))
          : filteredArticles.map((article) => (
              <ArticleCard key={article._id} article={article} />
            ))}
      </div>
    </div>
  );
}
