import { Routes, Route, Link } from "react-router-dom";
import Dashboard from "./pages/Dashboard.jsx";
import Projects from "./pages/Projects.jsx";
import Reports from "./pages/Reports.jsx";
import Admin from "./pages/Admin.jsx";
import "./styles.css";

function App() {
  return (
    <div className="d-flex">
      {/* Sidebar */}
      <div
        className="bg-dark text-white p-3 vh-100"
        style={{ width: "250px", position: "fixed", top: 0, left: 0 }}
      >
        <h2 className="mb-4">Blue Carbon</h2>
        <ul className="nav flex-column">
          <li className="nav-item mb-2">
            <Link to="/" className="nav-link text-white">
              Dashboard
            </Link>
          </li>
          <li className="nav-item mb-2">
            <Link to="/projects" className="nav-link text-white">
              Projects
            </Link>
          </li>
          <li className="nav-item mb-2">
            <Link to="/reports" className="nav-link text-white">
              Reports
            </Link>
          </li>
          <li className="nav-item mb-2">
            <Link to="/admin" className="nav-link text-white">
              Admin
            </Link>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-grow-1 p-4" style={{ marginLeft: "250px" }}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;