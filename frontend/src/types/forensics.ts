/**
 * CyberFusion X - Digital Forensic Investigation Platform
 * Type definitions for forensic data models, telemetry, and metrics.
 * Note: All forensic data within this application is simulated for demonstration and workflow modeling.
 */

export type SeverityLevel = 'low' | 'medium' | 'high' | 'critical';
export type TlpLevel = 'TLP:WHITE' | 'TLP:GREEN' | 'TLP:AMBER' | 'TLP:RED';
export type CaseStatus = 'active' | 'under_review' | 'quarantined' | 'closed';

export interface ActiveCase {
  id: string;
  codeName: string;
  title: string;
  threatActor: string;
  threatActorAlias: string;
  severity: SeverityLevel;
  tlp: TlpLevel;
  status: CaseStatus;
  currentPhase: string;
  phaseProgress: number; // 0 to 100
  leadInvestigator: string;
  clearanceLevel: string;
  incidentTimestamp: string;
  writeBlockerVerified: boolean;
  chainOfCustodyLedgerId: string;
  scopeEndpoints: number;
  scopeCloudBuckets: number;
  scopeDomainControllers: number;
  summary: string;
  suspectedAttackVector: string;
}

export interface ForensicMetric {
  id: string;
  label: string;
  value: string;
  unit?: string;
  changeText: string;
  isPositiveTrend: boolean;
  detail: string;
  accent: 'forest' | 'copper' | 'ivory' | 'charcoal';
}

export interface ActivityLogItem {
  id: string;
  timestamp: string;
  timeAgo: string;
  severity: SeverityLevel;
  category: 'memory' | 'network' | 'disk' | 'custody' | 'yara';
  host: string;
  summary: string;
  technicalDetail: string;
  artifactHash?: string;
  investigator: string;
}

export interface EvidenceArtifact {
  id: string;
  name: string;
  type: 'RAM Image' | 'E01 Disk Image' | 'PCAP Capture' | 'MFT Table' | 'Windows Registry' | 'Event Log EVTX';
  size: string;
  hashSha256: string;
  sourceHost: string;
  acquiredAt: string;
  integrityVerified: boolean;
  status: 'analyzed' | 'scanning' | 'quarantined' | 'pending';
  severity: SeverityLevel;
}

export interface IocDistributionItem {
  name: string;
  count: number;
  percentage: number;
  color: string;
}

export interface TelemetryDataPoint {
  time: string;
  totalEvents: number;
  anomalies: number;
  c2Beacons: number;
  memoryInjections: number;
}

export interface PipelineModuleStatus {
  id: string;
  name: string;
  role: string;
  version: string;
  status: 'operational' | 'degraded' | 'scanning' | 'standby';
  throughput: string;
  lastHeartbeat: string;
}
