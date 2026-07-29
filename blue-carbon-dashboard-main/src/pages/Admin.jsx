export default function Admin() {
  return (
    <div>
      <h2 className="h4 mb-4">Admin Panel</h2>

      {/* User Management */}
      <div className="card mb-4 shadow-sm">
        <div className="card-header">User Management</div>
        <div className="card-body">
          <button className="btn btn-success btn-sm me-2">Add User</button>
          <button className="btn btn-danger btn-sm">Remove User</button>
        </div>
      </div>

      {/* System Settings */}
      <div className="card shadow-sm">
        <div className="card-header">System Settings</div>
        <div className="card-body">
          <form>
            <div className="mb-3">
              <label className="form-label">System Name</label>
              <input type="text" className="form-control" defaultValue="Blue Carbon MRV" />
            </div>
            <div className="mb-3">
              <label className="form-label">Enable Maintenance Mode</label>
              <select className="form-select">
                <option>No</option>
                <option>Yes</option>
              </select>
            </div>
            <button className="btn btn-primary">Save Settings</button>
          </form>
        </div>
      </div>
    </div>
  );
}