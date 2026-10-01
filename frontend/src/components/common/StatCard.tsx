import type React from 'react';
import clsx from 'clsx';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';

interface StatCardProps {
  label: string;
  value: string;
  unit?: string;
  changeText: string;
  isPositiveTrend?: boolean;
  detail: string;
  accent?: 'forest' | 'copper' | 'ivory' | 'charcoal';
  icon: React.ReactNode;
}

export const StatCard: React.FC<StatCardProps> = ({
  label,
  value,
  unit,
  changeText,
  isPositiveTrend = true,
  detail,
  accent = 'forest',
  icon,
}) => {
  const getAccentDetails = () => {
    switch (accent) {
      case 'copper':
        return {
          topBorder: 'var(--cfx-copper-mid)',
          iconBg: 'rgba(218, 133, 84, 0.12)',
          iconColor: 'var(--cfx-copper-light)',
          iconBorder: '1px solid rgba(218, 133, 84, 0.3)',
          badgeColor: '#ECA376',
        };
      case 'forest':
        return {
          topBorder: 'var(--cfx-forest-accent)',
          iconBg: 'rgba(52, 211, 153, 0.12)',
          iconColor: 'var(--cfx-forest-accent)',
          iconBorder: '1px solid rgba(52, 211, 153, 0.3)',
          badgeColor: '#6EE7B7',
        };
      case 'ivory':
        return {
          topBorder: 'var(--cfx-ivory-400)',
          iconBg: 'rgba(250, 247, 242, 0.1)',
          iconColor: 'var(--cfx-ivory-200)',
          iconBorder: '1px solid rgba(250, 247, 242, 0.25)',
          badgeColor: '#FAF7F2',
        };
      default:
        return {
          topBorder: 'var(--cfx-charcoal-border-light)',
          iconBg: 'rgba(239, 232, 223, 0.05)',
          iconColor: 'var(--cfx-ivory-400)',
          iconBorder: '1px solid var(--cfx-charcoal-border)',
          badgeColor: '#D8CFBF',
        };
    }
  };

  const accentStyles = getAccentDetails();

  return (
    <div
      className={clsx('cfx-card')}
      style={{
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        borderTop: `2px solid ${accentStyles.topBorder}`,
        background: 'linear-gradient(180deg, var(--cfx-charcoal-card) 0%, rgba(20, 25, 28, 0.8) 100%)',
      }}
    >
      <div>
        {/* Top Header Row with Icon and Label */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
          <span
            style={{
              fontSize: '12px',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.6px',
              color: 'var(--cfx-ivory-muted)',
            }}
          >
            {label}
          </span>
          <div
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '6px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: accentStyles.iconBg,
              color: accentStyles.iconColor,
              border: accentStyles.iconBorder,
            }}
          >
            {icon}
          </div>
        </div>

        {/* Value and Unit */}
        <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', marginBottom: '8px' }}>
          <span
            style={{
              fontSize: '30px',
              fontWeight: 700,
              letterSpacing: '-0.5px',
              color: 'var(--cfx-ivory-100)',
              fontFamily: 'var(--font-mono)',
              lineHeight: 1.1,
            }}
          >
            {value}
          </span>
          {unit && (
            <span
              style={{
                fontSize: '12px',
                color: 'var(--cfx-ivory-muted)',
                fontFamily: 'var(--font-mono)',
              }}
            >
              {unit}
            </span>
          )}
        </div>
      </div>

      {/* Footer Trend & Detail */}
      <div style={{ marginTop: '14px', paddingTop: '12px', borderTop: '1px solid var(--cfx-charcoal-border)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '4px' }}>
          {isPositiveTrend ? (
            <ArrowUpRight size={14} style={{ color: 'var(--cfx-forest-accent)' }} />
          ) : (
            <ArrowDownRight size={14} style={{ color: 'var(--cfx-copper-light)' }} />
          )}
          <span
            style={{
              fontSize: '12px',
              fontWeight: 600,
              color: isPositiveTrend ? 'var(--cfx-forest-accent)' : 'var(--cfx-copper-light)',
              fontFamily: 'var(--font-mono)',
            }}
          >
            {changeText}
          </span>
        </div>
        <p style={{ margin: 0, fontSize: '11px', color: 'var(--cfx-ivory-muted)', lineHeight: 1.4 }}>
          {detail}
        </p>
      </div>
    </div>
  );
};
