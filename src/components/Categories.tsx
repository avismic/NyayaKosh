"use client";

import { client } from "@/sanity/lib/client";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";

const query = `*[_type == "category"]{_id, title, slug, _createdAt}`;

interface CategoryType {
  _id: string;
  title: string;
  slug: {
    current: string;
    _type: string;
  };
  _createdAt: string;
}

function useCategories() {
  const [categories, setCategories] = useState<CategoryType[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await client.fetch(query);
        setCategories(res);
      } catch (err) {
        console.error(err);
        setError("Failed to fetch categories.");
        setCategories([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCategories();
  }, []);

  return { categories, isLoading, error };
}

function Categories({
  setSelectedCategory,
  selectedCategory,
}: {
  setSelectedCategory: (value: string) => void;
  selectedCategory: string;
}) {
  const { categories, isLoading, error } = useCategories();

  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold mb-2">Filter by Category:</h2>
      <div className="flex flex-wrap gap-2 items-center">
        <Button
          variant={selectedCategory === "" ? "default" : "outline"}
          onClick={() => setSelectedCategory("")}
        >
          All
        </Button>
        {isLoading ? (
          Array.from({ length: 5 }).map((_, index) => (
            <Button
              key={index}
              className="bg-gray-500 animate-pulse w-[70px]"
              disabled
            ></Button>
          ))
        ) : error ? (
          <p className="text-red-500">{error}</p>
        ) : categories && categories?.length > 0 ? (
          categories.map((category) => (
            <Button
              key={category._id}
              variant={
                selectedCategory === category.title ? "default" : "outline"
              }
              onClick={() => setSelectedCategory(category.title)}
            >
              {category.title}
            </Button>
          ))
        ) : (
          <p>No Categories Found</p>
        )}
      </div>
    </div>
  );
}

export default Categories;
