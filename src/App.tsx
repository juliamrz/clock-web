// External deps
import { Routes, Route } from 'react-router-dom';

// Internal deps
import State from '@/pages/State';
import ClockSettings from '@/pages/ClockSettings';
import WifiSettings from '@/pages/WifiSettings';
import MainLayout from '@/pages/MainLayout';

const App = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<State />} />
        <Route path="/clock-settings" element={<ClockSettings />} />
        <Route path="/wifi-settings" element={<WifiSettings />} />
      </Route>
    </Routes>
  )
}

export default App
