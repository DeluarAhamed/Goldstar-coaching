import {
  Header,
  Footer,
  Button,
  Steps,
  Testimonials,
  Newsletter,
  ServiceCards,
} from "./site";
import { EditorialFAQ, RelevantProof, TrustRail } from "./RevampBlocks";
export default function Home() {
  const proof = ["dieter", "pamela-palos", "robert", "monika", "pamela"];
  return (
    <main>
      <Header />
      <section className="home-hero home-hero-minimal">
        <div className="hero-content">
          <p className="kicker">
            Career coaching for international professionals
          </p>
          <h1>
            Career change feels easier when you don’t have to{" "}
            <em>figure it out alone.</em>
          </h1>
          <p className="hero-lead">
            Calm, practical coaching for international professionals who want
            more clarity, confidence and direction in their next career chapter.
          </p>
          <div className="hero-actions">
            <Button href="/book">Book a Free Intro Session</Button>
            <a href="/coaching-approach">See how coaching works →</a>
          </div>
          <div className="hero-proof">
            <div className="proof-portrait">
              {proof.map((x) => (
                <img src={`/client-${x}.png`} alt="" key={x} />
              ))}
            </div>
            <p>
              <b>Personal coaching with Nina</b>
              <small>Real words from professionals Nina has supported</small>
            </p>
            <div className="proof-stars">
              <b>Coaching since 2017</b>
              <small>English + German · ICF member</small>
            </div>
          </div>
        </div>
        <div className="hero-visual">
          <div className="portrait-card">
            <img
              src="/nina-headshot.png"
              alt="Nina Sterngold, career and expat coach"
            />
            <div>
              <b>Nina Sterngold</b>
              <small>Career & Expat Coach</small>
            </div>
          </div>
        </div>
      </section>
      <TrustRail />
      <section className="split intro-section">
        <p className="eyebrow">Who I help</p>
        <div>
          <h2>
            You don’t need to have the whole plan. You just need a place to
            start.
          </h2>
          <p className="large-copy">
            I work with international professionals, expats, job seekers and
            people in transition who feel stuck, overwhelmed or unsure which
            direction to take next.
          </p>
        </div>
      </section>
      <section className="nina-editorial">
        <div>
          <p className="eyebrow">A human conversation</p>
          <h2>Space to think clearly. Support to move forward.</h2>
          <p>
            You don’t need another generic framework. You need{" "}
            <b>thoughtful questions</b>, honest reflection, and{" "}
            <b>practical steps</b> shaped around your real life.
          </p>
          <Button href="/about">Meet Nina</Button>
        </div>
        <div className="cutout-stage">
          <span>Calm</span>
          <span>Practical</span>
          <span>Personal</span>
          <span className="float-star">✦</span>
          <span className="float-ring">◎</span>
          <img
            src="/nina-cutout.png"
            alt="Nina Sterngold in a coaching conversation"
          />
        </div>
      </section>
      <section className="problem-band">
        <p className="eyebrow">Does this feel familiar?</p>
        <div className="problem-grid">
          <article>
            <span>01</span>
            <h3>You’ve outgrown your role</h3>
            <p>
              Your work no longer fits, but the next step still feels unclear.
            </p>
          </article>
          <article>
            <span>02</span>
            <h3>Too many possibilities</h3>
            <p>
              You have ideas, but struggle to choose a direction and commit to
              it.
            </p>
          </article>
          <article>
            <span>03</span>
            <h3>Your confidence dipped</h3>
            <p>
              A move, job search or career pause has made it harder to see your
              value.
            </p>
          </article>
        </div>
      </section>
      <ServiceCards />
      <section className="process">
        <div>
          <p className="eyebrow">How coaching works</p>
          <h2>
            A thoughtful process that turns uncertainty into forward movement.
          </h2>
        </div>
        <Steps />
      </section>
      <RelevantProof />
      <Testimonials />
      <section className="home-resources">
        <header>
          <p className="eyebrow">Ideas for your next chapter</p>
          <h2>Thoughtful resources for making change feel more manageable.</h2>
        </header>
        <div>
        <a href="/resources/explore-a-new-career-direction">
          <figure><img src="/resources/career-change.png" alt="Abstract paths representing a considered career change" loading="lazy" /></figure>
            <span>Career clarity · 7 min</span>
            <h3>
              How to explore a new direction without making a dramatic leap
            </h3>
            <b>Read the reflection ↗</b>
          </a>
        <a href="/resources/rebuild-confidence-after-moving-abroad">
          <figure><img src="/resources/expat-careers.png" alt="Overlapping forms representing identity and belonging abroad" loading="lazy" /></figure>
            <span>Expat careers · 6 min</span>
            <h3>
              Rebuilding professional confidence after an international move
            </h3>
            <b>Read the reflection ↗</b>
          </a>
        <a href="/resources/create-a-calmer-job-search-rhythm">
          <figure><img src="/resources/job-search.png" alt="A focused sequence representing a calmer job search" loading="lazy" /></figure>
            <span>Job search · 5 min</span>
            <h3>A calmer, more focused weekly job-search rhythm</h3>
            <b>Read the reflection ↗</b>
          </a>
        </div>
      </section>
      <EditorialFAQ />
      <Newsletter />
      <section className="final-cta">
        <p className="eyebrow">Your next chapter</p>
        <h2>Ready to find your next direction?</h2>
        <p>
          Let’s talk about where you are now, what you want to change, and how
          coaching could help.
        </p>
        <Button href="/book" light>
          Book a Free Intro Session
        </Button>
      </section>
      <Footer />
    </main>
  );
}
