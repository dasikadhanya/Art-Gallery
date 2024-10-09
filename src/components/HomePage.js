import React from 'react';
import './HomePage.css';

function HomePage() {
  return (
    <div className="home">
      <header className="header">
        <h1>Art Gallery</h1>
        <nav>
          <ul>
            <li><a href="/artist">Artist</a></li>
            <li><a href="/visitor">Visitor</a></li>
            <li><a href="/curator">Curator</a></li>
            <li><a href="/login">Login</a></li>
            <li><a href="/signup" className="signup-button">Sign Up</a></li>
          </ul>
        </nav>
      </header>

      <section className="hero">
       
      </section>

      <footer className="footer">
        <p>&copy; 2024 Virtual Art Gallery. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default HomePage;
