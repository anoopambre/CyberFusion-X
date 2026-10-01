import type React from 'react';
import { ModulePlaceholder } from '../../components/common/ModulePlaceholder';
import { Cpu } from 'lucide-react';

export const WorkbenchStub: React.FC = () => {
  return (
    <ModulePlaceholder
      moduleName="Investigation Workbench"
      icon={<Cpu size={26} />}
      tagline="Forensic analyst coprocessor: memory carving, YARA rule editor, string decoders, and hex viewer"
      description="The Investigation Workbench provides deep technical instrumentation for digital forensic analysts, featuring integrated Volatility 3 plugins (pslist, malfind, handles), YARA rule testing, CyberChef-style data decoders, and interactive hex visualization."
      phase="Stage 5 Architecture"
      upcomingFeatures={[
        'Interactive Volatility 3 memory inspection terminal',
        'Live YARA signature testing sandbox with syntax linting',
        'Multi-encoding string extractor (ASCII, Unicode, Base64, XOR)',
        'Virtual Hex Editor with byte frequency entropy histogram',
        'Custom scriptable filter pipelines for Windows EVTX XML',
      ]}
    />
  );
};
export default WorkbenchStub;
