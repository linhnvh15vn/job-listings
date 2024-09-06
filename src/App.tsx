import Header from './components/header';
import JobCard from './components/job-card';
import SearchBox from './components/search-box';
import data from './data.json';
import { useSearch } from './hooks/use-search';

export default function App() {
  const { keywords } = useSearch();

  return (
    <>
      <Header />
      <SearchBox />
      <div className="container grid grid-cols-1 gap-y-4">
        {data
          .filter((data) => {
            const jobKeywords = [
              data.role,
              data.level,
              ...data.languages,
              ...data.tools,
            ];

            if (keywords.length === 0) {
              return data;
            }

            return keywords.every(
              (keyword) => jobKeywords.includes(keyword) && data,
            );
          })
          .map((data) => (
            <JobCard key={data.id} job={data} />
          ))}
      </div>
    </>
  );
}
