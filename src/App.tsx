import Header from './components/header';
import JobList from './components/job-list';
import SearchBox from './components/search-box';
import data from './data.json';
import { useSearch } from './hooks/use-search';

export default function App() {
  const { keywords } = useSearch();

  const renderedJobs = data.filter((job) => {
    const jobKeywords = [job.role, job.level, ...job.languages, ...job.tools];

    return (
      keywords.length === 0 ||
      keywords.every((keyword) => jobKeywords.includes(keyword))
    );
  });

  return (
    <>
      <Header />
      <div
        className={`container max-w-6xl py-8 ${keywords.length ? 'pt-0' : ''}`}
      >
        <div className="relative bottom-9">
          <SearchBox />
        </div>
        <JobList jobs={renderedJobs} />
      </div>
    </>
  );
}
