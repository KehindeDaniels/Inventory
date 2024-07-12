import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Pages/Layout";
import Inventory from "./Pages/inventory/Inventory";
import SampleLog from "./Pages/SampleLog";
import Calendar from "./Pages/Calender";
import Settings from "./Pages/Settings";
import Client from "./Pages/Client";
import Notification from "./Pages/Notification";
import Overview from "./Pages/inventory/Overview";
import Items from "./Pages/inventory/Items";
import Consumables from "./Pages/inventory/Consumables";
import Files from "./Pages/inventory/Files";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Default route now directly to Inventory, not as an index */}
          <Route path="inventory" element={<Inventory />}>
            <Route index element={<Overview />} /> // Overview as index under
            /inventory
            <Route path="overview" element={<Overview />} />
            <Route path="items" element={<Items />} />
            <Route path="consumables" element={<Consumables />} />
            <Route path="files" element={<Files />} />
          </Route>
          <Route index element={<Inventory />} /> // Make / path redirect to
          Inventory
          <Route path="sampleLog" element={<SampleLog />} />
          <Route path="client" element={<Client />} />
          <Route path="calendar" element={<Calendar />} />
          <Route path="notification" element={<Notification />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
