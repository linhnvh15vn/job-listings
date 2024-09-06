import { useSearch } from "../hooks/use-search";
import Tag from "./tag";

interface Props {
  job: Job;
}

export default function JobCard({ job }: Props) {
  const { setKeywords } = useSearch();
  const jobKeywords = [job.role, job.level, ...job.languages, ...job.tools];

  return (
    <div
      className={`mt-6 items-center gap-6 rounded-md bg-white p-6 pt-0 shadow-lg md:flex ${
        job.featured && "border-l-4 border-primary"
      }`}
    >
      <div className="relative pt-8">
        <img
          src={job.logo}
          alt={job.company}
          className="absolute -top-1/2 size-12 md:relative md:size-20"
        />
      </div>

      <div className="flex-1 space-y-2">
        <div className="flex items-center gap-8">
          <h2 className="text-primary">{job.company}</h2>
          <div className="flex gap-2">
            {job.new && <Tag variant="primary">NEW!</Tag>}
            {job.featured && <Tag variant="accent">FEATURE</Tag>}
          </div>
        </div>
        <h1>{job.position}</h1>
        <p className="text-base font-medium text-[#7c8f8f] md:text-lg">
          {job.postedAt} - {job.contract} - {job.location}
        </p>
      </div>

      <div className="my-4 h-px w-full bg-[#b7c4c4] md:hidden" />

      <div className="flex flex-wrap gap-4">
        {jobKeywords.map((jobKw) => (
          <Tag
            key={jobKw}
            onClick={() => setKeywords((prev) => [...prev, jobKw])}
          >
            {jobKw}
          </Tag>
        ))}
      </div>
    </div>
  );
}
