import type React from 'react';
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip } from 'recharts';
import { IOC_DISTRIBUTIONS } from '../../../data/mockForensicData';
import { Target } from 'lucide-react';

export const IocDistributionChart: React.FC = () => {
  const totalIocs = IOC_DISTRIBUTIONS.reduce((acc, curr) => acc + curr.count, 0);

  return (
    <div
      className="cfx-card"
      style={{
        padding: '20px',
        background: 'linear-gradient(180deg, var(--cfx-charcoal-card) 0%, rgba(20, 25, 28, 0.9) 100%)',
        display: 'flex',
        flexDirection: 'column',
        height: '380px',
      }}
    >
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Target size={18} style={{ color: 'var(--cfx-copper-light)' }} />
          <div>
            <h3
              style={{
                fontSize: '14px',
                fontWeight: 700,
                color: 'var(--cfx-ivory-100)',
                margin: 0,
              }}
            >
              IOC Vector Classification
            </h3>
            <p style={{ margin: 0, fontSize: '11px', color: 'var(--cfx-ivory-muted)' }}>
              89 Confirmed Indicators categorized by MITRE TTPs
            </p>
          </div>
        </div>

        <span
          style={{
            fontSize: '11px',
            fontFamily: 'var(--font-mono)',
            padding: '2px 8px',
            backgroundColor: 'rgba(218, 133, 84, 0.15)',
            border: '1px solid rgba(218, 133, 84, 0.3)',
            borderRadius: '4px',
            color: 'var(--cfx-copper-light)',
            fontWeight: 700,
          }}
        >
          {totalIocs} TOTAL IOCs
        </span>
      </div>

      {/* Main Grid: Pie + Legend List */}
      <div style={{ display: 'flex', alignItems: 'center', flex: 1, minHeight: 0, gap: '16px' }}>
        {/* Pie Canvas */}
        <div style={{ width: '45%', height: '100%', position: 'relative' }}>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={IOC_DISTRIBUTIONS}
                cx="50%"
                cy="50%"
                innerRadius={55}
                outerRadius={80}
                paddingAngle={4}
                dataKey="count"
              >
                {IOC_DISTRIBUTIONS.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} stroke="var(--cfx-charcoal-root)" strokeWidth={2} />
                ))}
              </Pie>
              <Tooltip
                content={({ active, payload }) => {
                  if (active && payload && payload.length) {
                    const data = payload[0].payload;
                    return (
                      <div
                        style={{
                          backgroundColor: 'var(--cfx-charcoal-card)',
                          border: '1px solid var(--cfx-charcoal-border-light)',
                          borderRadius: '6px',
                          padding: '8px 12px',
                          fontFamily: 'var(--font-mono)',
                          fontSize: '11px',
                          color: 'var(--cfx-ivory-100)',
                        }}
                      >
                        <div style={{ color: data.color, fontWeight: 700 }}>{data.name}</div>
                        <div>
                          {data.count} Indicators ({data.percentage}%)
                        </div>
                      </div>
                    );
                  }
                  return null;
                }}
              />
            </PieChart>
          </ResponsiveContainer>

          {/* Centered Donut Badge */}
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              textAlign: 'center',
              pointerEvents: 'none',
            }}
          >
            <div style={{ fontSize: '18px', fontWeight: 800, color: 'var(--cfx-ivory-100)', fontFamily: 'var(--font-mono)' }}>
              89
            </div>
            <div style={{ fontSize: '9px', textTransform: 'uppercase', color: 'var(--cfx-ivory-muted)', letterSpacing: '0.4px' }}>
              IOC Flags
            </div>
          </div>
        </div>

        {/* Legend List with mini progress bars */}
        <div style={{ width: '55%', display: 'flex', flexDirection: 'column', gap: '8px', overflowY: 'auto' }}>
          {IOC_DISTRIBUTIONS.map((item, i) => (
            <div
              key={i}
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '3px',
                padding: '4px 6px',
                borderRadius: '4px',
                backgroundColor: 'rgba(239, 232, 223, 0.02)',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '11.5px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span
                    style={{
                      width: '8px',
                      height: '8px',
                      borderRadius: '2px',
                      backgroundColor: item.color,
                      flexShrink: 0,
                    }}
                  />
                  <span style={{ color: 'var(--cfx-ivory-300)', fontWeight: 500 }}>
                    {item.name}
                  </span>
                </div>
                <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, color: 'var(--cfx-ivory-100)' }}>
                  {item.count} <span style={{ color: 'var(--cfx-ivory-muted)', fontSize: '10px' }}>({item.percentage}%)</span>
                </span>
              </div>

              {/* Progress Line */}
              <div
                style={{
                  width: '100%',
                  height: '3px',
                  borderRadius: '2px',
                  backgroundColor: 'rgba(239, 232, 223, 0.08)',
                  overflow: 'hidden',
                }}
              >
                <div
                  style={{
                    width: `${item.percentage}%`,
                    height: '100%',
                    backgroundColor: item.color,
                    borderRadius: '2px',
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
