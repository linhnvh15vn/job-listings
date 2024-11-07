import JobCard from "./job-card";

interface Props {
  jobs: Job[];
}

export default function JobList({ jobs }: Props) {
  return (
    <div className="flex flex-col gap-4 md:gap-6 md:pb-32 md:pt-20">
      {jobs.map((data) => (
        <JobCard key={data.id} job={data} />
      ))}
    </div>
  );
}
