export default function Projects() {
  return (
    <div>
      <h2 className="h4 mb-4">Projects</h2>

      <div className="row">
        {/* Example Project Card */}
        <div className="col-md-4 mb-4">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Mangrove Restoration</h5>
              <p className="card-text text-muted">
                Location: Sundarbans, West Bengal
              </p>
              <p className="card-text">
                Status: <span className="badge bg-success">Active</span>
              </p>
              <button className="btn btn-primary btn-sm">View Details</button>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Seagrass Monitoring</h5>
              <p className="card-text text-muted">
                Location: Tamil Nadu Coast
              </p>
              <p className="card-text">
                Status: <span className="badge bg-warning">In Progress</span>
              </p>
              <button className="btn btn-primary btn-sm">View Details</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}