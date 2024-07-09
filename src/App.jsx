import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from "./Components/Sidebar";
import Layout from "./Pages/Layout";
import Inventory from "./Pages/Inventory";
import SampleLog from "./Pages/SampleLog";
import Calender from "./Pages/Calender";
import Settings from "./Pages/Settings";
import Client from "./Pages/Client";

export default function App() {
  return (
    // Wrapp all elements in BrowserRouter
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Inventory />} />
          <Route path="sampleLog" element={<SampleLog />} />
          <Route path="client" element={<Client />} />
          <Route path="calender" element={<Calender />} />
          <Route path="notification" element={<Notification />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
