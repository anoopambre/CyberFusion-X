import type React from 'react';
import { FORENSIC_METRICS } from '../../../data/mockForensicData';
import { StatCard } from '../../../components/common/StatCard';
import { HardDrive, ShieldAlert, GitCommitHorizontal, CheckCircle2 } from 'lucide-react';

export const MetricsOverview: React.FC = () => {
  const getIcon = (id: string) => {
    switch (id) {
      case 'm1':
        return <HardDrive size={18} />;
      case 'm2':
        return <ShieldAlert size={18} />;
      case 'm3':
        return <GitCommitHorizontal size={18} />;
      case 'm4':
      default:
        return <CheckCircle2 size={18} />;
    }
  };

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '20px',
        marginBottom: '24px',
      }}
    >
      {FORENSIC_METRICS.map((metric) => (
        <StatCard
          key={metric.id}
          label={metric.label}
          value={metric.value}
          unit={metric.unit}
          changeText={metric.changeText}
          isPositiveTrend={metric.isPositiveTrend}
          detail={metric.detail}
          accent={metric.accent}
          icon={getIcon(metric.id)}
        />
      ))}
    </div>
  );
};
