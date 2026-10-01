import type React from 'react';
import { WelcomeHeader } from './components/WelcomeHeader';
import { ActiveCaseCard } from './components/ActiveCaseCard';
import { MetricsOverview } from './components/MetricsOverview';
import { IncidentTelemetryChart } from './components/IncidentTelemetryChart';
import { IocDistributionChart } from './components/IocDistributionChart';
import { PipelineStatusCard } from './components/PipelineStatusCard';
import { RecentActivityFeed } from './components/RecentActivityFeed';
import { EvidencePreviewTable } from './components/EvidencePreviewTable';

export const CommandCentre: React.FC = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      {/* 1. Header with Investigator Greeting, Time & Quick Tools */}
      <WelcomeHeader />

      {/* 2. Active Case Information Dossier */}
      <ActiveCaseCard />

      {/* 3. Forensic Key Metrics (KPIs) */}
      <MetricsOverview />

      {/* 4. Telemetry Stream & Threat Vector Distribution Visualizations */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(480px, 1fr))',
          gap: '24px',
        }}
      >
        <IncidentTelemetryChart />
        <IocDistributionChart />
      </div>

      {/* 5. Forensic Analysis Engines & Hardware Integrity */}
      <PipelineStatusCard />

      {/* 6. Chronological Activity Log & Custody Evidence Table */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))',
          gap: '24px',
        }}
      >
        <RecentActivityFeed />
        <EvidencePreviewTable />
      </div>
    </div>
  );
};

export default CommandCentre;
