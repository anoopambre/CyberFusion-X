/**
 * CyberFusion X - Simulated Forensic Investigation Dataset
 * DISCLAIMER: All forensic records, IP addresses, hashes, hostnames, and telemetry
 * below are synthetically generated for simulation and workflow modeling purposes.
 */

import type {
  ActiveCase,
  ForensicMetric,
  ActivityLogItem,
  EvidenceArtifact,
  IocDistributionItem,
  TelemetryDataPoint,
  PipelineModuleStatus,
} from '../types/forensics';

export const ACTIVE_CASE: ActiveCase = {
  id: 'CFX-2026-0941',
  codeName: 'OPERATION PHANTOM CITADEL',
  title: 'Memory Hollow & Cryptographic Exfiltration Assessment',
  threatActor: 'APT-44',
  threatActorAlias: 'Obsidian Jackal / RedSpire Group',
  severity: 'critical',
  tlp: 'TLP:AMBER',
  status: 'active',
  currentPhase: 'Phase 4: Containment & Deep Artifact Extraction',
  phaseProgress: 68,
  leadInvestigator: 'Inv. Sarah Vance, EnCE, GCFA',
  clearanceLevel: 'LEVEL 4 FORENSIC CLEARANCE',
  incidentTimestamp: '2026-09-28 03:14:22 UTC',
  writeBlockerVerified: true,
  chainOfCustodyLedgerId: 'COC-2026-9041-SHA256-V8',
  scopeEndpoints: 14,
  scopeCloudBuckets: 3,
  scopeDomainControllers: 2,
  summary:
    'Targeted intrusion involving living-off-the-land binaries (svchost injection), covert DNS-over-HTTPS C2 beaconing, and staged archive exfiltration targeting proprietary aerospace telemetry.',
  suspectedAttackVector: 'Spearphishing payload with weaponized LNK triggering unquoted service path abuse in legacy monitoring agent.',
};

export const ALTERNATIVE_CASES = [
  {
    id: 'CFX-2026-0941',
    codeName: 'OPERATION PHANTOM CITADEL',
    severity: 'critical',
    status: 'Active (Current)',
    endpoints: 14,
  },
  {
    id: 'CFX-2026-0812',
    codeName: 'VALKYRIE VAULT COMPROMISE',
    severity: 'high',
    status: 'Evidence Review',
    endpoints: 6,
  },
  {
    id: 'CFX-2026-0775',
    codeName: 'NEBULA HORIZON RANSOMWARE',
    severity: 'medium',
    status: 'Post-Mortem Stage',
    endpoints: 22,
  },
];

export const FORENSIC_METRICS: ForensicMetric[] = [
  {
    id: 'm1',
    label: 'Extracted Evidence Artifacts',
    value: '1,284',
    unit: 'items (42.6 GB)',
    changeText: '+142 artifacts this cycle',
    isPositiveTrend: true,
    detail: 'Physical E01 disk images, volatility dumps, and network PCAPs write-block verified.',
    accent: 'forest',
  },
  {
    id: 'm2',
    label: 'Confirmed High-Risk IOCs',
    value: '89',
    unit: 'indicators',
    changeText: '+11 new flagged today',
    isPositiveTrend: false,
    detail: '31 critical IP beacons, 24 malicious SHA-256 hashes, and 34 forged registry keys.',
    accent: 'copper',
  },
  {
    id: 'm3',
    label: 'Correlated Timeline Events',
    value: '14,820',
    unit: 'telemetry rows',
    changeText: 'Spans 72 hours of telemetry',
    isPositiveTrend: true,
    detail: 'Cross-correlated from MFT timestamps, Windows EVTX logs, and Zeek network streams.',
    accent: 'ivory',
  },
  {
    id: 'm4',
    label: 'Chain of Custody Integrity',
    value: '100%',
    unit: 'SHA-256 valid',
    changeText: 'Zero hash discrepancies',
    isPositiveTrend: true,
    detail: 'Tableau T8u hardware write-blocker certified; NIST SP 800-86 standard compliant.',
    accent: 'forest',
  },
];

