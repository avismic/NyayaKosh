import { ImageIcon, DocumentTextIcon } from "@sanity/icons";
import { defineArrayMember, defineField, defineType } from "sanity";

export const postType = defineType({
  name: "post",
  title: "Post",
  type: "document",
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      description: "The title of the article",
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
      description: "A short Description of the article",
    }),
    defineField({
      name: "content",
      title: "Content",
      type: "array",
      description: "The main body of the article",
      of: [defineArrayMember({ type: "block" })],
    }),
    defineField({
      name: "author",
      title: "Author",
      type: "reference",
      description: "The author who wrote the article",
      to: [{ type: "author" }],
    }),
    defineField({
      name: "publishedAt",
      title: "Published At",
      type: "datetime",
      description: "Date and time when the article was published",
    }),
    defineField({
      name: "tags",
      title: "Tags",
      type: "array",
      description: "An array of tags related to the article",
      of: [defineArrayMember({ type: "string" })],
    }),
    defineField({
      name: "categories",
      title: "Categories",
      type: "array",
      description: "Categories the article belongs to",
      of: [defineArrayMember({ type: "reference", to: { type: "category" } })],
    }),
    defineField({
      name: "coverImage",
      title: "Cover Image",
      type: "image",
      icon: ImageIcon,
      description: "Main image for the article",
      options: { hotspot: true },
    }),
    defineField({
      name: "images",
      title: "Images",
      type: "array",
      description: "Array of additional images within the article",
      of: [defineArrayMember({ type: "image", options: { hotspot: true } })],
    }),
    defineField({
      name: "isDraft",
      title: "Is Draft",
      type: "boolean",
      description: "Boolean to mark if the article is in draft status",
    }),
  ],
  preview: {
    select: {
      title: "title",
      media: "coverImage",
    },
  },
});
