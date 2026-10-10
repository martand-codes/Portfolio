import { Star, GitFork, Clock, AlertCircle } from 'lucide-react';
import projectsData from '../../data/projects-data.json';
import { getTimeAgo } from '../../Utils/timeAgo';

type ProjectKey = keyof typeof projectsData;

export const ProjectTelemetry = ({ projectId, color = 'accent' }: { projectId: ProjectKey, color?: 'accent' | 'success' | 'blue-400' | 'red-400' }) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const data = (projectsData as any)[projectId];
  
  if (!data) return null;

  const lastUpdate = new Date(data.lastUpdate).toLocaleDateString('en-US', {
    month: 'short', day: 'numeric', year: 'numeric'
  });

  const getColorClass = () => {
    switch(color) {
      case 'success': return 'text-success border-success/20 bg-success/5';
      case 'blue-400': return 'text-blue-400 border-blue-400/20 bg-blue-400/5';
      case 'red-400': return 'text-red-400 border-red-400/20 bg-red-400/5';
      default: return 'text-accent border-accent/20 bg-accent/5';
    }
  };
  
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const lastSynced = (projectsData as any)._meta?.lastSynced;
  const syncLabel = lastSynced ? `SYNCED: ${getTimeAgo(lastSynced).toUpperCase()}` : 'LIVE DATA';

  return (
    <div className="flex flex-wrap gap-3 mt-4">
      <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-[11px] font-mono tracking-widest uppercase ${getColorClass()}`}>
        <div className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
        <span>{syncLabel}</span>
      </div>
      <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-[11px] font-mono tracking-widest uppercase ${getColorClass()}`}>
        <Clock className="w-3.5 h-3.5" />
        <span>Updated: {lastUpdate}</span>
      </div>
      {(data.stars > 0 || data.forks > 0) && (
        <>
          <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-[11px] font-mono tracking-widest uppercase ${getColorClass()}`}>
            <Star className="w-3.5 h-3.5" />
            <span>{data.stars} Stars</span>
          </div>
          <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-[11px] font-mono tracking-widest uppercase ${getColorClass()}`}>
            <GitFork className="w-3.5 h-3.5" />
            <span>{data.forks} Forks</span>
          </div>
        </>
      )}
      <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-[11px] font-mono tracking-widest uppercase ${getColorClass()}`}>
        <AlertCircle className="w-3.5 h-3.5" />
        <span>{data.openIssues} Issues</span>
      </div>
    </div>
  );
};
