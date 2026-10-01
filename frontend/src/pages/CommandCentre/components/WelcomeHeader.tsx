import type React from 'react';
import { useState, useEffect } from 'react';
import { ACTIVE_CASE } from '../../../data/mockForensicData';
import { Badge } from '../../../components/common/Badge';
import {
  Clock,
  Play,
  FileCheck,
  Share2,
} from 'lucide-react';

export const WelcomeHeader: React.FC = () => {
  const [currentTime, setCurrentTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(now.toUTCString().replace('GMT', 'UTC'));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '20px',
        marginBottom: '24px',
        padding: '20px 24px',
        background: 'linear-gradient(135deg, rgba(20, 25, 28, 0.95) 0%, rgba(15, 20, 22, 0.98) 100%)',
        border: '1px solid var(--cfx-charcoal-border)',
        borderRadius: '8px',
        borderLeft: '4px solid var(--cfx-copper-light)',
        boxShadow: 'var(--cfx-shadow-card)',
      }}
    >
      {/* Left: Salutation & Active Case Header */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
          <Badge severity="critical" size="sm">
            {ACTIVE_CASE.severity}
          </Badge>
          <Badge tlp={ACTIVE_CASE.tlp} size="sm">
            {ACTIVE_CASE.tlp}
          </Badge>
          <span
            style={{
              fontSize: '11px',
              fontFamily: 'var(--font-mono)',
              color: 'var(--cfx-copper-light)',
              fontWeight: 600,
            }}
          >
            ACTIVE FORENSIC ENGAGEMENT
          </span>
        </div>

        <h2
          style={{
            fontSize: '22px',
            fontWeight: 800,
            letterSpacing: '-0.3px',
            color: 'var(--cfx-ivory-100)',
            margin: 0,
            lineHeight: 1.2,
          }}
        >
          {ACTIVE_CASE.codeName}:{' '}
          <span style={{ color: 'var(--cfx-ivory-300)', fontWeight: 500, fontSize: '18px' }}>
            {ACTIVE_CASE.title}
          </span>
        </h2>

        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', fontSize: '12px', color: 'var(--cfx-ivory-muted)' }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
            <Clock size={13} style={{ color: 'var(--cfx-forest-accent)' }} />
            <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--cfx-ivory-300)' }}>
              {currentTime || 'SYNCHRONIZING UTC...'}
            </span>
          </span>
          <span>•</span>
          <span>
            Lead: <strong style={{ color: 'var(--cfx-ivory-200)' }}>{ACTIVE_CASE.leadInvestigator}</strong>
          </span>
          <span>•</span>
          <span style={{ color: 'var(--cfx-forest-accent)' }}>Chain-of-Custody Verified</span>
        </div>
      </div>

      {/* Right: Quick Action Buttons */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
        <button
          onClick={() => alert('[SIMULATED WORKBENCH] Launched Volatility 3 malfind scan against DC-CORP-01 memory dump.')}
          className="btn-copper"
          style={{ fontSize: '12px' }}
        >
          <Play size={14} />
          <span>Execute Volatility Scan</span>
        </button>

        <button
          onClick={() => alert('[SIMULATED AUDIT] Recalculated SHA-256 Merkle root across all 1,284 evidence chunks. No bit flips detected.')}
          className="btn-forest"
          style={{ fontSize: '12px' }}
        >
          <FileCheck size={14} />
          <span>Audit Hashes</span>
        </button>

        <button
          onClick={() => alert('[SIMULATED GRAPH] Correlating IOC indicators with MITRE ATT&CK Enterprise Matrix v15.')}
          className="btn-ghost"
          style={{ fontSize: '12px' }}
        >
          <Share2 size={14} style={{ color: 'var(--cfx-ivory-muted)' }} />
          <span>Map MITRE TTPs</span>
        </button>
      </div>
    </div>
  );
};
