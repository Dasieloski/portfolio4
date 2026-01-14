import ProjectsGrid from "@/components/projects-grid"
import ContactForm from "@/components/contact-form"

export default function Home() {
  return (
    <>
      <nav>
        <div
          className="container"
          style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%" }}
        >
          <a href="#" className="logo">
            DASIEL
          </a>
          <div className="nav-links">
            <a href="#work">Proyectos</a>
            <a href="#services">Servicios</a>
            <a href="#contact">Contacto</a>
          </div>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-text">
          <p className="hero-tagline">FULLSTACK DEVELOPER // CODE & DESIGN</p>
          <h1>DASIEL</h1>
          <p style={{ fontSize: "1.2rem", maxWidth: "700px", marginBottom: "30px" }}>
            Desarrollador Fullstack especializado en crear aplicaciones web completas. Desde el frontend hasta el backend,
            construyo soluciones escalables y modernas que combinan excelencia técnica con diseño funcional.
          </p>
          <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
            <a href="#work" className="brutal-btn">
              VER MIS PROYECTOS
            </a>
            <a href="/Dasiel%20Torres%20CV(Espa%C3%B1ol).pdf" download className="brutal-btn brutal-btn-cv">
              DESCARGAR CV
            </a>
          </div>
        </div>
        <div className="hero-visual">
          <div className="code-block">
            <div className="code-header">
              <span className="code-dot"></span>
              <span className="code-dot"></span>
              <span className="code-dot"></span>
              <span className="code-title">stack.ts</span>
            </div>
            <pre className="code-content">
{`const stack = {
  frontend: [
    "HTML5/CSS3",
    "JavaScript/TypeScript",
    "React/Next.js",
    "Tailwind/SASS",
    "Redux/Zustand"
  ],
  backend: [
    "Node.js/Nest.js",
    "REST API/GraphQL",
    "MongoDB/PostgreSQL",
    "Firebase/Supabase"
  ],
  tools: [
    "Git/GitHub",
    "Docker",
    "AWS/Vercel",
    "Jest/Cypress",
    "CI/CD/GitHub Actions"
  ]
};`}
            </pre>
          </div>
          <div className="geometric-shapes">
            <div className="shape shape-1"></div>
            <div className="shape shape-2"></div>
            <div className="shape shape-3"></div>
          </div>
        </div>
      </section>

      <div className="marquee">
        <div className="marquee-content">
          GIT // GITHUB // DOCKER // AWS // VERCEL // JEST // CYPRESS // CI/CD // GITHUB ACTIONS // GIT // GITHUB //
          DOCKER // AWS // VERCEL // JEST // CYPRESS // CI/CD // GITHUB ACTIONS //
        </div>
      </div>

      <h2 className="section-title" id="work">
        Proyectos Destacados
      </h2>

      <ProjectsGrid />

      <section className="services" id="services">
        <div className="service-box">
          <h3>FRONTEND</h3>
          <ul className="skill-list">
            <li className="skill-item">
              <span>HTML5 / CSS3</span>
            </li>
            <li className="skill-item">
              <span>JavaScript / TypeScript</span>
            </li>
            <li className="skill-item">
              <span>React / Next.js</span>
            </li>
            <li className="skill-item">
              <span>Tailwind CSS / SASS</span>
            </li>
            <li className="skill-item">
              <span>Redux / Zustand</span>
            </li>
          </ul>
        </div>
        <div className="service-box">
          <h3>BACKEND</h3>
          <ul className="skill-list">
            <li className="skill-item">
              <span>Node.js / Nest.js</span>
            </li>
            <li className="skill-item">
              <span>REST API / GraphQL</span>
            </li>
            <li className="skill-item">
              <span>MongoDB / PostgreSQL</span>
            </li>
            <li className="skill-item">
              <span>Firebase / Supabase</span>
            </li>
          </ul>
        </div>
        <div className="service-box">
          <h3>HERRAMIENTAS</h3>
          <ul className="skill-list">
            <li className="skill-item">
              <span>Git / GitHub</span>
            </li>
            <li className="skill-item">
              <span>Docker / Kubernetes</span>
            </li>
            <li className="skill-item">
              <span>AWS / Vercel / Netlify</span>
            </li>
            <li className="skill-item">
              <span>Jest / Cypress</span>
            </li>
            <li className="skill-item">
              <span>CI/CD / GitHub Actions</span>
            </li>
          </ul>
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="contact-info">
          <h2 style={{ fontSize: "5rem", marginBottom: "20px" }}>HABLEMOS.</h2>
          <p style={{ fontSize: "1.5rem", marginBottom: "40px" }}>
            ¿Tienes un proyecto en mente? Estoy disponible para colaborar.
          </p>
          <p>
            <strong>EMAIL:</strong> dasieldev@gmail.com
          </p>
          <p>
            <strong>UBICACIÓN:</strong> Remoto / Disponible Globalmente
          </p>
          <div style={{ marginTop: "40px", display: "flex", gap: "20px", flexWrap: "wrap" }}>
            <a
              href="https://github.com/dasieloski"
              style={{ color: "var(--accent)", textDecoration: "none", fontWeight: 700 }}
              target="_blank"
              rel="noreferrer"
            >
              GITHUB
            </a>
            <a
              href="https://wa.me/5354710329?text=Hola%20Dasiel%2C%20me%20gustar%C3%ADa%20hablar%20sobre%20un%20proyecto."
              style={{ color: "var(--secondary)", textDecoration: "none", fontWeight: 700 }}
              target="_blank"
              rel="noreferrer"
            >
              WHATSAPP
            </a>
            <a
              href="https://instagram.com/dasieloski"
              style={{ color: "var(--primary)", textDecoration: "none", fontWeight: 700 }}
              target="_blank"
              rel="noreferrer"
            >
              INSTAGRAM
            </a>
          </div>
        </div>
        <div className="contact-form">
          <ContactForm />
        </div>
      </section>

      <footer>
        <p>© 2026 DASIEL. DESARROLLADOR FULLSTACK.</p>
        <div style={{ marginTop: "20px", fontSize: "0.8rem" }}>CONSTRUIDO CON NEXT.JS, REACT Y TYPESCRIPT.</div>
      </footer>
    </>
  )
}