export const TELEMETRY_24H_DATA: TelemetryDataPoint[] = [
  { time: '00:00', totalEvents: 340, anomalies: 12, c2Beacons: 4, memoryInjections: 1 },
  { time: '02:00', totalEvents: 280, anomalies: 9, c2Beacons: 3, memoryInjections: 0 },
  { time: '04:00', totalEvents: 420, anomalies: 34, c2Beacons: 18, memoryInjections: 4 },
  { time: '06:00', totalEvents: 510, anomalies: 48, c2Beacons: 29, memoryInjections: 6 },
  { time: '08:00', totalEvents: 890, anomalies: 95, c2Beacons: 52, memoryInjections: 14 },
  { time: '10:00', totalEvents: 1240, anomalies: 142, c2Beacons: 78, memoryInjections: 22 },
  { time: '12:00', totalEvents: 980, anomalies: 88, c2Beacons: 41, memoryInjections: 9 },
  { time: '14:00', totalEvents: 1120, anomalies: 110, c2Beacons: 63, memoryInjections: 18 },
  { time: '16:00', totalEvents: 850, anomalies: 74, c2Beacons: 37, memoryInjections: 7 },
  { time: '18:00', totalEvents: 670, anomalies: 45, c2Beacons: 22, memoryInjections: 3 },
  { time: '20:00', totalEvents: 520, anomalies: 31, c2Beacons: 15, memoryInjections: 2 },
  { time: '22:00', totalEvents: 610, anomalies: 39, c2Beacons: 19, memoryInjections: 5 },
];

export const IOC_DISTRIBUTIONS: IocDistributionItem[] = [
  { name: 'Process Memory Injection', count: 34, percentage: 38, color: '#DA8554' }, // Subtle Copper
  { name: 'C2 Domain / IP Beacons', count: 26, percentage: 29, color: '#34D399' },   // Forest Accent
  { name: 'MFT Time-Stomping & File Spores', count: 14, percentage: 16, color: '#EFE8DF' }, // Warm Ivory
  { name: 'Forged Scheduled Tasks', count: 9, percentage: 10, color: '#9CA3AF' },     // Charcoal Light
  { name: 'Staged Encrypted Exfil ZIPs', count: 6, percentage: 7, color: '#B86539' }, // Deep Copper
];

export const RECENT_ACTIVITIES: ActivityLogItem[] = [
  {
    id: 'act-01',
    timestamp: '2026-10-01 08:34:12 UTC',
    timeAgo: '7 mins ago',
    severity: 'critical',
    category: 'memory',
    host: 'DC-CORP-01 (10.40.1.10)',
    summary: 'Process Hollowing detected in svchost.exe PID 3412',
    technicalDetail: 'Volatility 3 malfind detected RWX page with PE magic header at VAD base 0x0000021A4B0. Injected code unhooked ntdll.dll.',
    artifactHash: 'c4ca4238a0b923820dcc509a6f75849b3922374e',
    investigator: 'S. Vance',
  },
  {
    id: 'act-02',
    timestamp: '2026-10-01 08:12:05 UTC',
    timeAgo: '29 mins ago',
    severity: 'high',
    category: 'network',
    host: 'WKSTN-FIN-088 (10.40.2.88)',
    summary: 'Encrypted C2 Beacon stream identified',
    technicalDetail: 'Zeek SSL analyzer matched periodic heartbeats to 185.220.101.44:8443 with 14% jitter pattern. JA3 signature: 6734f37431670b3ab4292b8f60f29984.',
    artifactHash: 'e3b0c44298fc1c149afbf4c8996fb92427ae41e4',
    investigator: 'Automated Zeek Sensor',
  },
  {
    id: 'act-03',
    timestamp: '2026-10-01 07:45:50 UTC',
    timeAgo: '55 mins ago',
    severity: 'low',
    category: 'custody',
    host: 'FORENSIC LAB WORKSTATION 03',
    summary: 'Chain of Custody recorded for Seagate Barracuda 2TB SSD',
    technicalDetail: 'Physical drive S/N 882194-EX seized from Server Room Rack 4. Tableau T8u forensic hardware write-blocker certified bit-stream clone completed.',
    artifactHash: '7f83b1657ff1fc53b92dc18148a1d65dfc2d4b1f',
    investigator: 'E. Rostov',
  },
  {
    id: 'act-04',
    timestamp: '2026-10-01 06:50:22 UTC',
    timeAgo: '1.8 hrs ago',
    severity: 'critical',
    category: 'yara',
    host: 'FS-ARCHIVE-02 (10.40.1.25)',
    summary: 'YARA rule match: SUSP_CobaltStrike_Beacon_Stager',
    technicalDetail: 'Scan matched string signatures ($beacon_pipe, $xor_decryption_loop) within C:\\Windows\\Temp\\scrcons_stage.tmp.',
    artifactHash: '9f86d081884c7d659a2feaa0c55ad015a3bf4f1b',
    investigator: 'YARA Pipeline v4.3',
  },
  {
    id: 'act-05',
    timestamp: '2026-10-01 05:15:10 UTC',
    timeAgo: '3.4 hrs ago',
    severity: 'medium',
    category: 'disk',
    host: 'WKSTN-ENG-014 (10.40.3.14)',
    summary: '$MFT Timestamp anomaly: $STANDARD_INFORMATION mismatch',
    technicalDetail: 'Discrepancy of 42 days detected between $FILE_NAME and $STANDARD_INFORMATION attribute timestamps on powershell.exe wrapper.',
    artifactHash: '5e884898da28047151d0e56f8dc6292773603d0d',
    investigator: 'S. Vance',
  },
];

