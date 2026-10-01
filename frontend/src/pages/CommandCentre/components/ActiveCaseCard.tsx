import type React from 'react';
import { ACTIVE_CASE } from '../../../data/mockForensicData';
import { Badge } from '../../../components/common/Badge';
import {
  ShieldAlert,
  Server,
  Cloud,
  Network,
  Fingerprint,
  CheckCircle,
  AlertOctagon,
} from 'lucide-react';

export const ActiveCaseCard: React.FC = () => {
  return (
    <div
      className="cfx-card"
      style={{
        padding: '22px 24px',
        marginBottom: '24px',
        background: 'linear-gradient(180deg, var(--cfx-charcoal-card) 0%, rgba(20, 25, 28, 0.95) 100%)',
        border: '1px solid var(--cfx-charcoal-border)',
      }}
    >
      {/* Top Header Row */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '12px',
          paddingBottom: '16px',
          borderBottom: '1px solid var(--cfx-charcoal-border)',
          marginBottom: '18px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div
            style={{
              width: '38px',
              height: '38px',
              borderRadius: '6px',
              backgroundColor: 'rgba(218, 133, 84, 0.12)',
              border: '1px solid rgba(218, 133, 84, 0.35)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--cfx-copper-light)',
            }}
          >
            <ShieldAlert size={20} />
          </div>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span
                style={{
                  fontSize: '11px',
                  fontWeight: 700,
                  fontFamily: 'var(--font-mono)',
                  color: 'var(--cfx-ivory-muted)',
                  textTransform: 'uppercase',
                }}
              >
                INCIDENT DOSSIER
              </span>
              <span style={{ color: 'var(--cfx-ivory-muted)' }}>•</span>
              <span
                style={{
                  fontSize: '11px',
                  fontFamily: 'var(--font-mono)',
                  color: 'var(--cfx-copper-light)',
                  fontWeight: 600,
                }}
              >
                {ACTIVE_CASE.id}
              </span>
            </div>
            <h3
              style={{
                fontSize: '16px',
                fontWeight: 700,
                color: 'var(--cfx-ivory-100)',
                margin: '2px 0 0 0',
              }}
            >
              {ACTIVE_CASE.codeName}
            </h3>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Badge variant="copper">{ACTIVE_CASE.threatActor}</Badge>
          <Badge variant="forest">WRITE-BLOCK EMULATION ON</Badge>
          <Badge tlp={ACTIVE_CASE.tlp}>{ACTIVE_CASE.tlp}</Badge>
        </div>
      </div>

      {/* Grid of Key Investigation Details */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '18px',
          marginBottom: '20px',
        }}
      >
        {/* Threat Actor & Profile */}
        <div
          style={{
            padding: '14px',
            backgroundColor: 'rgba(20, 25, 28, 0.6)',
            borderRadius: '6px',
            border: '1px solid var(--cfx-charcoal-border)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '6px' }}>
            <AlertOctagon size={14} style={{ color: 'var(--cfx-copper-light)' }} />
            <span style={{ fontSize: '11px', fontWeight: 600, color: 'var(--cfx-ivory-muted)', textTransform: 'uppercase' }}>
              Threat Actor Profile
            </span>
          </div>
          <div style={{ fontSize: '14px', fontWeight: 700, color: 'var(--cfx-ivory-100)' }}>
            {ACTIVE_CASE.threatActor}
          </div>
          <div style={{ fontSize: '11px', color: 'var(--cfx-copper-light)', fontFamily: 'var(--font-mono)', marginTop: '2px' }}>
            {ACTIVE_CASE.threatActorAlias}
          </div>
        </div>

        {/* Target Scope */}
        <div
          style={{
            padding: '14px',
            backgroundColor: 'rgba(20, 25, 28, 0.6)',
            borderRadius: '6px',
            border: '1px solid var(--cfx-charcoal-border)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '6px' }}>
            <Server size={14} style={{ color: 'var(--cfx-forest-accent)' }} />
            <span style={{ fontSize: '11px', fontWeight: 600, color: 'var(--cfx-ivory-muted)', textTransform: 'uppercase' }}>
              Forensic Ingestion Scope
            </span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginTop: '4px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
              <Server size={13} style={{ color: 'var(--cfx-ivory-400)' }} />
              <span style={{ fontSize: '12px', color: 'var(--cfx-ivory-200)', fontFamily: 'var(--font-mono)' }}>
                {ACTIVE_CASE.scopeEndpoints} Hosts
              </span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
              <Network size={13} style={{ color: 'var(--cfx-ivory-400)' }} />
              <span style={{ fontSize: '12px', color: 'var(--cfx-ivory-200)', fontFamily: 'var(--font-mono)' }}>
                {ACTIVE_CASE.scopeDomainControllers} DCs
              </span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
              <Cloud size={13} style={{ color: 'var(--cfx-ivory-400)' }} />
              <span style={{ fontSize: '12px', color: 'var(--cfx-ivory-200)', fontFamily: 'var(--font-mono)' }}>
                {ACTIVE_CASE.scopeCloudBuckets} S3 Buckets
              </span>
            </div>
          </div>
        </div>

        {/* Chain of Custody Ledger */}
        <div
          style={{
            padding: '14px',
            backgroundColor: 'rgba(20, 25, 28, 0.6)',
            borderRadius: '6px',
            border: '1px solid var(--cfx-charcoal-border)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '6px' }}>
            <Fingerprint size={14} style={{ color: 'var(--cfx-forest-accent)' }} />
            <span style={{ fontSize: '11px', fontWeight: 600, color: 'var(--cfx-ivory-muted)', textTransform: 'uppercase' }}>
              Chain of Custody Ledger
            </span>
          </div>
          <div
            style={{
              fontSize: '12px',
              fontFamily: 'var(--font-mono)',
              color: 'var(--cfx-ivory-200)',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}
          >
            {ACTIVE_CASE.chainOfCustodyLedgerId}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginTop: '4px' }}>
            <CheckCircle size={12} style={{ color: 'var(--cfx-forest-accent)' }} />
            <span style={{ fontSize: '11px', color: 'var(--cfx-forest-accent)', fontWeight: 600 }}>
              Hardware Write-Blocker Verified
            </span>
          </div>
        </div>
      </div>

      {/* Progress Bar & Phase Status */}
      <div
        style={{
          padding: '14px',
          backgroundColor: 'rgba(15, 19, 21, 0.85)',
          borderRadius: '6px',
          border: '1px solid var(--cfx-charcoal-border)',
          marginBottom: '16px',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ fontSize: '12px', fontWeight: 700, color: 'var(--cfx-ivory-100)' }}>
              Current Phase:
            </span>
            <span style={{ fontSize: '12px', color: 'var(--cfx-copper-light)', fontFamily: 'var(--font-mono)' }}>
              {ACTIVE_CASE.currentPhase}
            </span>
          </div>
          <span style={{ fontSize: '12px', fontWeight: 700, color: 'var(--cfx-ivory-200)', fontFamily: 'var(--font-mono)' }}>
            {ACTIVE_CASE.phaseProgress}% Complete
          </span>
        </div>

        {/* Progress Track */}
        <div
          style={{
            width: '100%',
            height: '8px',
            backgroundColor: 'rgba(239, 232, 223, 0.08)',
            borderRadius: '4px',
            overflow: 'hidden',
            position: 'relative',
          }}
        >
          <div
            style={{
              width: `${ACTIVE_CASE.phaseProgress}%`,
              height: '100%',
              background: 'linear-gradient(90deg, var(--cfx-forest-base) 0%, var(--cfx-copper-mid) 100%)',
              borderRadius: '4px',
              transition: 'width 0.5s ease',
            }}
          />
        </div>
      </div>

      {/* Narrative Hypothesis */}
      <div
        style={{
          fontSize: '12.5px',
          color: 'var(--cfx-ivory-400)',
          lineHeight: 1.6,
          backgroundColor: 'rgba(239, 232, 223, 0.02)',
          padding: '12px 16px',
          borderRadius: '6px',
          borderLeft: '3px solid var(--cfx-forest-accent)',
        }}
      >
        <strong style={{ color: 'var(--cfx-ivory-200)' }}>Forensic Summary: </strong>
        {ACTIVE_CASE.summary}
        <div style={{ marginTop: '6px', color: 'var(--cfx-ivory-muted)', fontSize: '11.5px' }}>
          <strong>Hypothesized Initial Vector: </strong> {ACTIVE_CASE.suspectedAttackVector}
        </div>
      </div>
    </div>
  );
};
