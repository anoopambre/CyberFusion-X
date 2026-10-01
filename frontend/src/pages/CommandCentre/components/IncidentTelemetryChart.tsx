import type React from 'react';
import { useState } from 'react';
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from 'recharts';
import { TELEMETRY_24H_DATA } from '../../../data/mockForensicData';
import { Activity, Info } from 'lucide-react';

interface CustomTooltipProps {
  active?: boolean;
  payload?: any[];
  label?: string;
}

const CustomTooltip: React.FC<CustomTooltipProps> = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div
        style={{
          backgroundColor: 'var(--cfx-charcoal-card)',
          border: '1px solid var(--cfx-charcoal-border-light)',
          borderRadius: '6px',
          padding: '10px 14px',
          boxShadow: 'var(--cfx-shadow-elevated)',
          fontFamily: 'var(--font-mono)',
          fontSize: '11px',
        }}
      >
        <div style={{ color: 'var(--cfx-copper-light)', fontWeight: 700, marginBottom: '6px' }}>
          T-INDEX: {label} UTC
        </div>
        {payload.map((entry: any, index: number) => (
          <div
            key={`tooltip-${index}`}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '16px',
              color: entry.color,
              marginBottom: '3px',
            }}
          >
            <span>{entry.name}:</span>
            <span style={{ fontWeight: 700, color: 'var(--cfx-ivory-100)' }}>
              {entry.value.toLocaleString()}
            </span>
          </div>
        ))}
        <div
          style={{
            marginTop: '6px',
            paddingTop: '6px',
            borderTop: '1px dashed rgba(239, 232, 223, 0.1)',
            fontSize: '10px',
            color: 'var(--cfx-ivory-muted)',
          }}
        >
          Simulated sensor aggregate
        </div>
      </div>
    );
  }
  return null;
};

export const IncidentTelemetryChart: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'anomalies'>('all');

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
      {/* Chart Header */}
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
          <Activity size={18} style={{ color: 'var(--cfx-copper-light)' }} />
          <div>
            <h3
              style={{
                fontSize: '14px',
                fontWeight: 700,
                color: 'var(--cfx-ivory-100)',
                margin: 0,
              }}
            >
              24-Hour Forensic Ingestion & Threat Telemetry
            </h3>
            <p style={{ margin: 0, fontSize: '11px', color: 'var(--cfx-ivory-muted)' }}>
              Correlated event throughput across 14 endpoints and network perimeter sensors
            </p>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <button
            onClick={() => setActiveFilter('all')}
            style={{
              padding: '4px 10px',
              fontSize: '11px',
              borderRadius: '4px',
              backgroundColor: activeFilter === 'all' ? 'rgba(218, 133, 84, 0.2)' : 'transparent',
              color: activeFilter === 'all' ? 'var(--cfx-copper-light)' : 'var(--cfx-ivory-muted)',
              border: activeFilter === 'all' ? '1px solid rgba(218, 133, 84, 0.4)' : '1px solid transparent',
              fontFamily: 'var(--font-mono)',
              fontWeight: 600,
            }}
          >
            All Telemetry
          </button>
          <button
            onClick={() => setActiveFilter('anomalies')}
            style={{
              padding: '4px 10px',
              fontSize: '11px',
              borderRadius: '4px',
              backgroundColor: activeFilter === 'anomalies' ? 'rgba(52, 211, 153, 0.2)' : 'transparent',
              color: activeFilter === 'anomalies' ? 'var(--cfx-forest-accent)' : 'var(--cfx-ivory-muted)',
              border: activeFilter === 'anomalies' ? '1px solid rgba(52, 211, 153, 0.4)' : '1px solid transparent',
              fontFamily: 'var(--font-mono)',
              fontWeight: 600,
            }}
          >
            Threat Vectors Only
          </button>
        </div>
      </div>

      {/* Chart Canvas */}
      <div style={{ flex: 1, width: '100%', minHeight: 0 }}>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={TELEMETRY_24H_DATA} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id="colorTotal" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#FAF7F2" stopOpacity={0.25} />
                <stop offset="95%" stopColor="#FAF7F2" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorAnomalies" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#DA8554" stopOpacity={0.4} />
                <stop offset="95%" stopColor="#DA8554" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorBeacons" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#34D399" stopOpacity={0.4} />
                <stop offset="95%" stopColor="#34D399" stopOpacity={0} />
              </linearGradient>
            </defs>

            <XAxis
              dataKey="time"
              stroke="rgba(239, 232, 223, 0.3)"
              tick={{ fill: '#B7ABA0', fontSize: 11, fontFamily: 'var(--font-mono)' }}
            />
            <YAxis
              stroke="rgba(239, 232, 223, 0.3)"
              tick={{ fill: '#B7ABA0', fontSize: 11, fontFamily: 'var(--font-mono)' }}
            />
            <Tooltip content={<CustomTooltip />} />
            <Legend
              wrapperStyle={{
                paddingTop: '8px',
                fontSize: '11px',
                fontFamily: 'var(--font-mono)',
                color: 'var(--cfx-ivory-400)',
              }}
            />

            {activeFilter === 'all' && (
              <Area
                type="monotone"
                dataKey="totalEvents"
                name="Total Raw Events"
                stroke="#FAF7F2"
                strokeWidth={1.5}
                fillOpacity={1}
                fill="url(#colorTotal)"
              />
            )}
            <Area
              type="monotone"
              dataKey="anomalies"
              name="Flagged Anomalies"
              stroke="#DA8554"
              strokeWidth={2}
              fillOpacity={1}
              fill="url(#colorAnomalies)"
            />
            <Area
              type="monotone"
              dataKey="c2Beacons"
              name="C2 Beacon Bursts"
              stroke="#34D399"
              strokeWidth={2}
              fillOpacity={1}
              fill="url(#colorBeacons)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div
        style={{
          marginTop: '8px',
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          fontSize: '11px',
          color: 'var(--cfx-ivory-muted)',
        }}
      >
        <Info size={12} style={{ color: 'var(--cfx-copper-light)' }} />
        <span>Peak activity observed at 10:00 UTC coinciding with automated exfiltration script invocation.</span>
      </div>
    </div>
  );
};
