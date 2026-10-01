import type React from 'react';
import { ModulePlaceholder } from '../../components/common/ModulePlaceholder';
import { Network } from 'lucide-react';

export const EntityGraphStub: React.FC = () => {
  return (
    <ModulePlaceholder
      moduleName="Entity Graph"
      icon={<Network size={26} />}
      tagline="Interactive link-analysis topology powered by @xyflow/react for host, IP, account, and process relationship mapping"
      description="The Entity Graph projects forensic indicators into an interactive node-link graph, revealing attack blast radius, Kerberos ticket delegation paths, and command-and-control pivot points across the enterprise estate."
      phase="Stage 4 Architecture"
      upcomingFeatures={[
        '@xyflow/react custom forensic entity nodes and edges',
        'Process lineage trees (Parent PID -> Child PID injection)',
        'Domain Controller Kerberoasting & BloodHound graph overlay',
        'Geographic IP attribution and ASN reputation heatmaps',
        'Auto-layout clustering (Force-directed, Hierarchical DAG)',
      ]}
    />
  );
};
export default EntityGraphStub;
