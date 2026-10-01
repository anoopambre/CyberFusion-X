import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AppShell } from './components/layout/AppShell';
import CommandCentre from './pages/CommandCentre/CommandCentre';
import EvidenceVaultStub from './pages/EvidenceVault/EvidenceVaultStub';
import IncidentTimelineStub from './pages/IncidentTimeline/IncidentTimelineStub';
import EntityGraphStub from './pages/EntityGraph/EntityGraphStub';
import WorkbenchStub from './pages/Workbench/WorkbenchStub';
import ReportStudioStub from './pages/ReportStudio/ReportStudioStub';
import SettingsStub from './pages/Settings/SettingsStub';

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppShell />}>
          <Route index element={<CommandCentre />} />
          <Route path="command-centre" element={<Navigate to="/" replace />} />
          <Route path="evidence-vault" element={<EvidenceVaultStub />} />
          <Route path="incident-timeline" element={<IncidentTimelineStub />} />
          <Route path="entity-graph" element={<EntityGraphStub />} />
          <Route path="workbench" element={<WorkbenchStub />} />
          <Route path="report-studio" element={<ReportStudioStub />} />
          <Route path="settings" element={<SettingsStub />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
