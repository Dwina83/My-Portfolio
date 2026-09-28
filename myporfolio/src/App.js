import profilePic from './images/profile.jpeg';
import './App.css';

const experience = [
  {
    role: "Systems Developer (pro bono freelance)",
    org: "Trivseldata AB, Eskilstuna",
    period: "Aug – Nov 2025",
    points: [
      "Built web applications with Blazor, using Git for version control.",
      "Created user-friendly forms and interfaces for data collection.",
      "Worked in agile teams: technical documentation, code review and improvements.",
      "Worked on integrations between systems and APIs.",
    ],
  },
  {
    role: "Systems Developer (LIA internship)",
    org: "CGI, Eskilstuna",
    period: "Jan – Jun 2025",
    points: [
      "Built backend applications in C# and .NET, frontends in React, and designed REST APIs.",
      "Containerized applications with Docker and worked with CI/CD pipelines.",
      "Took part in code reviews and contributed to integrations between systems and databases.",
      "Worked closely with product owners and developers in an agile setup.",
    ],
  },
  {
    role: "Systems Developer (LIA internship)",
    org: "Trivseldata AB, Eskilstuna",
    period: "Aug – Oct 2024",
    points: [
      "Developed a booking system in C# and .NET.",
      "Improved testability and code quality; handled bugs, testing and documentation.",
    ],
  },
  {
    role: "CFO",
    org: "KEDIN Design for Education AB",
    period: "2020 – 2023",
    points: [
      "Responsible for finance and administration in a start-up environment.",
      "Worked in cross-functional teams and helped streamline processes.",
    ],
  },
  {
    role: "Residential Support Worker",
    org: "Eskilstuna Municipality",
    period: "2015 – present",
    points: [
      "Independent work under strict rules on confidentiality, professional secrecy and personal data.",
      "Documentation with full traceability and legal compliance.",
    ],
  },
];

const skills = [
  { group: "Backend", items: ["C#", ".NET", "ASP.NET Core", "Python", "Java", "REST APIs", "SQL"] },
  { group: "Frontend", items: ["React", "Blazor", "TypeScript", "JavaScript", "HTML5", "CSS"] },
  { group: "Databases", items: ["SQL Server", "Entity Framework", "MySQL"] },
  { group: "Cloud & DevOps", items: ["Azure Functions", "Azure Storage", "Docker", "GitHub Actions", "CI/CD", "Git"] },
  { group: "Testing & quality", items: ["xUnit", "TDD", "Code review", "Clean code"] },
  { group: "Ways of working", items: ["Scrum", "Sprints", "Technical documentation"] },
];

const education = [
  {
    title: "Systems Developer, .NET (Higher Vocational Education, 400 YH credits)",
    place: "Campus Nyköping",
    period: "Aug 2023 – Jun 2025",
    note: "Clean code, DevOps, agile development, testable architecture, automated testing, C#, application architecture, web applications, information security.",
  },
  { title: "Object-Oriented Programming in Java", place: "Luleå University of Technology", period: "2021" },
  { title: "Programming in Java", place: "University of Gävle", period: "2020" },
  { title: "Bachelor's degree, Analytical Finance", place: "Mälardalen University, Västerås", period: "Aug 2016 – May 2019" },
];

const interests = [
  { title: "Cybersecurity", text: "I enjoy digging into security challenges on TryHackMe and Juice Shop." },
  { title: "Training & mindfulness", text: "Member of Eskilstuna Boxningsklubb and Eskilstuna Pilates Center; daily yoga and meditation." },
  { title: "Women in Tech", text: "I attend networking meetups and events for women in the IT industry." },
];

const goTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <div className="nav-logo"><h2>Dwina Larsson</h2></div>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#skills">Skills</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <header className="main-content" id="home">
        <div className="profile-card">
          <div className="profile-header">
            <img className="profile-circle-img" src={profilePic} alt="Dwina Larsson" />
            <div>
              <h1 className="dev-title">Hi, I'm Dwina</h1>
              <p className="dev-intro" style={{ marginBottom: 0 }}>
                A full-stack <strong>.NET Developer</strong> with a background in analytical finance,
                building secure, sustainable and useful software from the ground up.
              </p>
            </div>
          </div>
          <div className="button-group">
            <button className="section-btn" onClick={() => goTo('experience')}>Experience</button>
            <button className="section-btn" onClick={() => goTo('skills')}>Skills</button>
            <button className="section-btn" onClick={() => goTo('education')}>Education</button>
            <button className="section-btn" onClick={() => goTo('contact')}>Contact</button>
          </div>
        </div>
      </header>

      <main className="content">
        <section className="content-section" id="about">
          <h2>About me</h2>
          <p>
            I hold two degrees: a Higher Vocational Education diploma in systems development and a
            bachelor's degree in analytical finance. I work across backend and frontend with Python,
            C#/.NET, React, JavaScript/TypeScript, SQL and REST APIs, and I have hands-on experience
            with Docker and version-controlled CI/CD flows.
          </p>
          <p>
            My finance background gives me a strong mathematical, data-driven foundation that makes
            collaboration with data scientists easier. Years in the public sector have made me
            comfortable in environments with high demands on security, confidentiality and careful
            documentation. I'm curious, a quick learner, and see mentoring and knowledge sharing as
            the natural way to grow into a team and deliver clean, stable code.
          </p>
        </section>

        <section className="content-section" id="experience">
          <h2>Experience</h2>
          <div className="timeline">
            {experience.map((job) => (
              <article className="timeline-item" key={job.role + job.period}>
                <p className="period">{job.period}</p>
                <h3>{job.role}</h3>
                <p className="org">{job.org}</p>
                <ul>{job.points.map((p) => <li key={p}>{p}</li>)}</ul>
              </article>
            ))}
          </div>
        </section>

        <section className="content-section" id="skills">
          <h2>Skills</h2>
          <div className="skills-grid">
            {skills.map((s) => (
              <div key={s.group}>
                <h3>{s.group}</h3>
                <div className="chips">{s.items.map((i) => <span className="chip" key={i}>{i}</span>)}</div>
              </div>
            ))}
          </div>
          <p className="muted">Languages: Swedish and English, fluent in speech and writing.</p>
        </section>

        <section className="content-section" id="education">
          <h2>Education</h2>
          <div className="timeline">
            {education.map((e) => (
              <article className="timeline-item" key={e.title}>
                <p className="period">{e.period}</p>
                <h3>{e.title}</h3>
                <p className="org">{e.place}</p>
                {e.note && <p className="muted">{e.note}</p>}
              </article>
            ))}
          </div>
        </section>

        <section className="content-section" id="interests">
          <h2>Beyond code</h2>
          <div className="interest-grid">
            {interests.map((i) => (
              <div key={i.title}>
                <h3>{i.title}</h3>
                <p>{i.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="content-section" id="contact">
          <h2>Contact</h2>
          <p>Want to talk about a role or a project? Get in touch.</p>
          <div className="button-group contact-buttons">
            <a className="section-btn dark" href="mailto:dwinalarsson@gmail.com">Email</a>
            <a className="section-btn dark" href="tel:0706145424">070 614 54 24</a>
            <a className="section-btn dark" href="https://www.linkedin.com/in/dwina-larsson/" target="_blank" rel="noreferrer">LinkedIn</a>
            <a className="section-btn dark" href="https://github.com/Dwina83" target="_blank" rel="noreferrer">GitHub</a>
          </div>
        </section>
      </main>

      <footer className="footer">© {new Date().getFullYear()} Dwina Larsson</footer>
    </div>
  );
}

export default App;