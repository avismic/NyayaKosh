// src/app/(pages)/case-analysis/[slug]/[id]/page.tsx

import View from "@/components/View";

export default async function Page({ params }: { params: Promise<{ slug: string; id: string }> }) {
  const { id } = await params;

  // This query is updated to fetch from the "caseAnalysis" type
  const query = `*[_type == "caseAnalysis" && _id == "${id}"]{
    _id,
    title,
    slug,
    "author": author->name,
    content,
    publishedAt,
    "coverImage": coverImage.asset->url,
    tags,
    "category": categories[]->title
  }[0]`;

  return <View query={query} />;
}