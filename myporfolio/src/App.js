import profilePic from './images/profile.jpeg'; 
import './App.css';

function App() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="App">
      <header className="navbar">
        <div className="nav-logo">
          <h2>Dwina Larsson</h2>
        </div>
        <nav className="nav-links">
          <a href="#about" onClick={() => scrollToSection('about')}>About me</a>
          <a href="#contact" onClick={() => scrollToSection('contact')}>Contact me</a>
        </nav>
      </header>

      {/* Main Full-Width Content Section */}
      <main className="main-content">
        <div className="profile-card">
          
          {/* Circular Profile Picture */}
          {/* Side-by-Side Header Container */}
          <div className="profile-header">
          <img 
            src={profilePic}
            alt="Dwina Larsson" 
            className="profile-circle-img" 
          />

          {/* Text Next to Photo */}
            <div className="profile-info">
              <p className="dev-intro">
                Passionate <strong>.NET Developer</strong> specializing in building scalable web applications, 
                modern C# backends, and clean user experiences.
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="button-group">
            <button id="about" className="section-btn" onClick={() => scrollToSection('about')}>
              <span className="btn-icon">👤</span>
              <span>About Me</span>
            </button>

            <button id="contact" className="section-btn" onClick={() => scrollToSection('contact')}>
              <span className="btn-icon">✉️</span>
              <span>Contact Me</span>
            </button>
          </div>

        </div>
      </main>
    </div>
  );
}
export default App;
