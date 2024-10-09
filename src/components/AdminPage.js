import React from 'react';
import './AdminPage.css';

function AdminPage() {
  return (
    <div className="admin-page">
      <header>
        <h1>Admin Dashboard</h1>
      </header>

      <section>
        <h2>Manage Users</h2>
        <p>View and manage user roles: Artists, Visitors, and Curators.</p>

        <h2>Manage Content</h2>
        <p>Edit platform content to keep everything up-to-date.</p>

        <h2>Gallery Settings</h2>
        <p>Adjust the gallery's layout and display settings.</p>
      </section>
    </div>
  );
}

export default AdminPage;
