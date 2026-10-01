import type React from 'react';
import { EVIDENCE_PREVIEWS } from '../../../data/mockForensicData';
import { Badge } from '../../../components/common/Badge';
import { Archive, ExternalLink, FileCode, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export const EvidencePreviewTable: React.FC = () => {
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
          gap: '10px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Archive size={18} style={{ color: 'var(--cfx-forest-accent)' }} />
          <div>
            <h3
              style={{
                fontSize: '14px',
                fontWeight: 700,
                color: 'var(--cfx-ivory-100)',
                margin: 0,
              }}
            >
              Priority Custody Artifacts & Image Captures
            </h3>
            <p style={{ margin: 0, fontSize: '11px', color: 'var(--cfx-ivory-muted)' }}>
              Top physical bit-stream disk images and volatile memory captures under active analysis
            </p>
          </div>
        </div>

        <Link
          to="/evidence-vault"
          className="btn-ghost"
          style={{ fontSize: '11.5px', padding: '5px 10px' }}
        >
          <span>Open Full Vault</span>
          <ExternalLink size={12} />
        </Link>
      </div>

      {/* Table Container */}
      <div style={{ overflowX: 'auto' }}>
        <table
          style={{
            width: '100%',
            borderCollapse: 'collapse',
            fontSize: '12px',
            textAlign: 'left',
          }}
        >
          <thead>
            <tr
              style={{
                borderBottom: '1px solid var(--cfx-charcoal-border)',
                color: 'var(--cfx-ivory-muted)',
                fontSize: '11px',
                fontFamily: 'var(--font-mono)',
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
              }}
            >
              <th style={{ padding: '10px 12px' }}>Artifact ID</th>
              <th style={{ padding: '10px 12px' }}>Artifact Name</th>
              <th style={{ padding: '10px 12px' }}>Type</th>
              <th style={{ padding: '10px 12px' }}>Source Host</th>
              <th style={{ padding: '10px 12px' }}>Size</th>
              <th style={{ padding: '10px 12px' }}>SHA-256 Hash</th>
              <th style={{ padding: '10px 12px' }}>Integrity</th>
              <th style={{ padding: '10px 12px' }}>Status</th>
            </tr>
          </thead>
          <tbody>
            {EVIDENCE_PREVIEWS.map((item) => (
              <tr
                key={item.id}
                style={{
                  borderBottom: '1px solid rgba(239, 232, 223, 0.04)',
                  transition: 'background 0.15s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'rgba(239, 232, 223, 0.03)')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
              >
                <td style={{ padding: '12px', fontFamily: 'var(--font-mono)', fontWeight: 700, color: 'var(--cfx-copper-light)' }}>
                  {item.id}
                </td>
                <td style={{ padding: '12px', color: 'var(--cfx-ivory-100)', fontWeight: 600 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <FileCode size={14} style={{ color: 'var(--cfx-ivory-muted)' }} />
                    <span>{item.name}</span>
                  </div>
                </td>
                <td style={{ padding: '12px' }}>
                  <Badge variant="outline" size="sm">
                    {item.type}
                  </Badge>
                </td>
                <td style={{ padding: '12px', color: 'var(--cfx-ivory-300)', fontFamily: 'var(--font-mono)' }}>
                  {item.sourceHost}
                </td>
                <td style={{ padding: '12px', color: 'var(--cfx-ivory-200)', fontFamily: 'var(--font-mono)' }}>
                  {item.size}
                </td>
                <td style={{ padding: '12px', fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--cfx-ivory-muted)' }}>
                  {item.hashSha256.substring(0, 16)}...
                </td>
                <td style={{ padding: '12px' }}>
                  <span
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '4px',
                      color: 'var(--cfx-forest-accent)',
                      fontSize: '11px',
                      fontFamily: 'var(--font-mono)',
                    }}
                  >
                    <CheckCircle2 size={12} />
                    Verified
                  </span>
                </td>
                <td style={{ padding: '12px' }}>
                  <Badge
                    variant={
                      item.status === 'analyzed'
                        ? 'forest'
                        : item.status === 'scanning'
                        ? 'copper'
                        : 'charcoal'
                    }
                    size="sm"
                  >
                    {item.status}
                  </Badge>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
