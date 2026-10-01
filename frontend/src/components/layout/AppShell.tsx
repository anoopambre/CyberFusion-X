import type React from 'react';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Sidebar } from './Sidebar';
import { TopNavbar } from './TopNavbar';
import { SimulationBanner } from '../common/SimulationBanner';
import { Cpu, CheckCircle2, ShieldCheck, Database } from 'lucide-react';

export const AppShell: React.FC = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '100vw',
        height: '100vh',
        overflow: 'hidden',
        backgroundColor: 'var(--cfx-charcoal-void)',
      }}
    >
      {/* Universal Simulation Disclaimer Banner */}
      <SimulationBanner />

      {/* Main Container: Sidebar + Working View */}
      <div
        style={{
          display: 'flex',
          flex: 1,
          overflow: 'hidden',
          position: 'relative',
        }}
      >
        {/* Navigation Sidebar */}
        <Sidebar
          isCollapsed={isSidebarCollapsed}
          onToggleCollapse={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
        />

        {/* Content Area */}
        <div
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            backgroundColor: 'var(--cfx-charcoal-root)',
          }}
        >
          {/* Top Bar */}
          <TopNavbar />

          {/* Primary Viewport */}
          <main
            className="forensic-grid-background"
            style={{
              flex: 1,
              overflowY: 'auto',
              overflowX: 'hidden',
              padding: '24px 28px 40px 28px',
              backgroundColor: 'var(--cfx-charcoal-void)',
            }}
          >
            <div style={{ maxWidth: '1600px', margin: '0 auto' }}>
              <Outlet />
            </div>
          </main>

          {/* Forensic System Footer Status Bar */}
          <footer
            style={{
              height: '32px',
              backgroundColor: 'var(--cfx-charcoal-root)',
              borderTop: '1px solid var(--cfx-charcoal-border)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '0 24px',
              fontSize: '11px',
              fontFamily: 'var(--font-mono)',
              color: 'var(--cfx-ivory-muted)',
              zIndex: 10,
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '5px', color: 'var(--cfx-forest-accent)' }}>
                <ShieldCheck size={12} />
                TABLEAU T8u WRITE-BLOCK: ACTIVE
              </span>
              <span style={{ color: 'rgba(239, 232, 223, 0.2)' }}>|</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                <CheckCircle2 size={12} style={{ color: 'var(--cfx-forest-accent)' }} />
                SHA-256 HASH VERIFICATION: ZERO DRIFT
              </span>
              <span style={{ color: 'rgba(239, 232, 223, 0.2)' }}>|</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '5px', color: 'var(--cfx-copper-light)' }}>
                <Cpu size={12} />
                VOLATILITY 3 CORE: 2.7.0 READY
              </span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                <Database size={12} />
                SYNTHETIC INGESTION CACHE: 42.6 GB
              </span>
              <span style={{ color: 'rgba(239, 232, 223, 0.2)' }}>|</span>
              <span>CYBERFUSION X v2.4-PRO (LOCAL SANDBOX)</span>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};
