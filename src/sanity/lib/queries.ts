

export const searchArticlesByTags = (tag: string) => `
  *[_type == "post" && "${tag}" in tags]{
  _id,
  title,
  slug,
  tags,
  "author": author->name,
  publishedAt,
  description,
  "coverImage": coverImage.asset->url,
  "category": categories[]->title
}
`;


