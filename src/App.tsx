import Header from './components/header';
import JobCard from './components/job-card';
import Tag from './components/tag';
import { useFilters } from './contexts/filter.context';
import data from './data.json';

export default function App() {
  const { filters, handleRemoveTag } = useFilters();

  return (
    <>
      <Header />
      {!!filters.length && (
        <div className="bg-white p-5 flex items-center">
          <div className="flex gap-4 flex-wrap">
            {filters.map((filter) => (
              <Tag
                key={filter}
                allowedRemove
                onRemove={() => handleRemoveTag(filter)}
              >
                {filter}
              </Tag>
            ))}
          </div>
          <button className="ml-auto">Clear</button>
        </div>
      )}
      <div className="container grid grid-cols-1 gap-y-4">
        {data.map((data) => (
          <JobCard key={data.id} job={data} />
        ))}
      </div>
    </>
  );
}
