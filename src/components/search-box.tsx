import Tag from "./tag";
import { useSearch } from "../hooks/use-search";

export default function SearchBox() {
  const { keywords, removeKeyword, reset } = useSearch();

  return (
    !!keywords.length && (
      <div className="mb-8 flex items-center rounded-md bg-white p-5 shadow-lg md:-mt-9">
        <div className="flex flex-wrap gap-4">
          {keywords.map((keyword) => (
            <Tag
              key={keyword}
              allowedRemove
              onRemove={() => removeKeyword(keyword)}
            >
              {keyword}
            </Tag>
          ))}
        </div>
        <button className="ml-auto" onClick={reset}>
          Clear
        </button>
      </div>
    )
  );
}
