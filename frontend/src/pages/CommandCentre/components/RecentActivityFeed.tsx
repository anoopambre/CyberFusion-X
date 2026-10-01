import type React from 'react';
import { useState } from 'react';
import { RECENT_ACTIVITIES } from '../../../data/mockForensicData';
import { Badge } from '../../../components/common/Badge';
import {
  Clock,
  Filter,
  Copy,
  Check,
  Terminal,
} from 'lucide-react';

export const RecentActivityFeed: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [copiedHash, setCopiedHash] = useState<string | null>(null);

  const filteredActivities =
    selectedFilter === 'all'
      ? RECENT_ACTIVITIES
      : RECENT_ACTIVITIES.filter((act) => act.category === selectedFilter);

  const handleCopyHash = (hash: string) => {
    navigator.clipboard?.writeText(hash);
    setCopiedHash(hash);
    setTimeout(() => setCopiedHash(null), 2000);
  };

  return (
    <div
      className="cfx-card"
      style={{
        padding: '20px',
        background: 'linear-gradient(180deg, var(--cfx-charcoal-card) 0%, rgba(20, 25, 28, 0.95) 100%)',
        display: 'flex',
        flexDirection: 'column',
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
          gap: '12px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Clock size={18} style={{ color: 'var(--cfx-copper-light)' }} />
          <div>
            <h3
              style={{
                fontSize: '14px',
                fontWeight: 700,
                color: 'var(--cfx-ivory-100)',
                margin: 0,
              }}
            >
              Forensic Ingestion Chronology & Activity Log
            </h3>
            <p style={{ margin: 0, fontSize: '11px', color: 'var(--cfx-ivory-muted)' }}>
              Real-time audit log of forensic discoveries, memory anomalies, and custody transfers
            </p>
          </div>
        </div>

        {/* Filter Pills */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flexWrap: 'wrap' }}>
          <span style={{ fontSize: '11px', color: 'var(--cfx-ivory-muted)', marginRight: '4px' }}>
            <Filter size={12} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '3px' }} />
            Filter:
          </span>
          {['all', 'memory', 'network', 'yara', 'custody', 'disk'].map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedFilter(cat)}
              style={{
                padding: '3px 8px',
                fontSize: '11px',
                borderRadius: '4px',
                backgroundColor:
                  selectedFilter === cat ? 'rgba(218, 133, 84, 0.2)' : 'rgba(239, 232, 223, 0.04)',
                color: selectedFilter === cat ? 'var(--cfx-copper-light)' : 'var(--cfx-ivory-muted)',
                border:
                  selectedFilter === cat
                    ? '1px solid rgba(218, 133, 84, 0.4)'
                    : '1px solid var(--cfx-charcoal-border)',
                fontFamily: 'var(--font-mono)',
                textTransform: 'uppercase',
                fontWeight: 600,
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Feed List */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {filteredActivities.map((item) => (
          <div
            key={item.id}
            style={{
              padding: '14px 16px',
              borderRadius: '6px',
              backgroundColor: 'rgba(20, 25, 28, 0.65)',
              border: '1px solid var(--cfx-charcoal-border)',
              borderLeft:
                item.severity === 'critical'
                  ? '3px solid var(--cfx-alert-crimson)'
                  : item.severity === 'high'
                  ? '3px solid var(--cfx-copper-light)'
                  : '3px solid var(--cfx-forest-accent)',
              display: 'flex',
              flexDirection: 'column',
              gap: '6px',
              transition: 'background 0.2s ease',
            }}
          >
            {/* Top row: Badges, Target Host, and Timestamp */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '8px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Badge severity={item.severity} size="sm">
                  {item.severity}
                </Badge>
                <Badge variant="outline" size="sm">
                  {item.category}
                </Badge>
                <span
                  style={{
                    fontSize: '12px',
                    fontWeight: 700,
                    color: 'var(--cfx-ivory-200)',
                    fontFamily: 'var(--font-mono)',
                  }}
                >
                  {item.host}
                </span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '11px', color: 'var(--cfx-ivory-muted)' }}>
                <span>{item.investigator}</span>
                <span>•</span>
                <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--cfx-copper-light)' }}>
                  {item.timeAgo}
                </span>
              </div>
            </div>

            {/* Summary */}
            <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--cfx-ivory-100)' }}>
              {item.summary}
            </div>

            {/* Technical Detail */}
            <div
              style={{
                fontSize: '12px',
                color: 'var(--cfx-ivory-400)',
                lineHeight: 1.5,
                backgroundColor: 'rgba(15, 19, 21, 0.7)',
                padding: '8px 12px',
                borderRadius: '4px',
                border: '1px solid rgba(239, 232, 223, 0.05)',
                fontFamily: 'var(--font-mono)',
              }}
            >
              {item.technicalDetail}
            </div>

            {/* Bottom Row: Artifact Hash */}
            {item.artifactHash && (
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginTop: '2px',
                  fontSize: '11px',
                  fontFamily: 'var(--font-mono)',
                  color: 'var(--cfx-ivory-muted)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Terminal size={12} style={{ color: 'var(--cfx-forest-accent)' }} />
                  <span>SHA-1/256: </span>
                  <span style={{ color: 'var(--cfx-ivory-300)' }}>
                    {item.artifactHash}
                  </span>
                </div>

                <button
                  onClick={() => handleCopyHash(item.artifactHash!)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                    color: copiedHash === item.artifactHash ? 'var(--cfx-forest-accent)' : 'var(--cfx-ivory-muted)',
                    fontSize: '10.5px',
                    padding: '2px 6px',
                    borderRadius: '3px',
                    border: '1px solid rgba(239, 232, 223, 0.1)',
                  }}
                  title="Copy artifact hash to clipboard"
                >
                  {copiedHash === item.artifactHash ? (
                    <>
                      <Check size={11} />
                      <span>Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy size={11} />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
