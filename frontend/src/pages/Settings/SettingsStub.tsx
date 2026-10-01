import type React from 'react';
import { useState } from 'react';
import { Badge } from '../../components/common/Badge';
import { Settings, Sliders, HardDrive, KeyRound, Check } from 'lucide-react';

export const SettingsStub: React.FC = () => {
  const [telemetryRate, setTelemetryRate] = useState('1400');
  const [writeBlockerModel, setWriteBlockerModel] = useState('Tableau T8u Bridge');
  const [hashAlgorithm, setHashAlgorithm] = useState('SHA-256 + MD5 Dual');
  const [saveSuccess, setSaveSuccess] = useState(false);

  const handleSave = () => {
    setSaveSuccess(true);
    setTimeout(() => setSaveSuccess(false), 2500);
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '24px',
        maxWidth: '1000px',
        margin: '0 auto',
      }}
    >
      <div
        className="cfx-card"
        style={{
          padding: '28px',
          background: 'linear-gradient(180deg, var(--cfx-charcoal-card) 0%, rgba(20, 25, 28, 0.95) 100%)',
          border: '1px solid var(--cfx-charcoal-border)',
          borderLeft: '4px solid var(--cfx-copper-light)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '24px' }}>
          <div
            style={{
              width: '46px',
              height: '46px',
              borderRadius: '8px',
              backgroundColor: 'rgba(218, 133, 84, 0.12)',
              border: '1px solid rgba(218, 133, 84, 0.35)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--cfx-copper-light)',
            }}
          >
            <Settings size={22} />
          </div>

          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '2px' }}>
              <Badge variant="copper" size="sm">
                PLATFORM CONFIGURATION
              </Badge>
              <Badge variant="forest" size="sm">
                FORENSIC SANDBOX
              </Badge>
            </div>
            <h2 style={{ fontSize: '20px', fontWeight: 800, color: 'var(--cfx-ivory-100)', margin: 0 }}>
              CyberFusion X Environment Settings
            </h2>
            <p style={{ margin: 0, fontSize: '12px', color: 'var(--cfx-ivory-muted)' }}>
              Manage local forensic sandbox parameters, simulated hardware write-blocker, and hash engines
            </p>
          </div>
        </div>

        {/* Configuration Groups */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {/* Write Blocker Emulation */}
          <div
            style={{
              padding: '16px',
              backgroundColor: 'rgba(15, 19, 21, 0.7)',
              borderRadius: '6px',
              border: '1px solid var(--cfx-charcoal-border)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
              <HardDrive size={15} style={{ color: 'var(--cfx-forest-accent)' }} />
              <label style={{ fontSize: '13px', fontWeight: 700, color: 'var(--cfx-ivory-100)' }}>
                Hardware Write-Blocker Emulation Model
              </label>
            </div>
            <select
              value={writeBlockerModel}
              onChange={(e) => setWriteBlockerModel(e.target.value)}
              style={{
                width: '100%',
                maxWidth: '450px',
                padding: '8px 12px',
                backgroundColor: 'var(--cfx-charcoal-root)',
                border: '1px solid var(--cfx-charcoal-border)',
                borderRadius: '5px',
                color: 'var(--cfx-ivory-200)',
                fontSize: '12.5px',
                outline: 'none',
              }}
            >
              <option>Tableau T8u Forensic USB 3.0 Bridge</option>
              <option>WiebeTech Forensic UltraDock v5</option>
              <option>Atola TaskForce Direct Write-Protected Port</option>
            </select>
          </div>

          {/* Cryptographic Hash Engine */}
          <div
            style={{
              padding: '16px',
              backgroundColor: 'rgba(15, 19, 21, 0.7)',
              borderRadius: '6px',
              border: '1px solid var(--cfx-charcoal-border)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
              <KeyRound size={15} style={{ color: 'var(--cfx-copper-light)' }} />
              <label style={{ fontSize: '13px', fontWeight: 700, color: 'var(--cfx-ivory-100)' }}>
                Integrity Hash Verification Standard
              </label>
            </div>
            <select
              value={hashAlgorithm}
              onChange={(e) => setHashAlgorithm(e.target.value)}
              style={{
                width: '100%',
                maxWidth: '450px',
                padding: '8px 12px',
                backgroundColor: 'var(--cfx-charcoal-root)',
                border: '1px solid var(--cfx-charcoal-border)',
                borderRadius: '5px',
                color: 'var(--cfx-ivory-200)',
                fontSize: '12.5px',
                outline: 'none',
              }}
            >
              <option>SHA-256 + MD5 Dual Verification (NIST SP 800-86)</option>
              <option>SHA-512 + BLAKE3 High-Security Digest</option>
              <option>Standard FIPS 180-4 SHA-256 Only</option>
            </select>
          </div>

          {/* Simulated Ingestion Rate */}
          <div
            style={{
              padding: '16px',
              backgroundColor: 'rgba(15, 19, 21, 0.7)',
              borderRadius: '6px',
              border: '1px solid var(--cfx-charcoal-border)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
              <Sliders size={15} style={{ color: 'var(--cfx-ivory-300)' }} />
              <label style={{ fontSize: '13px', fontWeight: 700, color: 'var(--cfx-ivory-100)' }}>
                Simulated Ingestion Throughput: {telemetryRate} events/sec
              </label>
            </div>
            <input
              type="range"
              min="200"
              max="5000"
              step="100"
              value={telemetryRate}
              onChange={(e) => setTelemetryRate(e.target.value)}
              style={{
                width: '100%',
                maxWidth: '450px',
                accentColor: 'var(--cfx-copper-light)',
              }}
            />
          </div>
        </div>

        {/* Action Button */}
        <div style={{ marginTop: '24px', display: 'flex', alignItems: 'center', gap: '12px' }}>
          <button onClick={handleSave} className="btn-copper">
            {saveSuccess ? (
              <>
                <Check size={14} />
                <span>Preferences Saved</span>
              </>
            ) : (
              <span>Save Configuration</span>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
export default SettingsStub;
