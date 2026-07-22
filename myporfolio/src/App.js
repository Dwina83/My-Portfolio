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

            {/* Main Container divided into 2 parts */}
      <div className="main-container">
        
        {/* Left Side: 1/3 width, pink background with profile image */}
        <aside className="left-sidebar">
          <div className="profile-wrapper">
            <img src={profilePic} alt="Dwina Larsson" className="profile-img" />
          </div>
        </aside>

         {/* Right Side: Background Image with Compact Buttons */}
        <main className="right-content">
          <div className="button-group">
            
            <button id="about" className="section-btn" onClick={() => alert("Welcome to About Me!")}>
              <span className="btn-icon">👤</span>
              <span className="btn-title">About Me</span>
            </button>

            <button id="contact" className="section-btn" onClick={() => alert("Welcome to Contact Me!")}>
              <span className="btn-icon">✉️</span>
              <span className="btn-title">Contact Me</span>
            </button>

          </div>
        </main>

      </div>
    </div>
  );
}
export default App;
