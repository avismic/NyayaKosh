import { BookIcon } from "@sanity/icons";
import { defineArrayMember, defineField, defineType } from "sanity";

export const caseAnalysisType = defineType({
  name: "caseAnalysis",
  title: "Case Analysis",
  type: "document",
  icon: BookIcon,
  fields: [
    defineField({
      name: "title",
      title: "Title / Case Name",
      type: "string",
      description: "The name of the case being analyzed",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      description: "A URL-friendly version of the title",
      options: {
        source: "title",
        maxLength: 96,
      },
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "string",
      description: "A short summary of the case analysis",
    }),
    defineField({
      name: "content",
      title: "Content",
      type: "array",
      description: "The main body of the analysis",
      of: [defineArrayMember({ type: "block" })],
    }),
    defineField({
      name: "author",
      title: "Author",
      type: "reference",
      description: "The author who wrote the analysis",
      to: [{ type: "author" }],
    }),
    defineField({
      name: "publishedAt",
      title: "Published At",
      type: "datetime",
      description: "Date and time when the analysis was published",
    }),
    defineField({
      name: "tags",
      title: "Tags",
      type: "array",
      description: "Keywords related to the case (e.g., 'Criminal Law', 'Supreme Court')",
      of: [defineArrayMember({ type: "string" })],
    }),
    defineField({
      name: "categories",
      title: "Categories",
      type: "array",
      description: "Categories the analysis belongs to",
      of: [defineArrayMember({ type: "reference", to: { type: "category" } })],
    }),
    defineField({
      name: "coverImage",
      title: "Cover Image",
      type: "image",
      description: "Main image for the analysis",
      options: { hotspot: true },
    }),
  ],
  preview: {
    select: {
      title: "title",
      media: "coverImage",
    },
  },
});