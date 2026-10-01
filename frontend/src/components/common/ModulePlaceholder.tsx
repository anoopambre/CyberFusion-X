import type React from 'react';
import { Badge } from './Badge';
import { ArrowLeft, CheckCircle2, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ModulePlaceholderProps {
  moduleName: string;
  icon: React.ReactNode;
  tagline: string;
  description: React.ReactNode;
  phase: string;
  upcomingFeatures: (string | React.ReactNode)[];
}

/**
 * Safely renders forensic terms (e.g. $MFT, $STANDARD_INFORMATION, $FILE_NAME)
 * literally inside code elements with the tex2jax_ignore class so that math renderers
 * (such as MathJax / KaTeX) do not interpret them as mathematical expressions.
 */
export const renderForensicTerm = (content: React.ReactNode): React.ReactNode => {
  if (typeof content !== 'string') {
    return content;
  }

  const regex = /(\$[A-Z0-9_]+)/g;
  if (!regex.test(content)) {
    return content;
  }

  const parts = content.split(regex);
  return (
    <span className="tex2jax_ignore">
      {parts.map((part, idx) => {
        if (part.startsWith('$') && part.length > 1) {
          return (
            <code
              key={idx}
              className="tex2jax_ignore font-mono"
              style={{
                backgroundColor: 'rgba(218, 133, 84, 0.12)',
                color: 'var(--cfx-copper-light)',
                padding: '2px 6px',
                borderRadius: '4px',
                border: '1px solid rgba(218, 133, 84, 0.25)',
                fontSize: '0.9em',
                letterSpacing: '0.3px',
                whiteSpace: 'nowrap',
              }}
            >
              {part}
            </code>
          );
        }
        return part;
      })}
    </span>
  );
};

export const ModulePlaceholder: React.FC<ModulePlaceholderProps> = ({
  moduleName,
  icon,
  tagline,
  description,
  phase,
  upcomingFeatures,
}) => {
  return (
    <div
      className="tex2jax_ignore"
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '24px',
        maxWidth: '1000px',
        width: '100%',
        margin: '0 auto',
        paddingBottom: '24px',
        boxSizing: 'border-box',
      }}
    >
      {/* Return button */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <Link to="/" className="btn-ghost" style={{ fontSize: '12px', padding: '6px 12px' }}>
          <ArrowLeft size={14} />
          <span>Return to Command Centre</span>
        </Link>
      </div>

      {/* Main Feature Container */}
      <div
        className="cfx-card tex2jax_ignore"
        style={{
          padding: 'clamp(20px, 4vw, 36px)',
          background: 'linear-gradient(180deg, var(--cfx-charcoal-card) 0%, rgba(20, 25, 28, 0.95) 100%)',
          border: '1px solid var(--cfx-charcoal-border)',
          borderLeft: '4px solid var(--cfx-copper-light)',
          width: '100%',
          boxSizing: 'border-box',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px', flexWrap: 'wrap' }}>
          <div
            style={{
              width: '54px',
              height: '54px',
              borderRadius: '10px',
              backgroundColor: 'rgba(218, 133, 84, 0.12)',
              border: '1px solid rgba(218, 133, 84, 0.35)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--cfx-copper-light)',
              flexShrink: 0,
            }}
          >
            {icon}
          </div>

          <div style={{ minWidth: 0, flex: 1 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '4px', flexWrap: 'wrap' }}>
              <Badge variant="copper" size="sm">
                MODULE PREVIEW
              </Badge>
              <Badge variant="forest" size="sm">
                {phase}
              </Badge>
            </div>
            <h2
              style={{
                fontSize: '24px',
                fontWeight: 800,
                color: 'var(--cfx-ivory-100)',
                margin: 0,
                wordBreak: 'break-word',
              }}
            >
              {moduleName}
            </h2>
            <p style={{ margin: '4px 0 0 0', fontSize: '13px', color: 'var(--cfx-ivory-muted)', wordBreak: 'break-word' }}>
              {tagline}
            </p>
          </div>
        </div>

        <p
          className="tex2jax_ignore"
          style={{
            fontSize: '14px',
            color: 'var(--cfx-ivory-300)',
            lineHeight: 1.6,
            marginBottom: '28px',
            maxWidth: '780px',
            wordBreak: 'break-word',
            overflowWrap: 'break-word',
          }}
        >
          {renderForensicTerm(description)}
        </p>

        {/* Planned Forensic Capabilities */}
        <div
          className="tex2jax_ignore"
          style={{
            padding: 'clamp(14px, 3vw, 20px)',
            backgroundColor: 'rgba(15, 19, 21, 0.7)',
            borderRadius: '6px',
            border: '1px solid var(--cfx-charcoal-border)',
            marginBottom: '28px',
            width: '100%',
            boxSizing: 'border-box',
          }}
        >
          <div
            style={{
              fontSize: '11px',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.6px',
              color: 'var(--cfx-copper-light)',
              fontFamily: 'var(--font-mono)',
              marginBottom: '12px',
            }}
          >
            PLANNED FORENSIC CAPABILITIES
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))',
              gap: '12px',
            }}
          >
            {upcomingFeatures.map((feat, i) => (
              <div
                key={i}
                className="tex2jax_ignore"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontSize: '13px',
                  color: 'var(--cfx-ivory-200)',
                  wordBreak: 'break-word',
                  overflowWrap: 'break-word',
                }}
              >
                <CheckCircle2 size={15} style={{ color: 'var(--cfx-forest-accent)', flexShrink: 0 }} />
                <span>{renderForensicTerm(feat)}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Simulated Sandbox Note */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            fontSize: '12px',
            color: 'var(--cfx-ivory-muted)',
            fontFamily: 'var(--font-mono)',
            flexWrap: 'wrap',
          }}
        >
          <Shield size={14} style={{ color: 'var(--cfx-forest-accent)', flexShrink: 0 }} />
          <span>CYBERFUSION X SHELL INITIALIZED • TARGET MODULE STUB READY FOR NEXT IMPLEMENTATION STAGE</span>
        </div>
      </div>
    </div>
  );
};
