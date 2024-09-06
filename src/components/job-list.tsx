import JobCard from "./job-card";

interface Props {
  jobs: Job[];
}

export default function JobList({ jobs }: Props) {
  return (
    <div className="flex flex-col gap-4">
      {jobs.map((data) => (
        <JobCard key={data.id} job={data} />
      ))}
    </div>
  );
}
