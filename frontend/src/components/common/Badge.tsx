import type React from 'react';
import clsx from 'clsx';
import type { SeverityLevel, TlpLevel } from '../../types/forensics';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'severity' | 'tlp' | 'forest' | 'copper' | 'ivory' | 'charcoal' | 'outline';
  severity?: SeverityLevel;
  tlp?: TlpLevel;
  size?: 'sm' | 'md';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'charcoal',
  severity,
  tlp,
  size = 'md',
  className,
}) => {
  const getStyles = () => {
    if (tlp) {
      switch (tlp) {
        case 'TLP:RED':
          return {
            background: 'rgba(224, 82, 82, 0.2)',
            color: '#F87171',
            border: '1px solid rgba(224, 82, 82, 0.4)',
          };
        case 'TLP:AMBER':
          return {
            background: 'rgba(218, 133, 84, 0.2)',
            color: '#ECA376',
            border: '1px solid rgba(218, 133, 84, 0.4)',
          };
        case 'TLP:GREEN':
          return {
            background: 'rgba(52, 211, 153, 0.15)',
            color: '#34D399',
            border: '1px solid rgba(52, 211, 153, 0.35)',
          };
        default:
          return {
            background: 'rgba(239, 232, 223, 0.1)',
            color: '#FAF7F2',
            border: '1px solid rgba(239, 232, 223, 0.2)',
          };
      }
    }

    if (severity) {
      switch (severity) {
        case 'critical':
          return {
            background: 'rgba(220, 38, 38, 0.18)',
            color: '#FCA5A5',
            border: '1px solid rgba(220, 38, 38, 0.4)',
          };
        case 'high':
          return {
            background: 'rgba(218, 133, 84, 0.2)',
            color: '#DA8554',
            border: '1px solid rgba(218, 133, 84, 0.4)',
          };
        case 'medium':
          return {
            background: 'rgba(245, 158, 11, 0.18)',
            color: '#FCD34D',
            border: '1px solid rgba(245, 158, 11, 0.35)',
          };
        case 'low':
          return {
            background: 'rgba(52, 211, 153, 0.12)',
            color: '#6EE7B7',
            border: '1px solid rgba(52, 211, 153, 0.3)',
          };
      }
    }

    switch (variant) {
      case 'forest':
        return {
          background: 'rgba(20, 54, 40, 0.65)',
          color: '#34D399',
          border: '1px solid #1E4E3A',
        };
      case 'copper':
        return {
          background: 'rgba(163, 80, 39, 0.25)',
          color: '#ECA376',
          border: '1px solid rgba(218, 133, 84, 0.35)',
        };
      case 'ivory':
        return {
          background: 'rgba(250, 247, 242, 0.12)',
          color: '#FAF7F2',
          border: '1px solid rgba(250, 247, 242, 0.25)',
        };
      case 'outline':
        return {
          background: 'transparent',
          color: '#B7ABA0',
          border: '1px solid rgba(239, 232, 223, 0.15)',
        };
      default:
        return {
          background: 'rgba(24, 32, 36, 0.85)',
          color: '#D8CFBF',
          border: '1px solid rgba(239, 232, 223, 0.1)',
        };
    }
  };

  const style = getStyles();

  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '4px',
        padding: size === 'sm' ? '1px 7px' : '3px 9px',
        borderRadius: '4px',
        fontSize: size === 'sm' ? '11px' : '12px',
        fontWeight: 600,
        letterSpacing: '0.3px',
        fontFamily: 'var(--font-mono)',
        textTransform: 'uppercase',
        lineHeight: 1.3,
        ...style,
      }}
      className={clsx('cfx-badge', className)}
    >
      {children}
    </span>
  );
};
