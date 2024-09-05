import { useFilters } from '../contexts/filter.context';
import Tag from './tag';

interface Props {
  job: Job;
}

export default function JobCard({ job }: Props) {
  const { setFilters } = useFilters();

  return (
    <div
      className={`p-6 pt-0 space-y-4 bg-white shadow-lg mt-6 rounded-md ${
        job.featured && 'border-l-[5px] border-[#5ca5a5]'
      }`}
    >
      <div className="pt-8 relative">
        <img
          src={job.logo}
          alt={job.company}
          className="size-12 absolute -top-1/2"
        />
      </div>

      <div>
        <div className="flex items-center gap-8">
          <h3 className="text-sm font-bold text-[#5ca5a5]">{job.company}</h3>
          <div className="flex gap-2">
            {job.new && (
              <div className="h-6 px-2 rounded-xl bg-[#5ca5a5] text-white font-bold text-sm flex items-center">
                NEW!
              </div>
            )}
            {job.featured && (
              <div className="h-6 px-2 rounded-xl bg-[#2b3939] text-white font-bold text-sm flex items-center">
                FEATURED
              </div>
            )}
          </div>
        </div>
        <h1 className="font-bold text-[#2b3939]">{job.position}</h1>
        <p className="font-medium text-[#7c8f8f]">
          {job.postedAt} - {job.contract} - {job.location}
        </p>
      </div>

      <div className="w-full h-px bg-[#b7c4c4]" />

      <div className="flex gap-4 flex-wrap">
        <Tag onClick={() => setFilters((prev) => [...prev, job.role])}>
          {job.role}
        </Tag>
        <Tag onClick={() => setFilters((prev) => [...prev, job.level])}>
          {job.level}
        </Tag>
        {job.languages?.map((language) => (
          <Tag
            key={language}
            onClick={() => setFilters((prev) => [...prev, language])}
          >
            {language}
          </Tag>
        ))}
        {job.tools?.map((tool) => (
          <Tag key={tool} onClick={() => setFilters((prev) => [...prev, tool])}>
            {tool}
          </Tag>
        ))}
      </div>
    </div>
  );
}