export const EVIDENCE_PREVIEWS: EvidenceArtifact[] = [
  {
    id: 'EVD-9041-01',
    name: 'memdump_dc01_win11_20260930.raw',
    type: 'RAM Image',
    size: '16.4 GB',
    hashSha256: '9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08',
    sourceHost: 'DC-CORP-01',
    acquiredAt: '2026-09-30 22:15 UTC',
    integrityVerified: true,
    status: 'analyzed',
    severity: 'critical',
  },
  {
    id: 'EVD-9041-02',
    name: 'physdrive0_wkstn_fin088.E01',
    type: 'E01 Disk Image',
    size: '24.8 GB',
    hashSha256: 'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855',
    sourceHost: 'WKSTN-FIN-088',
    acquiredAt: '2026-10-01 01:40 UTC',
    integrityVerified: true,
    status: 'analyzed',
    severity: 'high',
  },
  {
    id: 'EVD-9041-03',
    name: 'perimeter_egress_fw_capture.pcap',
    type: 'PCAP Capture',
    size: '1.2 GB',
    hashSha256: '7f83b1657ff1fc53b92dc18148a1d65dfc2d4b1fa3d677284addd200126d9069',
    sourceHost: 'PaloAlto-FW-Egress-01',
    acquiredAt: '2026-10-01 04:10 UTC',
    integrityVerified: true,
    status: 'scanning',
    severity: 'critical',
  },
  {
    id: 'EVD-9041-04',
    name: 'dc01_ntds_dit_extracted.dit',
    type: 'Windows Registry',
    size: '480 MB',
    hashSha256: 'c4ca4238a0b923820dcc509a6f75849b3922374e2d26f6eb8b965f5a89f9e3d8',
    sourceHost: 'DC-CORP-01',
    acquiredAt: '2026-10-01 06:00 UTC',
    integrityVerified: true,
    status: 'quarantined',
    severity: 'high',
  },
];

export const PIPELINE_MODULES: PipelineModuleStatus[] = [
  {
    id: 'mod-1',
    name: 'Hardware Write-Blocker Ingest',
    role: 'Physical & Logical Write Protection',
    version: 'Tableau T8u Bridge v2.9',
    status: 'operational',
    throughput: '340 MB/s (Hardware Verified)',
    lastHeartbeat: 'Sync 2s ago',
  },
  {
    id: 'mod-2',
    name: 'YARA Signature Scanner',
    role: 'Threat Pattern & Stager Detection',
    version: 'YARA Engine v4.3.2 (1,420 Rules)',
    status: 'scanning',
    throughput: '18 files/s',
    lastHeartbeat: 'Sync 5s ago',
  },
  {
    id: 'mod-3',
    name: 'Volatility 3 Memory Core',
    role: 'VAD Tree & Hollowed DLL Analysis',
    version: 'Volatility Core 2.7.0',
    status: 'operational',
    throughput: 'Active VAD Walking',
    lastHeartbeat: 'Sync 1s ago',
  },
  {
    id: 'mod-4',
    name: 'Immutable Custody Ledger',
    role: 'NIST SP 800-86 Cryptographic Auditor',
    version: 'SHA-256 HMAC Merkle v1.4',
    status: 'operational',
    throughput: '100% Verified (0 Discrepancies)',
    lastHeartbeat: 'Continuous',
  },
];
