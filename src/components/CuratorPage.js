import React from 'react';
import './CuratorPage.css';

function CuratorPage() {
  return (
    <div className="curator-page">
      <header>
        <h1>Curator Dashboard</h1>
      </header>

      <section>
        <h2>Organize Exhibitions</h2>
        <form>
          <label>Exhibition Title:</label>
          <input type="text" />

          <label>Description:</label>
          <textarea></textarea>

          <button type="submit">Submit</button>
        </form>
      </section>
    </div>
  );
}

export default CuratorPage;
