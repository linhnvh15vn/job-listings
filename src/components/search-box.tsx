import Tag from './tag';
import { useSearch } from '../hooks/use-search';

export default function SearchBox() {
  const { keywords, removeKeyword, reset } = useSearch();

  return (
    !!keywords.length && (
      <div className="bg-white p-5 flex items-center">
        <div className="flex gap-4 flex-wrap">
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
