import { Download } from 'lucide-react';

export const ExportButton = ({ 
  fileName, 
  content, 
  color = 'accent' 
}: { 
  fileName: string, 
  content: string,
  color?: 'accent' | 'success' | 'blue-400' | 'red-400' 
}) => {
  const handleExport = () => {
    const blob = new Blob([content], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${fileName}.md`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const getColorClass = () => {
    switch(color) {
      case 'success': return 'bg-success/10 border-success/30 text-success hover:bg-success/20';
      case 'blue-400': return 'bg-blue-400/10 border-blue-400/30 text-blue-400 hover:bg-blue-400/20';
      case 'red-400': return 'bg-red-400/10 border-red-400/30 text-red-400 hover:bg-red-400/20';
      default: return 'bg-accent/10 border-accent/30 text-accent hover:bg-accent/20';
    }
  };

  return (
    <button 
      onClick={handleExport}
      className={`flex items-center gap-2 px-4 py-2 border transition-colors rounded-lg text-xs font-mono font-bold ${getColorClass()}`}
    >
      <Download className="w-4 h-4" /> EXPORT SYSTEM REPORT
    </button>
  );
};
