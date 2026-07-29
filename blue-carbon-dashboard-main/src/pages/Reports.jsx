export default function Reports() {
  return (
    <div>
      <h2 className="h4 mb-4">Reports</h2>

      <div className="table-responsive">
        <table className="table table-striped table-hover">
          <thead className="table-light">
            <tr>
              <th>Report Name</th>
              <th>Date</th>
              <th>Status</th>
              <th>Download</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Carbon Sequestration Report</td>
              <td>2025-09-01</td>
              <td><span className="badge bg-success">Completed</span></td>
              <td><button className="btn btn-outline-primary btn-sm">Download</button></td>
            </tr>
            <tr>
              <td>Annual Blue Carbon Assessment</td>
              <td>2025-08-15</td>
              <td><span className="badge bg-warning">Pending</span></td>
              <td><button className="btn btn-outline-secondary btn-sm" disabled>Not Ready</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}