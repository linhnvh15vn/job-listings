import JobCard from './components/job-card';
import data from './data.json';

export default function App() {
  return (
    <div className="container grid grid-cols-1 gap-y-4">
      {data.map((data) => (
        <JobCard key={data.id} job={data} />
      ))}
    </div>
  );
}
