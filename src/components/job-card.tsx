import { useSearch } from '../hooks/use-search';
import Tag from './tag';

interface Props {
  job: Job;
}

export default function JobCard({ job }: Props) {
  const { keywords, setKeywords } = useSearch();
  const jobKeywords = [job.role, job.level, ...job.languages, ...job.tools];

  const handleClickTag = (jobKw: string) => {
    if (!keywords.includes(jobKw)) {
      setKeywords((prev) => [...prev, jobKw]);
    }

    return;
  };

  return (
    <div
      className={`relative mt-6 items-center gap-6 rounded-md bg-white p-6 pt-8 shadow-lg md:mt-0 md:flex md:px-10 md:py-8 ${
        job.featured ? 'border-l-4 border-primary' : ''
      }`}
    >
      <img
        src={job.logo}
        alt={job.company}
        className="absolute -top-6 size-12 md:relative md:top-0 md:size-20"
      />

      <div className="space-y-2 md:flex-1">
        <div className="flex items-center gap-8">
          <h2 className="text-sm font-bold text-primary">{job.company}</h2>
          <div className="space-x-2">
            {job.new && <Tag variant="primary">NEW!</Tag>}
            {job.featured && <Tag variant="accent">FEATURE</Tag>}
          </div>
        </div>
        <h1 className="cursor-pointer text-base font-bold text-foreground hover:text-primary">
          {job.position}
        </h1>
        <p className="text-base font-medium text-mute-foreground md:text-lg">
          {job.postedAt} &bull; {job.contract} &bull; {job.location}
        </p>
      </div>
      <div className="my-4 h-px w-full bg-border md:hidden" />
      <div className="flex flex-wrap gap-4">
        {jobKeywords.map((jobKw) => (
          <Tag key={jobKw} onClick={() => handleClickTag(jobKw)}>
            {jobKw}
          </Tag>
        ))}
      </div>
    </div>
  );
}
