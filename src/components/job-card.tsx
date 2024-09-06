import { useSearch } from '../hooks/use-search';
import Tag from './tag';

interface Props {
  job: Job;
}

export default function JobCard({ job }: Props) {
  const { setKeywords } = useSearch();
  const jobKeywords = [job.role, job.level, ...job.languages, ...job.tools];

  return (
    <div
      className={`p-6 pt-0 bg-white shadow-lg mt-6 rounded-md md:flex items-center gap-6 ${
        job.featured && 'border-l-4 border-primary'
      }`}
    >
      <div className="pt-8 relative">
        <img
          src={job.logo}
          alt={job.company}
          className="size-12 absolute -top-1/2 md:size-20 md:relative"
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
        <p className="font-medium text-base md:text-lg text-[#7c8f8f]">
          {job.postedAt} - {job.contract} - {job.location}
        </p>
      </div>

      <div className="w-full h-px bg-[#b7c4c4] md:hidden my-4" />

      <div className="flex gap-4 flex-wrap">
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
