import './App.css'

const classOptions = [
  {
    title: 'Foundations',
    description:
      'A welcoming track for brand-new students who want confidence, mobility, and a clear weekly rhythm.',
    detail: 'Mon + Wed • 7:00 PM • Slow flow and alignment',
  },
  {
    title: 'Strength Flow',
    description:
      'Athletic sequencing that builds heat, stability, and breath control without losing the grounding side of yoga.',
    detail: 'Tue + Thu • 6:00 AM • Power flow and core work',
  },
  {
    title: 'Restore + Release',
    description:
      'Longer holds, deep stretches, and nervous-system reset sessions for busy adults carrying stress and tension.',
    detail: 'Fri • 6:30 PM • Candlelit recovery practice',
  },
]

const benefits = [
  'Small classes with real coaching instead of a crowded drop-in feel',
  'Programs designed for Utah County professionals, parents, and beginners',
  'Weekly structure that helps students stay consistent and actually progress',
  'A calm studio culture focused on breath, mobility, posture, and strength',
]

const testimonials = [
  {
    quote:
      'I came in stiff, stressed, and honestly intimidated. Three weeks later I felt stronger, calmer, and way more at home in my body.',
    name: 'Megan, Lehi',
  },
  {
    quote:
      'This is the first yoga studio that made me feel coached instead of lost. The classes are beautiful but still practical.',
    name: 'Tyler, Provo',
  },
  {
    quote:
      'The evening restore sessions changed my sleep and my back pain more than anything else I tried this year.',
    name: 'Hailey, Orem',
  },
]

function App() {
  return (
    <div className="page-shell">
      <header className="hero">
        <nav className="topbar" aria-label="Primary">
          <div className="brand-lockup">
            <span className="brand-mark">JH</span>
            <div>
              <p className="eyebrow">Utah County yoga studio</p>
              <h1 className="brand-name">Juniper House Yoga</h1>
            </div>
          </div>
          <div className="topbar-links">
            <a href="#classes">Classes</a>
            <a href="#experience">Experience</a>
            <a href="#visit">Visit</a>
          </div>
        </nav>

        <div className="hero-grid">
          <section className="hero-copy">
            <p className="kicker">Grounded training for real life</p>
            <h2>
              Strong bodies, quieter minds, and a studio rhythm that actually
              fits Utah County.
            </h2>
            <p className="hero-text">
              Juniper House Yoga blends deep stretch, controlled strength, and
              breath-led movement for beginners, busy parents, athletes, and
              anyone ready to feel better in their body again.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#visit">
                Book an intro week
              </a>
              <a className="button button-secondary" href="#classes">
                Explore classes
              </a>
            </div>
            <ul className="hero-points">
              <li>Morning, evening, and recovery sessions</li>
              <li>Located for students across Provo, Orem, and Lehi</li>
              <li>First week built to help new students settle in fast</li>
            </ul>
          </section>

          <aside className="hero-card" aria-label="Weekly rhythm">
            <p className="card-label">This week at the studio</p>
            <div className="hero-card-main">
              <strong>Intro Week</strong>
              <span>$39 for unlimited classes</span>
            </div>
            <div className="schedule-strip">
              <div>
                <span>Tue</span>
                <strong>6:00 AM</strong>
                <p>Strength Flow</p>
              </div>
              <div>
                <span>Wed</span>
                <strong>7:00 PM</strong>
                <p>Foundations</p>
              </div>
              <div>
                <span>Fri</span>
                <strong>6:30 PM</strong>
                <p>Restore + Release</p>
              </div>
            </div>
            <p className="hero-card-note">
              A modern neighborhood studio for people who want yoga to feel
              supportive, structured, and sustainable.
            </p>
          </aside>
        </div>
      </header>

      <main>
        <section className="metrics" aria-label="Studio highlights">
          <article>
            <strong>3</strong>
            <span>signature class tracks</span>
          </article>
          <article>
            <strong>45-60</strong>
            <span>minute sessions built for consistency</span>
          </article>
          <article>
            <strong>Utah County</strong>
            <span>students from Provo, Orem, Lehi, and beyond</span>
          </article>
        </section>

        <section className="section" id="classes">
          <div className="section-heading">
            <p className="section-kicker">Class paths</p>
            <h3>Choose the rhythm your body needs right now.</h3>
            <p>
              Every track is designed to help students build consistency first,
              then flexibility, strength, and calm.
            </p>
          </div>

          <div className="class-grid">
            {classOptions.map((option) => (
              <article className="class-card" key={option.title}>
                <p className="class-detail">{option.detail}</p>
                <h4>{option.title}</h4>
                <p>{option.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section section-split" id="experience">
          <div className="experience-panel">
            <p className="section-kicker">Why students stay</p>
            <h3>
              This is yoga training that feels calm, but never vague or
              forgettable.
            </h3>
            <p>
              We coach breathing, mobility, balance, and muscular control in a
              way that makes the practice useful outside the studio too.
            </p>
          </div>

          <div className="benefit-list" role="list">
            {benefits.map((benefit) => (
              <div className="benefit-item" role="listitem" key={benefit}>
                <span className="benefit-dot" aria-hidden="true"></span>
                <p>{benefit}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section testimonials">
          <div className="section-heading">
            <p className="section-kicker">Student voices</p>
            <h3>What the studio feels like from the inside.</h3>
          </div>

          <div className="testimonial-grid">
            {testimonials.map((testimonial) => (
              <article className="testimonial-card" key={testimonial.name}>
                <p className="testimonial-quote">“{testimonial.quote}”</p>
                <span className="testimonial-name">{testimonial.name}</span>
              </article>
            ))}
          </div>
        </section>

        <section className="section visit-section" id="visit">
          <div className="visit-card">
            <p className="section-kicker">Visit the studio</p>
            <h3>Start with one focused week and see how your body responds.</h3>
            <p>
              Book your intro week, meet the instructors, and step into a calm
              practice that still challenges you.
            </p>
          </div>

          <div className="visit-panel">
            <div>
              <span className="visit-label">Studio vibe</span>
              <p>Warm, bright, intentional, and beginner-friendly</p>
            </div>
            <div>
              <span className="visit-label">Best for</span>
              <p>Beginners, stressed professionals, active adults, and parents</p>
            </div>
            <div>
              <span className="visit-label">Location</span>
              <p>Serving Utah County with easy access from Provo, Orem, and Lehi</p>
            </div>
            <a
              className="button button-primary button-block"
              href="mailto:hello@juniperhouseyoga.com"
            >
              Claim your intro week
            </a>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
