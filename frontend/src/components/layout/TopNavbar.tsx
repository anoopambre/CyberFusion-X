import type React from 'react';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import {
  Search,
  Download,
  Terminal,
  ChevronDown,
  Layers,
  UserCheck,
} from 'lucide-react';
import { ACTIVE_CASE, ALTERNATIVE_CASES } from '../../data/mockForensicData';

export const TopNavbar: React.FC = () => {
  const location = useLocation();
  const [selectedCase, setSelectedCase] = useState(ACTIVE_CASE.id);
  const [isCaseDropdownOpen, setIsCaseDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Map route to display name
  const getRouteTitle = () => {
    switch (location.pathname) {
      case '/':
        return 'Command Centre';
      case '/evidence-vault':
        return 'Evidence Vault';
      case '/incident-timeline':
        return 'Incident Timeline';
      case '/entity-graph':
        return 'Entity Graph';
      case '/workbench':
        return 'Investigation Workbench';
      case '/report-studio':
        return 'Report Studio';
      case '/settings':
        return 'Settings';
      default:
        return 'Investigation Console';
    }
  };

  const handleExportBrief = () => {
    alert(
      `[SIMULATED EXPORT] Generated forensic executive brief for case ${selectedCase}.\nSHA-256 verification hash: 9f86d081884c7d659a2feaa0c55ad015a3bf4f1b`
    );
  };

  const handleQuickIngest = () => {
    alert(
      `[SIMULATED INGEST] Hardware write-blocker Tableau T8u acknowledged virtual disk image ingestion queue.`
    );
  };

  return (
    <header
      style={{
        height: 'var(--topbar-height)',
        backgroundColor: 'var(--cfx-charcoal-root)',
        borderBottom: '1px solid var(--cfx-charcoal-border)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 24px',
        gap: '20px',
        zIndex: 20,
      }}
    >
      {/* Left: Breadcrumbs & Module Title */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '14px', minWidth: 0 }}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: '11px',
              fontFamily: 'var(--font-mono)',
              color: 'var(--cfx-ivory-muted)',
              textTransform: 'uppercase',
              letterSpacing: '0.5px',
            }}
          >
            <span>CFX-LABS</span>
            <span>/</span>
            <span style={{ color: 'var(--cfx-copper-light)' }}>{selectedCase}</span>
            <span>/</span>
            <span style={{ color: 'var(--cfx-ivory-200)' }}>{getRouteTitle()}</span>
          </div>
          <h1
            style={{
              fontSize: '17px',
              fontWeight: 700,
              color: 'var(--cfx-ivory-100)',
              letterSpacing: '-0.2px',
              margin: '2px 0 0 0',
              lineHeight: 1.2,
            }}
          >
            {getRouteTitle()}
          </h1>
        </div>

        {/* Case Switcher Dropdown */}
        <div style={{ position: 'relative' }}>
          <button
            onClick={() => setIsCaseDropdownOpen(!isCaseDropdownOpen)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              background: 'rgba(239, 232, 223, 0.05)',
              border: '1px solid var(--cfx-charcoal-border)',
              borderRadius: '6px',
              padding: '5px 10px',
              fontSize: '12px',
              color: 'var(--cfx-ivory-300)',
              fontFamily: 'var(--font-mono)',
            }}
            title="Switch Target Case"
          >
            <Layers size={13} style={{ color: 'var(--cfx-copper-light)' }} />
            <span>Case Scope</span>
            <ChevronDown size={13} />
          </button>

          {isCaseDropdownOpen && (
            <div
              style={{
                position: 'absolute',
                top: '100%',
                left: 0,
                marginTop: '6px',
                width: '280px',
                backgroundColor: 'var(--cfx-charcoal-card)',
                border: '1px solid var(--cfx-charcoal-border-light)',
                borderRadius: '8px',
                boxShadow: 'var(--cfx-shadow-elevated)',
                padding: '6px',
                zIndex: 50,
              }}
            >
              <div
                style={{
                  fontSize: '10px',
                  fontWeight: 700,
                  color: 'var(--cfx-ivory-muted)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.6px',
                  padding: '6px 8px',
                }}
              >
                SELECT INCIDENT DOSSIER
              </div>
              {ALTERNATIVE_CASES.map((c) => (
                <button
                  key={c.id}
                  onClick={() => {
                    setSelectedCase(c.id);
                    setIsCaseDropdownOpen(false);
                  }}
                  style={{
                    width: '100%',
                    textAlign: 'left',
                    padding: '8px 10px',
                    borderRadius: '5px',
                    backgroundColor:
                      selectedCase === c.id ? 'rgba(218, 133, 84, 0.15)' : 'transparent',
                    border:
                      selectedCase === c.id
                        ? '1px solid rgba(218, 133, 84, 0.3)'
                        : '1px solid transparent',
                    color: selectedCase === c.id ? 'var(--cfx-ivory-100)' : 'var(--cfx-ivory-400)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '2px',
                    marginBottom: '4px',
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontWeight: 700, fontSize: '12px', fontFamily: 'var(--font-mono)' }}>
                      {c.id}
                    </span>
                    <span
                      style={{
                        fontSize: '10px',
                        textTransform: 'uppercase',
                        color: c.severity === 'critical' ? 'var(--cfx-alert-crimson)' : 'var(--cfx-copper-light)',
                        fontWeight: 600,
                      }}
                    >
                      {c.severity}
                    </span>
                  </div>
                  <div style={{ fontSize: '11px', color: 'var(--cfx-ivory-muted)' }}>
                    {c.codeName} • {c.endpoints} endpoints
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Centre: Search Bar */}
      <div
        style={{
          flex: '1',
          maxWidth: '460px',
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Search
          size={16}
          style={{
            position: 'absolute',
            left: '12px',
            color: 'var(--cfx-ivory-muted)',
            pointerEvents: 'none',
          }}
        />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search IOC hashes, artifact IDs, hostnames, memory addresses..."
          style={{
            width: '100%',
            height: '38px',
            backgroundColor: 'rgba(20, 25, 28, 0.75)',
            border: '1px solid var(--cfx-charcoal-border)',
            borderRadius: '6px',
            padding: '0 42px 0 38px',
            color: 'var(--cfx-ivory-200)',
            fontSize: '12.5px',
            outline: 'none',
            transition: 'all 0.2s ease',
          }}
          onFocus={(e) => {
            e.currentTarget.style.borderColor = 'rgba(218, 133, 84, 0.5)';
            e.currentTarget.style.boxShadow = '0 0 10px rgba(218, 133, 84, 0.15)';
          }}
          onBlur={(e) => {
            e.currentTarget.style.borderColor = 'var(--cfx-charcoal-border)';
            e.currentTarget.style.boxShadow = 'none';
          }}
        />
        <kbd
          style={{
            position: 'absolute',
            right: '10px',
            fontSize: '10px',
            fontWeight: 700,
            padding: '2px 5px',
            borderRadius: '4px',
            backgroundColor: 'rgba(239, 232, 223, 0.08)',
            border: '1px solid rgba(239, 232, 223, 0.15)',
            color: 'var(--cfx-ivory-muted)',
            fontFamily: 'var(--font-mono)',
          }}
        >
          Ctrl+K
        </kbd>
      </div>

      {/* Right: Quick Ingestion, Export, & Investigator Clearance Pill */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <button
          onClick={handleQuickIngest}
          className="btn-ghost"
          style={{ fontSize: '12px', padding: '6px 12px' }}
          title="Emulate new evidence ingestion via write-blocker"
        >
          <Terminal size={14} style={{ color: 'var(--cfx-copper-light)' }} />
          <span>Ingest Feed</span>
        </button>

        <button
          onClick={handleExportBrief}
          className="btn-copper"
          style={{ fontSize: '12px', padding: '6px 12px' }}
          title="Export forensic brief and cryptographic manifest"
        >
          <Download size={14} />
          <span>Export Dossier</span>
        </button>

        {/* Lead Investigator Identity Pill */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            padding: '4px 12px',
            borderRadius: '6px',
            backgroundColor: 'rgba(20, 25, 28, 0.9)',
            border: '1px solid var(--cfx-charcoal-border)',
          }}
        >
          <div
            style={{
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              backgroundColor: 'var(--cfx-forest-base)',
              border: '1px solid var(--cfx-forest-border)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--cfx-forest-accent)',
            }}
          >
            <UserCheck size={16} />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span
              style={{
                fontSize: '12px',
                fontWeight: 700,
                color: 'var(--cfx-ivory-100)',
                lineHeight: 1.1,
              }}
            >
              Inv. Sarah Vance
            </span>
            <span
              style={{
                fontSize: '9.5px',
                color: 'var(--cfx-forest-accent)',
                fontFamily: 'var(--font-mono)',
                fontWeight: 600,
                letterSpacing: '0.4px',
              }}
            >
              LEVEL 4 FORENSIC CLEARANCE
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};
