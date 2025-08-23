import { useState } from "react";
import { Input } from "./ui/input";

type Article = {
  _id: string;
  title: string;
  slug: { current: string };
};

const Search = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Article[]>([]);

  const handleSearch = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);

    if (e.target.value.length > 1) {
      const res = await fetch(`/api/search?tag=${e.target.value}`);
      const data: Article[] = await res.json();
      setResults(data);
    } else {
      setResults([]);
    }
  };

  return (
    <div className="relative">
      <Input
        type="text"
        value={query}
        onChange={handleSearch}
        placeholder="Search articles..."
        className="p-2 border rounded w-full"
      />
      {results.length > 0 && (
        <div className="absolute bg-white border w-full mt-1 p-2 shadow">
          {results.map((article) => (
            <div key={article._id} className="p-2 border-b">
              <a href={`/article/${article.slug.current}/${article._id}`} className="text-blue-600">
                {article.title}
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;
