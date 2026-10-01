import type React from 'react';
import { useState } from 'react';
import { AlertTriangle, ShieldCheck, Info, ChevronDown, ChevronUp } from 'lucide-react';

export const SimulationBanner: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      style={{
        background: 'linear-gradient(90deg, rgba(24, 32, 36, 0.95) 0%, rgba(35, 27, 22, 0.95) 100%)',
        borderBottom: '1px solid rgba(218, 133, 84, 0.28)',
        color: 'var(--cfx-ivory-300)',
        fontSize: '12px',
        padding: '6px 20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '12px',
        zIndex: 40,
        position: 'relative',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <span
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '5px',
            backgroundColor: 'rgba(218, 133, 84, 0.15)',
            border: '1px solid rgba(218, 133, 84, 0.45)',
            color: 'var(--cfx-copper-light)',
            padding: '2px 8px',
            borderRadius: '4px',
            fontSize: '11px',
            fontWeight: 700,
            letterSpacing: '0.4px',
            fontFamily: 'var(--font-mono)',
          }}
        >
          <AlertTriangle size={13} />
          SIMULATION ENVIRONMENT
        </span>

        <p style={{ margin: 0, color: 'var(--cfx-ivory-400)', fontSize: '12px' }}>
          <strong>Notice:</strong> All forensic cases, memory dumps, disk hashes, and telemetry presented in CyberFusion X are synthetically generated for analytical training and UI prototyping.
        </p>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--cfx-forest-accent)' }}>
          <ShieldCheck size={14} />
          <span style={{ fontSize: '11px', fontFamily: 'var(--font-mono)' }}>WRITE-BLOCKER EMULATION: ACTIVE</span>
        </div>

        <button
          onClick={() => setIsExpanded(!isExpanded)}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
            color: 'var(--cfx-ivory-muted)',
            fontSize: '11px',
            background: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            padding: '2px 8px',
            borderRadius: '4px',
          }}
          title="Toggle Simulation Architecture Details"
        >
          <Info size={12} />
          <span>{isExpanded ? 'Hide Scope' : 'Scope Details'}</span>
          {isExpanded ? <ChevronUp size={12} /> : <ChevronDown size={12} />}
        </button>
      </div>

      {isExpanded && (
        <div
          style={{
            width: '100%',
            marginTop: '6px',
            paddingTop: '8px',
            borderTop: '1px dashed rgba(239, 232, 223, 0.12)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '12px',
            fontSize: '11px',
            color: 'var(--cfx-ivory-500)',
          }}
        >
          <div>
            <strong style={{ color: 'var(--cfx-ivory-200)' }}>Synthetic Data Model:</strong> ISO/IEC 27037 digital evidence preservation standards are emulated without accessing real host telemetry.
          </div>
          <div>
            <strong style={{ color: 'var(--cfx-ivory-200)' }}>Zero Production Access:</strong> No external packets, remote agents, or live memory addresses are touched.
          </div>
          <div>
            <strong style={{ color: 'var(--cfx-ivory-200)' }}>Deterministic Hashes:</strong> SHA-256 and MD5 cryptographic digests are statically modeled for test repeatability.
          </div>
        </div>
      )}
    </div>
  );
};
