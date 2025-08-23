import { NextResponse } from "next/server";
import { client } from "@/sanity/lib/client"; // Ensure you have a Sanity client setup
import { searchArticlesByTags } from "@/sanity/lib/queries";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const tag = searchParams.get("tag");

  if (!tag) {
    return NextResponse.json({ message: "Tag is required" }, { status: 400 });
  }

  try {
    const articles = await client.fetch(searchArticlesByTags(tag));
    return NextResponse.json(articles, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error fetching data", error }, { status: 500 });
  }
}