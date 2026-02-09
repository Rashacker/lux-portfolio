export default function Home() {
  return (
    <div className="page">
      <header className="nav">
        <div className="container nav-inner">
          <div className="brand">
            <div className="brand-mark" aria-hidden="true" />
            LUX Atelier
          </div>
          <nav className="nav-links" aria-label="Primary">
            <a href="#features">Features</a>
            <a href="#portfolio">Portfolio</a>
            <a href="#pricing">Pricing</a>
            <a href="#faq">FAQ</a>
          </nav>
          <a className="nav-cta" href="#contact">
            Book a consult
          </a>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="container hero-grid">
            <div>
              <p className="eyebrow reveal">Luxury digital ateliers</p>
              <h1 className="hero-title reveal delay-1">
                Crafted web experiences that feel <span>effortless</span>.
              </h1>
              <p className="hero-subtitle reveal delay-2">
                We design high-conversion landing pages and portfolio systems
                for founders, studios, and premium brands. Every detail is tuned
                for trust, clarity, and a luxurious first impression.
              </p>
              <div className="hero-actions reveal delay-3">
                <a className="btn btn-primary" href="#pricing">
                  View packages
                </a>
                <a className="btn btn-outline" href="#portfolio">
                  See the work
                </a>
              </div>
            </div>
            <div className="hero-card reveal delay-4">
              <div className="hero-metric">
                <div className="metric">
                  <h3>12+</h3>
                  <p>Luxury launches this year</p>
                </div>
                <div className="metric">
                  <h3>3.8x</h3>
                  <p>Average conversion lift</p>
                </div>
                <div className="metric">
                  <h3>6</h3>
                  <p>Weekend-ready delivery</p>
                </div>
                <div className="metric">
                  <h3>98%</h3>
                  <p>Client retention rate</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="features">
          <div className="container">
            <div className="section-title">
              <h2>Signature features</h2>
              <p>
                Elegant systems that convert without feeling salesy. Designed
                for premium positioning.
              </p>
            </div>
            <div className="feature-grid">
              <article className="feature-card">
                <h3>Luxury brand language</h3>
                <p>
                  Curated typography, pacing, and tone that mirrors the way
                  high-end clients make decisions.
                </p>
              </article>
              <article className="feature-card">
                <h3>Portfolio narrative</h3>
                <p>
                  Case studies structured to guide attention and highlight the
                  craft behind every deliverable.
                </p>
              </article>
              <article className="feature-card">
                <h3>Conversion architecture</h3>
                <p>
                  Strategic sections, pricing psychology, and micro-copy tuned
                  for premium engagement.
                </p>
              </article>
              <article className="feature-card">
                <h3>Concierge launch</h3>
                <p>
                  From concept to deployment, you get a white-glove process with
                  clear milestones.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="section" id="portfolio">
          <div className="container">
            <div className="section-title">
              <h2>Portfolio selections</h2>
              <p>
                A curated mix of product, editorial, and studio experiences.
              </p>
            </div>
            <div className="portfolio-grid">
              {[
                {
                  title: "Nocturne Estates",
                  tag: "Real estate",
                  desc: "Immersive property narrative with private preview funnel.",
                },
                {
                  title: "Velvet Room",
                  tag: "Hospitality",
                  desc: "Reservation-focused landing with luxury concierge onboarding.",
                },
                {
                  title: "Lucent Atelier",
                  tag: "Creative studio",
                  desc: "Portfolio system with modular case studies and press kit.",
                },
                {
                  title: "Aurum Labs",
                  tag: "Wellness",
                  desc: "Premium membership launch with limited-tier pricing.",
                },
              ].map((item) => (
                <article className="portfolio-card" key={item.title}>
                  <div className="portfolio-image">{item.title}</div>
                  <div className="portfolio-body">
                    <span className="tag">{item.tag}</span>
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="pricing">
          <div className="container">
            <div className="section-title">
              <h2>Pricing</h2>
              <p>
                Choose the level of presence you want to make. All packages
                include strategy, copy direction, and launch support.
              </p>
            </div>
            <div className="pricing-grid">
              <article className="pricing-card">
                <span className="tag">Essentials</span>
                <h3>Landing Prelude</h3>
                <p className="price">$4,800</p>
                <ul>
                  <li>Single-page landing</li>
                  <li>3 conversion sections</li>
                  <li>Brand tone guidelines</li>
                </ul>
              </article>
              <article className="pricing-card featured">
                <span className="tag">Signature</span>
                <h3>Portfolio Suite</h3>
                <p className="price">$9,600</p>
                <ul>
                  <li>Landing + portfolio</li>
                  <li>4 case study layouts</li>
                  <li>High-touch launch week</li>
                </ul>
              </article>
              <article className="pricing-card">
                <span className="tag">Estate</span>
                <h3>Full Presence</h3>
                <p className="price">$14,500</p>
                <ul>
                  <li>Multi-page experience</li>
                  <li>Content systems + CMS</li>
                  <li>Ongoing optimization</li>
                </ul>
              </article>
            </div>
          </div>
        </section>

        <section className="section" id="faq">
          <div className="container">
            <div className="section-title">
              <h2>FAQ</h2>
              <p>Answers to the questions clients ask before booking.</p>
            </div>
            <div className="faq-grid">
              <details>
                <summary>How long does a luxury launch take?</summary>
                <p>
                  Most projects ship in 4 to 6 weeks depending on assets and
                  approvals. We share a clear timeline on kickoff.
                </p>
              </details>
              <details>
                <summary>Do you provide copywriting?</summary>
                <p>
                  We provide structured messaging, narrative frameworks, and
                  editing. Full copywriting can be added on request.
                </p>
              </details>
              <details>
                <summary>Can you work with an existing brand?</summary>
                <p>
                  Yes. We can refine your current identity or elevate it while
                  keeping core brand elements intact.
                </p>
              </details>
            </div>
          </div>
        </section>

        <section className="container cta" id="contact">
          <div>
            <h2>Reserve your private build slot</h2>
            <p>
              We take on a limited number of launches each quarter. Share a few
              details and we will reply within 24 hours.
            </p>
            <div className="contact-note">
              Prefer email? hello@luxatelier.com
            </div>
          </div>
          <form
            className="contact-form"
            action="https://formspree.io/f/xaqdnadv"
            method="POST"
          >
            <div className="field">
              <label htmlFor="name">Name</label>
              <input id="name" name="name" type="text" placeholder="Your name" required />
            </div>
            <div className="field">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@company.com"
                required
              />
            </div>
            <div className="field">
              <label htmlFor="company">Company</label>
              <input id="company" name="company" type="text" placeholder="Brand or studio" />
            </div>
            <div className="field">
              <label htmlFor="message">Project details</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder="Tell us about your launch, timeline, and goals."
                required
              />
            </div>
            <button className="btn btn-primary" type="submit">
              Request a consult
            </button>
          </form>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          © 2026 LUX Atelier. Crafted for luxury brands worldwide.
        </div>
      </footer>
    </div>
  );
}
