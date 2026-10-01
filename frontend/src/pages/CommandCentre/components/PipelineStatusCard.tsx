import type React from 'react';
import { PIPELINE_MODULES } from '../../../data/mockForensicData';
import { Badge } from '../../../components/common/Badge';
import { Cpu, RefreshCw } from 'lucide-react';

export const PipelineStatusCard: React.FC = () => {
  return (
    <div
      className="cfx-card"
      style={{
        padding: '20px',
        marginBottom: '24px',
        background: 'linear-gradient(180deg, var(--cfx-charcoal-card) 0%, rgba(20, 25, 28, 0.95) 100%)',
      }}
    >
      {/* Header */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '16px',
          flexWrap: 'wrap',
          gap: '10px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Cpu size={18} style={{ color: 'var(--cfx-forest-accent)' }} />
          <div>
            <h3
              style={{
                fontSize: '14px',
                fontWeight: 700,
                color: 'var(--cfx-ivory-100)',
                margin: 0,
              }}
            >
              Forensic Analysis Engines & Hardware Integrity
            </h3>
            <p style={{ margin: 0, fontSize: '11px', color: 'var(--cfx-ivory-muted)' }}>
              Hardware write protection bridges and live analytical coprocessors
            </p>
          </div>
        </div>

        <button
          onClick={() => alert('[SIMULATED SYNC] Queried Tableau write-blocker SCSI bus and YARA engine threads. All pipelines nominal.')}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            fontSize: '11px',
            fontFamily: 'var(--font-mono)',
            color: 'var(--cfx-ivory-300)',
            padding: '4px 8px',
            borderRadius: '4px',
            border: '1px solid var(--cfx-charcoal-border)',
            background: 'rgba(239, 232, 223, 0.04)',
          }}
        >
          <RefreshCw size={12} style={{ color: 'var(--cfx-forest-accent)' }} />
          <span>Poll Diagnostics</span>
        </button>
      </div>

      {/* Grid of 4 Pipeline Modules */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '14px',
        }}
      >
        {PIPELINE_MODULES.map((module) => (
          <div
            key={module.id}
            style={{
              padding: '14px',
              borderRadius: '6px',
              backgroundColor: 'rgba(20, 25, 28, 0.7)',
              border: '1px solid var(--cfx-charcoal-border)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              gap: '10px',
            }}
          >
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '6px' }}>
                <span style={{ fontSize: '13px', fontWeight: 700, color: 'var(--cfx-ivory-100)' }}>
                  {module.name}
                </span>
                <Badge variant={module.status === 'operational' ? 'forest' : 'copper'} size="sm">
                  {module.status}
                </Badge>
              </div>

              <div style={{ fontSize: '11px', color: 'var(--cfx-ivory-muted)', marginBottom: '4px' }}>
                {module.role}
              </div>

              <div
                style={{
                  fontSize: '10.5px',
                  fontFamily: 'var(--font-mono)',
                  color: 'var(--cfx-copper-light)',
                  backgroundColor: 'rgba(218, 133, 84, 0.08)',
                  padding: '2px 6px',
                  borderRadius: '3px',
                  display: 'inline-block',
                }}
              >
                {module.version}
              </div>
            </div>

            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingTop: '8px',
                borderTop: '1px dashed rgba(239, 232, 223, 0.08)',
                fontSize: '11px',
                fontFamily: 'var(--font-mono)',
              }}
            >
              <span style={{ color: 'var(--cfx-ivory-400)' }}>{module.throughput}</span>
              <span style={{ color: 'var(--cfx-forest-accent)' }}>{module.lastHeartbeat}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
