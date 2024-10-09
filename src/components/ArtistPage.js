import React from 'react';
import './ArtistPage.css';

function ArtistPage() {
  return (
    <div className="artist-page">
      <header>
        <h1>Artist Dashboard</h1>
      </header>

      <section>
        <h2>Upload Artwork</h2>
        <form>
          <label>Title of Artwork:</label>
          <input type="text" />

          <label>Description:</label>
          <textarea></textarea>

          <label>Upload Image:</label>
          <input type="file" accept="image/*" />

          <button type="submit">Submit</button>
        </form>
      </section>
    </div>
  );
}

export default ArtistPage;
