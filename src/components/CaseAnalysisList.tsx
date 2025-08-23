// src/components/CaseAnalysisList.tsx

"use client";
import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import Link from "next/link";
import moment from "moment";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

type CaseAnalysis = {
  _id: string;
  title: string;
  slug: { current: string };
  author: string;
  publishedAt: string;
  coverImage: string;
  description: string;
};

const query = `*[_type == "caseAnalysis"] | order(publishedAt desc){
  _id,
  title,
  slug,
  "author": author->name,
  publishedAt,
  description,
  "coverImage": coverImage.asset->url,
}`;

export default function CaseAnalysisList() {
  const [analyses, setAnalyses] = useState<CaseAnalysis[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await client.fetch(query);
        setAnalyses(data);
      } catch (err) {
        console.error('Fetch error:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) return <p className="text-center">Loading case analyses...</p>;
  if (analyses.length === 0) return <p>No case analyses found.</p>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {analyses.map((item) => (
        <Card key={item._id} className="flex flex-col">
          <CardHeader>
            {item.coverImage ? (
              <Image
                src={item.coverImage}
                alt={item.title}
                width={300}
                height={200}
                className="w-full h-48 object-cover rounded-t-lg"
              />
            ) : (
              <div className="w-full h-48 bg-gray-300 rounded-t-lg" />
            )}
          </CardHeader>
          <CardContent className="flex-grow">
            <CardTitle className="mb-2">
              <Link
                href={`/case-analysis/${item.slug.current}/${item._id}`}
                className="hover:underline text-lg font-semibold line-clamp-2"
              >
                {item.title}
              </Link>
            </CardTitle>
            <p className="text-sm text-gray-500 mb-2">
              By {item.author} | {moment(item.publishedAt).fromNow()}
            </p>
            <p className="text-sm line-clamp-3 text-gray-700">
              {item.description || "No description available."}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}