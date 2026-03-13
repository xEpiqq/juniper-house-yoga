import './App.css'

const offerings = [
  {
    title: 'Foundations Course',
    description:
      'A six-week path for new students who want alignment, breathwork, and confidence before joining faster-paced classes.',
  },
  {
    title: 'Teacher Training',
    description:
      'Weekend intensives for aspiring instructors and committed practitioners ready to deepen sequencing, anatomy, and cueing.',
  },
  {
    title: 'Private Sessions',
    description:
      'One-on-one coaching for stress relief, mobility recovery, and personalized home practice planning.',
  },
]

const schedule = [
  { day: 'Monday', className: 'Sunrise Flow', time: '6:30 AM' },
  { day: 'Wednesday', className: 'Warm Vinyasa', time: '7:00 PM' },
  { day: 'Friday', className: 'Mobility + Restore', time: '5:30 PM' },
  { day: 'Saturday', className: 'Teacher Training Lab', time: '9:00 AM' },
]

const highlights = [
  'Small-group classes with individual form coaching',
  'Utah County community with beginner-friendly energy',
  'Breath, strength, and mobility training in one practice',
]

const testimonials = [
  {
    quote:
      'I came in stiff, burned out, and skeptical. Six weeks later I was sleeping better and finally felt strong in my own body again.',
    name: 'Maya, Lehi',
  },
  {
    quote:
      'The teacher training felt serious without being intimidating. I left with real structure, not just inspiration.',
    name: 'Taylor, Provo',
  },
]

function App() {
  return (
    <main className="page-shell">
      <section className="hero-section">
        <div className="hero-copy">
          <p className="eyebrow">Utah County Yoga Training</p>
          <h1>Build a grounded practice that changes how you move and teach.</h1>
          <p className="hero-text">
            Studio classes, teacher training, and private coaching for students
            across Provo, Orem, Lehi, and the rest of Utah County.
          </p>
          <div className="hero-actions">
            <a href="#programs" className="primary-link">
              Explore Programs
            </a>
            <a href="#visit" className="secondary-link">
              Visit the Studio
            </a>
          </div>
          <ul className="highlight-list" aria-label="Studio highlights">
            {highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="hero-panel" aria-label="Studio overview">
          <div className="stat-card">
            <span className="stat-value">12</span>
            <span className="stat-label">students max per class</span>
          </div>
          <div className="hero-panel-copy">
            <p className="panel-kicker">Spring Enrollment</p>
            <h2>Move with precision. Teach with confidence.</h2>
            <p>
              Our training blends intelligent sequencing, mobility work, nervous
              system downregulation, and practical teaching reps.
            </p>
          </div>
          <div className="badge-row">
            <span>Beginner welcome</span>
            <span>Weekend training</span>
            <span>Local community</span>
          </div>
        </div>
      </section>

      <section className="content-band" id="programs">
        <div className="section-heading">
          <p className="eyebrow">Programs</p>
          <h2>Training designed for real life in Utah County.</h2>
        </div>
        <div className="offer-grid">
          {offerings.map((offering) => (
            <article className="offer-card" key={offering.title}>
              <h3>{offering.title}</h3>
              <p>{offering.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="split-section">
        <div className="schedule-card">
          <p className="eyebrow">Weekly Rhythm</p>
          <h2>Simple schedule. Serious instruction.</h2>
          <div className="schedule-list">
            {schedule.map((item) => (
              <div className="schedule-row" key={`${item.day}-${item.className}`}>
                <span>{item.day}</span>
                <strong>{item.className}</strong>
                <span>{item.time}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="notes-card">
          <p className="eyebrow">Why Students Stay</p>
          <h2>A studio that feels calm without feeling passive.</h2>
          <p>
            Every class is built to help students breathe better, move better,
            and understand why a sequence works. That means less guesswork and
            more progress.
          </p>
          <p>
            Whether you want a steady weekly practice or you are preparing to
            teach, the emphasis stays the same: clarity, strength, and presence.
          </p>
        </div>
      </section>

      <section className="testimonial-section">
        <div className="section-heading">
          <p className="eyebrow">Community</p>
          <h2>What students say after training here.</h2>
        </div>
        <div className="testimonial-grid">
          {testimonials.map((testimonial) => (
            <blockquote className="testimonial-card" key={testimonial.name}>
              <p>{testimonial.quote}</p>
              <footer>{testimonial.name}</footer>
            </blockquote>
          ))}
        </div>
      </section>

      <section className="visit-section" id="visit">
        <div className="visit-copy">
          <p className="eyebrow">Visit</p>
          <h2>Serving Utah County with intentional yoga education.</h2>
          <p>
            Best fit for students in Provo, Orem, Lehi, American Fork, Pleasant
            Grove, and nearby communities who want more than a drop-in workout.
          </p>
        </div>
        <div className="visit-card">
          <p>Studio Focus</p>
          <ul>
            <li>Vinyasa and mobility-based yoga</li>
            <li>Teacher training intensives</li>
            <li>Private sessions and recovery support</li>
          </ul>
          <a href="mailto:hello@utahcountyyoga.com" className="primary-link">
            hello@utahcountyyoga.com
          </a>
        </div>
      </section>
    </main>
  )
}

export default App
