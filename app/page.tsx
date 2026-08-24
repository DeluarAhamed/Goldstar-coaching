const services = [
  { title: 'Career Coaching', href: 'https://www.goldstar-coaching.com/career-coaching', image: 'https://static.wixstatic.com/media/nsplsh_75434d4b78324831593338~mv2_d_4000_2667_s_4_2.jpg/v1/fill/w_267,h_181,al_c,q_80,enc_avif,quality_auto/nsplsh_75434d4b78324831593338~mv2_d_4000_2667_s_4_2.jpg' },
  { title: 'Expat Coaching', href: 'https://www.goldstar-coaching.com/kopie-von-career-coaching', image: 'https://static.wixstatic.com/media/bca27e_0e127690e6e445ab863534e7493ef8bf~mv2.jpg/v1/fill/w_267,h_181,al_c,q_80,enc_avif,quality_auto/WORKING%20ABROAD%20text%20written%20on%20yellow%20paper%20with%20notebook.jpg' },
  { title: 'Job Search Support', href: 'https://www.goldstar-coaching.com/kopie-von-career-coaching-1', image: 'https://static.wixstatic.com/media/nsplsh_61665731686874304e5373~mv2.jpg/v1/fill/w_267,h_181,al_c,q_80,enc_avif,quality_auto/Image%20by%20Markus%20Winkler.jpg' },
];

export default function Home() {
  return <main>
    <header className="site-header">
      <a className="brand" href="#home" aria-label="Goldstar Coaching home"><span className="brand-sun">✺</span><span><strong>GOLDSTAR</strong><small>COACHING</small></span></a>
      <nav aria-label="Main navigation"><a href="#home">Home</a><a href="#about">About me</a><a href="#services">Services</a><a href="#contact">Contact</a></nav>
      <a className="button header-cta" href="#intro">Free Intro Session</a>
    </header>

    <section id="home" className="hero"><div className="hero-copy"><h1>Everyone has<br />more than<br />one story</h1></div></section>
    <section className="story section-shell brush-bottom">
      <h2>Your story. Your career.</h2>
      <div className="narrow-copy">
        <p>Many people reach a turning point in their professional lives — they feel stuck, uncertain, or ready for a meaningful change.</p>
        <p>Career paths are rarely linear, and sometimes the direction we’ve taken no longer fits the person we’ve become. That disconnect can feel overwhelming — but it can also be an opportunity for growth and a chance to choose a new path that better suits who we are now.</p>
        <p>I support you in discovering what you truly want next and developing practical steps to get there — with clearer direction, increased confidence, and a plan that feels doable.</p>
        <p><strong>Together, we write your next chapter.</strong></p>
      </div>
    </section>

    <section id="about" className="about section-shell brush-bottom">
      <h2>About me</h2>
      <div className="about-grid">
        <div className="about-copy">
          <h3>Hi, I&apos;m Nina – nice to meet you!</h3>
          <p>I’m a certified coach with a strong background in international work and a deep interest in career transitions and professional growth.</p>
          <h3>What you can expect</h3>
          <p>I support professionals and organizations through career transitions, workplace challenges, and job search processes — especially in international contexts.</p>
          <p>My coaching combines:</p>
          <ul><li>Narrative and solution-focused professional coaching</li><li>6+ years advising people and companies on LinkedIn, personal branding, and career visibility</li><li>15+ years in leadership roles across international industries</li></ul>
          <p>We turn insight into practical progress: refining your LinkedIn profile, activating your network, and positioning your strengths authentically.</p>
          <h3>A little more about me</h3>
          <p>I’m originally from Germany and have lived and worked across Europe, South America, Asia, Africa, and the US. I now live in Amsterdam. I’ve been coaching since 2017 and am trained in ICF-accredited Life and Organizational Coaching programs.</p>
          <p><strong>Interested? Let’s connect for a free introductory session.</strong><br />I coach in German and English.</p>
          <a className="button" href="#intro">Book Your Free Intro Session</a>
        </div>
        <aside className="profile">
          <img src="https://static.wixstatic.com/media/bca27e_c1c2338069cc4b55bf390816c95d335c~mv2.jpg/v1/fill/w_414,h_600,al_c,q_80,enc_avif,quality_auto/web-Nina-038.jpg" alt="Coach and owner Nina Sterngold" />
          <div className="snack"><strong>You don’t have time for long newsletters — honestly, neither do I.</strong><p>One question. One small thought. Or one tiny exercise. Extremely short. No fluff. Still impactful.</p><a className="button" href="mailto:hello@goldstar-coaching.com?subject=Mind%20Snack%20Newsletter">Mind Snack Newsletter</a></div>
        </aside>
      </div>
    </section>

    <section id="services" className="services section-shell brush-bottom">
      <h2>Coaching for career and life transitions</h2>
      <div className="service-grid">{services.map(service => <a className="service-card" href={service.href} key={service.title}><img src={service.image} alt="" /><span>{service.title}</span></a>)}</div>
    </section>

    <section id="intro" className="intro section-shell">
      <h2>Let’s talk – your free introductory session</h2>
      <div className="intro-grid">
        <div><p>This 25-minute call is a chance to get to know each other, ask your questions, and see whether coaching with me is a good fit for you.</p><p>This conversation is ideal if you are exploring a new career direction, living abroad, looking for more confidence, or simply want a neutral person to listen.</p><p>You’ll leave with more clarity — and without any pressure to book further sessions.</p></div>
        <div className="checklist"><p>✓ Free of charge</p><p>✓ No strings attached</p><p>✓ Confidential &amp; personal</p><a className="button" href="https://cal.com/goldstar-coaching/free-introductury-session">Book Your Free Call</a></div>
        <img src="https://static.wixstatic.com/media/bca27e_c0784bd1cdd449c787cf34a3c0cc6e52~mv2.jpg/v1/fill/w_341,h_454,al_c,q_80,enc_avif,quality_auto/bca27e_c0784bd1cdd449c787cf34a3c0cc6e52~mv2.jpg" alt="Notebook ready for an introductory coaching call" />
      </div>
    </section>

    <footer id="contact">
      <div className="footer-grid">
        <div><h3>Find me on social media</h3><div className="social"><a href="https://www.linkedin.com/in/nina-sterngold-coach/" aria-label="LinkedIn">in</a><a href="https://www.xing.com/profile/Bettina_Sterngold/web_profiles" aria-label="Xing">X</a></div><p>© 2026 Goldstar Coaching.</p></div>
        <form><label>Name *<input name="name" required /></label><label>Email *<input name="email" type="email" required /></label><label>Subject<input name="subject" /></label><label>Message<textarea name="message" rows={5} /></label><button type="submit">Send</button></form>
      </div>
      <div className="legal"><a href="https://www.goldstar-coaching.com/privacy-policy">Privacy Policy</a><a href="https://www.goldstar-coaching.com/terms-conditions">Terms &amp; Conditions</a></div>
    </footer>
  </main>;
}
