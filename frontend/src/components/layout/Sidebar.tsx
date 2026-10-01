import type React from 'react';
import { NavLink } from 'react-router-dom';
import {
  LayoutDashboard,
  HardDrive,
  GitCommitHorizontal,
  Network,
  Cpu,
  FileText,
  Settings,
  Shield,
  Radio,
  Lock,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { ACTIVE_CASE } from '../../data/mockForensicData';

interface SidebarProps {
  isCollapsed: boolean;
  onToggleCollapse: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ isCollapsed, onToggleCollapse }) => {
  const navItems = [
    {
      to: '/',
      label: 'Command Centre',
      icon: LayoutDashboard,
      badge: 'LIVE',
    },
    {
      to: '/evidence-vault',
      label: 'Evidence Vault',
      icon: HardDrive,
      badge: '42.6 GB',
    },
    {
      to: '/incident-timeline',
      label: 'Incident Timeline',
      icon: GitCommitHorizontal,
      badge: '72h',
    },
    {
      to: '/entity-graph',
      label: 'Entity Graph',
      icon: Network,
      badge: 'Map',
    },
    {
      to: '/workbench',
      label: 'Investigation Workbench',
      icon: Cpu,
      badge: 'Tooling',
    },
    {
      to: '/report-studio',
      label: 'Report Studio',
      icon: FileText,
      badge: 'Draft',
    },
    {
      to: '/settings',
      label: 'Settings',
      icon: Settings,
      badge: undefined,
    },
  ];

  return (
    <aside
      style={{
        width: isCollapsed ? 'var(--sidebar-collapsed-width)' : 'var(--sidebar-width)',
        minWidth: isCollapsed ? 'var(--sidebar-collapsed-width)' : 'var(--sidebar-width)',
        height: '100%',
        backgroundColor: 'var(--cfx-charcoal-root)',
        borderRight: '1px solid var(--cfx-charcoal-border)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        transition: 'width 0.25s cubic-bezier(0.4, 0, 0.2, 1), min-width 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
        position: 'relative',
        zIndex: 30,
        userSelect: 'none',
      }}
    >
      {/* Top Header & Brand */}
      <div>
        <div
          style={{
            height: 'var(--topbar-height)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: isCollapsed ? 'center' : 'space-between',
            padding: isCollapsed ? '0 12px' : '0 20px',
            borderBottom: '1px solid var(--cfx-charcoal-border)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', overflow: 'hidden' }}>
            <div
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '8px',
                background: 'linear-gradient(135deg, var(--cfx-forest-deep) 0%, var(--cfx-copper-dark) 100%)',
                border: '1px solid rgba(218, 133, 84, 0.4)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--cfx-ivory-100)',
                flexShrink: 0,
                boxShadow: '0 0 12px rgba(218, 133, 84, 0.2)',
              }}
            >
              <Shield size={20} style={{ color: 'var(--cfx-copper-light)' }} />
            </div>

            {!isCollapsed && (
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span
                  style={{
                    fontSize: '15px',
                    fontWeight: 800,
                    letterSpacing: '0.8px',
                    color: 'var(--cfx-ivory-100)',
                    fontFamily: 'var(--font-mono)',
                    lineHeight: 1.1,
                  }}
                >
                  CYBER<span style={{ color: 'var(--cfx-copper-light)' }}>FUSION</span> <span style={{ color: 'var(--cfx-forest-accent)', fontSize: '13px' }}>X</span>
                </span>
                <span
                  style={{
                    fontSize: '10px',
                    color: 'var(--cfx-ivory-muted)',
                    letterSpacing: '0.5px',
                    textTransform: 'uppercase',
                    marginTop: '2px',
                  }}
                >
                  Forensic Intelligence
                </span>
              </div>
            )}
          </div>

          {!isCollapsed && (
            <button
              onClick={onToggleCollapse}
              style={{
                color: 'var(--cfx-ivory-muted)',
                padding: '6px',
                borderRadius: '4px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              title="Collapse sidebar"
            >
              <ChevronLeft size={16} />
            </button>
          )}
        </div>

        {/* Active Case Mini Dossier */}
        {!isCollapsed ? (
          <div
            style={{
              margin: '16px 14px',
              padding: '12px 14px',
              backgroundColor: 'rgba(20, 25, 28, 0.8)',
              border: '1px solid var(--cfx-charcoal-border)',
              borderLeft: '3px solid var(--cfx-copper-mid)',
              borderRadius: '6px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '4px' }}>
              <span
                style={{
                  fontSize: '10px',
                  fontWeight: 700,
                  letterSpacing: '0.6px',
                  textTransform: 'uppercase',
                  color: 'var(--cfx-copper-light)',
                  fontFamily: 'var(--font-mono)',
                }}
              >
                TARGET CASE
              </span>
              <span className="pulse-green" title="Live Investigation In Progress" />
            </div>

            <div
              style={{
                fontSize: '13px',
                fontWeight: 700,
                color: 'var(--cfx-ivory-100)',
                fontFamily: 'var(--font-mono)',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
              }}
            >
              {ACTIVE_CASE.id}
            </div>
            <div
              style={{
                fontSize: '11px',
                color: 'var(--cfx-ivory-400)',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                marginTop: '2px',
              }}
            >
              {ACTIVE_CASE.codeName}
            </div>
          </div>
        ) : (
          <div
            style={{
              padding: '16px 0',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <button
              onClick={onToggleCollapse}
              style={{
                color: 'var(--cfx-ivory-muted)',
                padding: '6px',
                borderRadius: '4px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              title="Expand sidebar"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        )}

        {/* Navigation Links */}
        <nav style={{ padding: '4px 10px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <NavLink
                key={item.to}
                to={item.to}
                style={({ isActive }) => ({
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: isCollapsed ? 'center' : 'space-between',
                  padding: isCollapsed ? '12px 0' : '10px 14px',
                  borderRadius: '6px',
                  color: isActive ? 'var(--cfx-ivory-100)' : 'var(--cfx-ivory-400)',
                  backgroundColor: isActive
                    ? 'linear-gradient(90deg, rgba(20, 54, 40, 0.4) 0%, rgba(24, 32, 36, 0.9) 100%)'
                    : 'transparent',
                  background: isActive ? 'rgba(239, 232, 223, 0.08)' : 'transparent',
                  border: isActive
                    ? '1px solid rgba(218, 133, 84, 0.3)'
                    : '1px solid transparent',
                  fontWeight: isActive ? 600 : 500,
                  fontSize: '13px',
                  transition: 'all 0.15s ease',
                  position: 'relative',
                })}
                title={isCollapsed ? item.label : undefined}
              >
                {({ isActive }) => (
                  <>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <Icon
                        size={18}
                        style={{
                          color: isActive ? 'var(--cfx-copper-light)' : 'var(--cfx-ivory-muted)',
                          flexShrink: 0,
                        }}
                      />
                      {!isCollapsed && <span>{item.label}</span>}
                    </div>

                    {!isCollapsed && item.badge && (
                      <span
                        style={{
                          fontSize: '10px',
                          fontWeight: 700,
                          padding: '2px 6px',
                          borderRadius: '4px',
                          fontFamily: 'var(--font-mono)',
                          backgroundColor:
                            item.badge === 'LIVE'
                              ? 'rgba(52, 211, 153, 0.15)'
                              : 'rgba(239, 232, 223, 0.08)',
                          color:
                            item.badge === 'LIVE'
                              ? 'var(--cfx-forest-accent)'
                              : 'var(--cfx-ivory-400)',
                          border:
                            item.badge === 'LIVE'
                              ? '1px solid rgba(52, 211, 153, 0.3)'
                              : '1px solid rgba(239, 232, 223, 0.1)',
                        }}
                      >
                        {item.badge}
                      </span>
                    )}
                  </>
                )}
              </NavLink>
            );
          })}
        </nav>
      </div>

      {/* Bottom Forensic Telemetry Status Widget */}
      <div
        style={{
          padding: isCollapsed ? '16px 8px' : '16px',
          borderTop: '1px solid var(--cfx-charcoal-border)',
          backgroundColor: 'rgba(11, 14, 15, 0.6)',
        }}
      >
        {!isCollapsed ? (
          <div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Lock size={12} style={{ color: 'var(--cfx-forest-accent)' }} />
                <span
                  style={{
                    fontSize: '10px',
                    fontWeight: 700,
                    letterSpacing: '0.4px',
                    color: 'var(--cfx-ivory-400)',
                    fontFamily: 'var(--font-mono)',
                  }}
                >
                  CHAIN INTEGRITY
                </span>
              </div>
              <span
                style={{
                  fontSize: '10px',
                  color: 'var(--cfx-forest-accent)',
                  fontWeight: 600,
                  fontFamily: 'var(--font-mono)',
                }}
              >
                VERIFIED
              </span>
            </div>

            <div
              style={{
                fontSize: '11px',
                color: 'var(--cfx-ivory-muted)',
                lineHeight: 1.4,
                marginBottom: '8px',
              }}
            >
              Hardware write-blocker active. Deterministic SHA-256 HMAC valid.
            </div>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '6px 8px',
                borderRadius: '4px',
                backgroundColor: 'rgba(24, 32, 36, 0.8)',
                border: '1px solid var(--cfx-charcoal-border)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Radio size={12} style={{ color: 'var(--cfx-copper-light)' }} />
                <span style={{ fontSize: '10px', color: 'var(--cfx-ivory-400)', fontFamily: 'var(--font-mono)' }}>
                  FEED: 1.4k ev/s
                </span>
              </div>
              <span className="pulse-green" />
            </div>
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
            <span title="Chain Integrity Verified" style={{ display: 'flex' }}>
              <Lock size={16} style={{ color: 'var(--cfx-forest-accent)' }} />
            </span>
            <span title="Telemetry Stream: 1.4k ev/s" style={{ display: 'flex' }}>
              <Radio size={14} style={{ color: 'var(--cfx-copper-light)' }} />
            </span>
          </div>
        )}
      </div>
    </aside>
  );
};
