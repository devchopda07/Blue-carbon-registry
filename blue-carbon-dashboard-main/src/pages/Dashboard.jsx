import { useMemo, useState, useCallback } from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, BarChart, Bar, PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { useDropzone } from "react-dropzone";

function Card({ title, children, className = "" }) {
  return (
    <div className={`card shadow-sm h-100 ${className}`}>
      <div className="card-body">
        {title && <h5 className="card-title">{title}</h5>}
        {children}
      </div>
    </div>
  );
}

function ChartsBlock() {
  // Demo data for charts
  const lineData = useMemo(
    () => [
      { m: "Jan", a: 12, b: 7 },
      { m: "Feb", a: 15, b: 8 },
      { m: "Mar", a: 18, b: 10 },
      { m: "Apr", a: 22, b: 12 },
      { m: "May", a: 25, b: 14 },
      { m: "Jun", a: 29, b: 18 },
    ],
    []
  );

  const barData = useMemo(
    () => [
      { name: "10m", v: 12 },
      { name: "13m", v: 8 },
      { name: "16m", v: 14 },
      { name: "19m", v: 10 },
      { name: "22m", v: 17 },
    ],
    []
  );

  return (
    <div className="row g-3">
      <div className="col-lg-6">
        <Card title="Source Sequestration (tC/ha)">
          <div style={{ width: "100%", height: 240 }}>
            <ResponsiveContainer>
              <LineChart data={lineData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="m" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="a" strokeWidth={2} />
                <Line type="monotone" dataKey="b" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </div>
      <div className="col-lg-6">
        <Card title="Energy Coverage (kV)">
          <div style={{ width: "100%", height: 240 }}>
            <ResponsiveContainer>
              <BarChart data={barData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="v" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </div>
    </div>
  );
}

function UploadCard() {
  const [files, setFiles] = useState([]);
  const onDrop = useCallback((accepted) => setFiles(accepted), []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <Card title="Quick Data Upload">
      <div
        {...getRootProps({
          className:
            "upload-zone rounded-3 p-5 text-center border border-2 border-dashed bg-light",
        })}
      >
        <input {...getInputProps()} />
        <div className="display-6 mb-2">☁️</div>
        <p className="mb-0">
          {isDragActive
            ? "Drop files to upload…"
            : "Drag & drop files here, or click to choose"}
        </p>
      </div>

      {files.length > 0 && (
        <>
          <hr />
          <h6 className="text-muted">Selected files</h6>
          <ul className="small mb-0">
            {files.map((f) => (
              <li key={f.name}>
                {f.name} — {Math.round(f.size / 1024)} KB
              </li>
            ))}
          </ul>
        </>
      )}
    </Card>
  );
}

function TokenCard() {
  const donut = [
    { name: "Reserved", value: 65 },
    { name: "Available", value: 35 },
  ];
  const COLORS = ["#4caf50", "#e0e0e0"];

  return (
    <Card title="Simple Token Display">
      <div className="d-flex flex-wrap align-items-center gap-4">
        <div className="display-6 fw-semibold">1,254.73 TOKEN</div>
        <div style={{ width: 180, height: 180 }}>
          <ResponsiveContainer>
            <PieChart>
              <Pie
                data={donut}
                cx="50%"
                cy="50%"
                innerRadius={55}
                outerRadius={80}
                dataKey="value"
              >
                {donut.map((entry, index) => (
                  <Cell key={`c-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="row g-2 small text-muted mt-2">
        <div className="col">
          <div className="d-flex justify-content-between">
            <span>Reserved</span>
            <span>65%</span>
          </div>
          <div className="progress" role="progressbar" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100">
            <div className="progress-bar" style={{ width: "65%" }} />
          </div>
        </div>
        <div className="col">
          <div className="d-flex justify-content-between">
            <span>Available</span>
            <span>35%</span>
          </div>
          <div className="progress">
            <div className="progress-bar bg-secondary" style={{ width: "35%" }} />
          </div>
        </div>
      </div>
    </Card>
  );
}

function SimpleTokenStats() {
  return (
    <Card title="Simple_Token Display">
      <ul className="list-unstyled mb-0 small">
        <li className="d-flex justify-content-between py-1">
          <span>Recent Transactions</span> <span>1,254.75</span>
        </li>
        <li className="d-flex justify-content-between py-1">
          <span>Reserved</span> <span>21:06 AM</span>
        </li>
        <li className="d-flex justify-content-between py-1">
          <span>Start</span> <span>10:05 PM</span>
        </li>
        <li className="d-flex justify-content-between py-1">
          <span>Start</span> <span>10:05 AM</span>
        </li>
      </ul>
    </Card>
  );
}

function OnboardingCard() {
  return (
    <Card title="Stakeholder Onboarding">
      <form className="vstack gap-3">
        <input className="form-control" placeholder="Name" />
        <input className="form-control" placeholder="Email" type="email" />
        <select className="form-select">
          <option>Organization</option>
          <option>NGO</option>
          <option>Government</option>
          <option>Corporate</option>
        </select>
        <button type="button" className="btn btn-primary">New</button>
      </form>
    </Card>
  );
}

function DroneCard() {
  return (
    <Card title="Drone Integration">
      <p className="text-muted mb-3">Drone Images and Data Capture</p>
      <button className="btn btn-outline-primary">
        <i className="bi bi-camera-video me-2" />
        Connect Drone
      </button>
    </Card>
  );
}

export default function Dashboard() {
  return (
    <div className="vstack gap-3">
      {/* Top charts */}
      <ChartsBlock />

      {/* Upload */}
      <div className="row g-3">
        <div className="col-lg-6">
          <UploadCard />
        </div>
        <div className="col-lg-6">
          <TokenCard />
        </div>
      </div>

      {/* Lower row of tiles */}
      <div className="row g-3">
        <div className="col-lg-4">
          <SimpleTokenStats />
        </div>
        <div className="col-lg-4">
          <OnboardingCard />
        </div>
        <div className="col-lg-4">
          <DroneCard />
        </div>
      </div>
    </div>
  );
}
