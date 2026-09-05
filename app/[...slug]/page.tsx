import { redirect } from "next/navigation";
import { Header, Footer, Button, Newsletter, Testimonials } from "../site";
import {
  BookingBand,
  EditorialFAQ,
  RelevantProof,
  SignatureStory,
  TrustRail,
} from "../RevampBlocks";
import ArticleTOC from "../ArticleTOC";
import ResourceLibrary from "../ResourceLibrary";

type PageData = {
  label: string;
  title: string;
  intro: string;
  recognition: string;
  support: [string, string][];
};
const pages: Record<string, PageData> = {
  "career-coaching": {
    label: "Career coaching",
    title:
      "Career coaching for professionals ready for more clarity, confidence and direction.",
    intro:
      "You may know that your current path no longer fits without knowing exactly what should replace it. Coaching gives you room to understand the question before forcing an answer.",
    recognition:
      "Your role looks right on paper, but something feels misaligned. You have options, yet choosing one feels heavy. Or a transition has made it harder to trust what you bring.",
    support: [
      [
        "Direction and priorities",
        "Separate the expectations around you from what genuinely matters now.",
      ],
      [
        "Strengths and possibilities",
        "Recognise the patterns in your best work and translate them into new options.",
      ],
      [
        "Decisions and confidence",
        "Make choices with better evidence instead of waiting for perfect certainty.",
      ],
      [
        "Practical momentum",
        "Use conversations, experiments and positioning work to move forward.",
      ],
    ],
  },
  "expat-coaching": {
    label: "Expat coaching",
    title:
      "Expat coaching for international professionals navigating change, identity and career direction.",
    intro:
      "Living abroad can change more than where you work. It can reshape confidence, belonging, relationships and what a meaningful career looks like now.",
    recognition:
      "You may be rebuilding a network, adapting to unfamiliar workplace norms, reconsidering a role after relocation or finding that an old professional identity no longer fits.",
    support: [
      [
        "Settling into change",
        "Make sense of the emotional and practical layers of relocation.",
      ],
      [
        "International career questions",
        "Explore work that fits both your experience and your present context.",
      ],
      [
        "Identity and belonging",
        "Reconnect with strengths when familiar reference points have shifted.",
      ],
      [
        "Network and decisions",
        "Build relationships and weigh whether to stay, change or move again.",
      ],
    ],
  },
  "job-search-coaching": {
    label: "Job search coaching",
    title:
      "Job search coaching to help you position yourself with more clarity and confidence.",
    intro:
      "A focused search begins before the application. Together, we clarify what you are targeting, why you fit and which actions are worth your energy.",
    recognition:
      "Scattered applications, unclear positioning and low response rates can make a capable person feel stuck. More activity is not always the answer; a clearer system often is.",
    support: [
      [
        "Target roles and companies",
        "Define a focused market rather than searching everywhere at once.",
      ],
      [
        "CV and positioning",
        "Translate your experience into a specific and credible value proposition.",
      ],
      [
        "Networking strategy",
        "Create human conversations without making outreach feel transactional.",
      ],
      [
        "Interview preparation",
        "Tell relevant stories with clarity, confidence and useful detail.",
      ],
    ],
  },
  "linkedin-coaching": {
    label: "LinkedIn coaching",
    title:
      "LinkedIn coaching to make your professional story clearer, stronger and more visible.",
    intro:
      "Your profile should help the right people quickly understand what you do, what you bring and where you want to go next.",
    recognition:
      "Your experience may be substantial while the profile still reads like a list of duties. The work is not inventing a brand; it is finding the clearest thread through what is already true.",
    support: [
      [
        "Headline and positioning",
        "Give readers a useful reason to understand your work beyond a job title.",
      ],
      [
        "About narrative",
        "Connect experience, strengths and future direction in your own voice.",
      ],
      [
        "Experience storytelling",
        "Show contribution and context without sounding inflated or generic.",
      ],
      [
        "Visibility and networking",
        "Build a sustainable approach to conversations, content and professional relationships.",
      ],
    ],
  },
  "coaching-approach": {
    label: "Coaching approach",
    title: "A calm, practical coaching space for your next chapter.",
    intro:
      "Working with Nina combines thoughtful reflection with grounded action. You will be supported, challenged and always treated as the expert on your own life.",
    recognition:
      "A coaching session is a human conversation with purpose: room to slow down, notice what is really happening and leave with something useful to explore or do.",
    support: [
      [
        "Calm attention",
        "No pressure to perform or arrive with a perfectly formed goal.",
      ],
      [
        "Honest reflection",
        "Questions that help you notice patterns, assumptions and possibilities.",
      ],
      [
        "Practical action",
        "Small experiments turn insight into evidence and forward movement.",
      ],
      [
        "Shared direction",
        "We agree what would make the work useful and revisit it together.",
      ],
    ],
  },
  about: {
    label: "About Nina",
    title: "Meet Nina Sterngold.",
    intro:
      "Career & Expat Coach for professionals navigating meaningful change — with an international perspective, leadership experience and a calm, practical way of working.",
    recognition:
      "Work is never only work. It connects to confidence, belonging, identity and the life you want to build. That understanding shapes how Nina listens and coaches.",
    support: [
      [
        "Career and leadership",
        "Experience of organisations, international teams and the realities of professional life.",
      ],
      [
        "Cross-cultural perspective",
        "An understanding of how relocation can reshape work, identity and confidence.",
      ],
      [
        "Coaching since 2017",
        "Thoughtful support grounded in reflection, responsibility and action.",
      ],
      [
        "English + German",
        "Space to think and speak in the language that feels most natural.",
      ],
    ],
  },
};

const articles = [
  {
    slug: "career-no-longer-feels-like-yours",
    category: "Career clarity",
    title: "Five questions to ask when your career no longer feels like yours",
    excerpt:
      "A reflective place to begin when something feels wrong but the next direction is not clear.",
    time: "7 min read",
    image: "/nina-headshot-soft.png",
  },
  {
    slug: "explore-a-new-career-direction",
    category: "Career change",
    title: "How to explore a new direction without making a dramatic leap",
    excerpt:
      "Use small, informative experiments to replace pressure with real-world evidence.",
    time: "7 min read",
    image: "/nina-cutout.png",
  },
  {
    slug: "rebuild-confidence-after-moving-abroad",
    category: "Expat careers",
    title: "Rebuilding professional confidence after an international move",
    excerpt:
      "Why relocation can disrupt professional identity and how to begin reconnecting with your value.",
    time: "6 min read",
    image: "/nina-headshot.png",
  },
  {
    slug: "create-a-calmer-job-search-rhythm",
    category: "Job search",
    title: "A calmer, more focused weekly job-search rhythm",
    excerpt:
      "A practical structure for moving beyond scattered applications and protecting your energy.",
    time: "5 min read",
    image: "/nina-cutout.png",
  },
  {
    slug: "linkedin-headline-is-not-your-job-title",
    category: "LinkedIn visibility",
    title: "Your LinkedIn headline is not your job title",
    excerpt:
      "A clearer way to help people understand what you do, what you bring and where you are going.",
    time: "5 min read",
    image: "/nina-headshot-soft.png",
  },
  {
    slug: "quiet-confidence-at-work",
    category: "Confidence at work",
    title: "What confidence looks like when it is quiet, not performative",
    excerpt: "Confidence can be grounded, specific and calm rather than loud.",
    time: "6 min read",
    image: "/nina-headshot.png",
  },
  { slug: "what-do-you-want-more-of-at-work", category: "Career clarity", title: "A better career question: what do you want more of?", excerpt: "Move beyond job-title thinking and notice the conditions that help you do your best work.", time: "5 min read", image: "/nina-cutout.png", theme: "6" },
  { slug: "values-that-belong-in-career-decisions", category: "Career clarity", title: "The values that belong in a practical career decision", excerpt: "A grounded way to use values without turning them into abstract words on a page.", time: "6 min read", image: "/nina-headshot.png", theme: "7" },
  { slug: "clarity-without-perfect-plan", category: "Career clarity", title: "Finding clarity without waiting for a perfect plan", excerpt: "How to create enough direction for the next useful step, even when the future is unfinished.", time: "6 min read", image: "/nina-headshot-soft.png", theme: "8" },
  { slug: "career-change-small-experiments", category: "Career change", title: "Small experiments that make a career change less risky", excerpt: "Test assumptions through conversations and projects before committing to a dramatic leap.", time: "7 min read", image: "/nina-cutout.png", theme: "9" },
  { slug: "tell-people-you-are-considering-change", category: "Career change", title: "How to tell people you are considering a career change", excerpt: "A thoughtful approach to asking for perspective without handing away your decision.", time: "5 min read", image: "/nina-headshot-soft.png", theme: "10" },
  { slug: "when-a-good-role-no-longer-fits", category: "Career change", title: "When a good role no longer feels like the right role", excerpt: "You can appreciate what a position gave you and still recognise that it is time to move.", time: "6 min read", image: "/nina-headshot.png", theme: "11" },
  { slug: "professional-identity-in-a-new-country", category: "Expat careers", title: "Rebuilding professional identity in a new country", excerpt: "Separate temporary disorientation from the strengths and experience that still travel with you.", time: "7 min read", image: "/nina-cutout.png", theme: "12" },
  { slug: "network-from-zero-abroad", category: "Expat careers", title: "How to rebuild a professional network from zero abroad", excerpt: "Start with curiosity, useful context and a manageable rhythm of genuine conversations.", time: "6 min read", image: "/nina-headshot-soft.png", theme: "13" },
  { slug: "expat-partner-career-question", category: "Expat careers", title: "The career question many expat partners quietly carry", excerpt: "Identity, ambition and family choices can coexist in a more honest professional conversation.", time: "7 min read", image: "/nina-headshot.png", theme: "14" },
  { slug: "choose-target-roles", category: "Job search", title: "Choose target roles before rewriting your CV", excerpt: "Clear targeting makes every later job-search decision more focused and useful.", time: "5 min read", image: "/nina-cutout.png", theme: "15" },
  { slug: "networking-without-asking-for-job", category: "Job search", title: "Networking without immediately asking for a job", excerpt: "Create conversations that are specific, respectful and genuinely informative.", time: "5 min read", image: "/nina-headshot.png", theme: "16" },
  { slug: "recover-from-job-search-rejection", category: "Job search", title: "How to recover focus after job-search rejection", excerpt: "Review what the process taught you without letting one outcome define your value.", time: "6 min read", image: "/nina-headshot-soft.png", theme: "17" },
  { slug: "write-a-linkedin-about-section", category: "LinkedIn visibility", title: "Write a LinkedIn About section that sounds like you", excerpt: "Connect credibility and direction in language that feels clear rather than performative.", time: "6 min read", image: "/nina-cutout.png", theme: "18" },
  { slug: "linkedin-profile-for-career-change", category: "LinkedIn visibility", title: "Position your LinkedIn profile for a career change", excerpt: "Build a bridge between the experience you have and the direction you want to explore.", time: "7 min read", image: "/nina-headshot-soft.png", theme: "19" },
  { slug: "linkedin-networking-rhythm", category: "LinkedIn visibility", title: "A sustainable LinkedIn networking rhythm", excerpt: "A calm weekly approach to visibility that does not require becoming a full-time creator.", time: "5 min read", image: "/nina-headshot.png", theme: "20" },
  { slug: "speak-about-your-value", category: "Confidence at work", title: "Speak about your value without overselling yourself", excerpt: "Use evidence and context to communicate contribution with more ease and precision.", time: "6 min read", image: "/nina-cutout.png", theme: "21" },
  { slug: "confidence-after-career-pause", category: "Confidence at work", title: "Rebuilding confidence after a career pause", excerpt: "Reconnect with capability through evidence, practice and conversations that restore perspective.", time: "7 min read", image: "/nina-headshot.png", theme: "22" },
  { slug: "uncertainty-is-not-incompetence", category: "Confidence at work", title: "Uncertainty is not the same as incompetence", excerpt: "Why a demanding transition can make capable professionals temporarily doubt what they know.", time: "5 min read", image: "/nina-headshot-soft.png", theme: "23" },
];

const legacy = [
  "career-no-longer-feels-like-yours",
  "explore-a-new-career-direction",
  "rebuild-confidence-after-moving-abroad",
  "create-a-calmer-job-search-rhythm",
  "linkedin-headline-is-not-your-job-title",
  "quiet-confidence-at-work",
];
const canonicalBase = "https://goldstar-coachingcom.vercel.app";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  const key = slug[0];
  const data = pages[key];
  const article =
    key === "resources"
      ? articles.find((item) => item.slug === slug[1])
      : undefined;
  const utilityTitles: Record<string, string> = {
    resources: "Career Resources for International Professionals | Goldstar Coaching",
    testimonials: "Client Stories and Testimonials | Goldstar Coaching",
    book: "Book a Free Intro Session with Nina Sterngold | Goldstar Coaching",
    contact: "Contact Nina Sterngold | Goldstar Coaching",
    "privacy-policy": "Privacy Policy | Goldstar Coaching",
  };
  const utilityDescriptions: Record<string, string> = {
    book: "Book a free 30-minute introductory conversation with Career and Expat Coach Nina Sterngold.",
    contact: "Contact Nina Sterngold about online career and expat coaching in English or German.",
    testimonials: "Read authentic recommendations about Nina Sterngold's empathy, clarity and practical professional support.",
    resources: "Practical career change, expat career, job search and LinkedIn guidance for international professionals.",
    "privacy-policy": "How Goldstar Coaching handles information shared through this website.",
  };
  const title = article
    ? `${article.title} | Goldstar Coaching`
    : data
      ? `${data.label} with Nina Sterngold | Goldstar Coaching`
      : utilityTitles[key] || "Goldstar Coaching";
  const description =
    article?.excerpt ||
    data?.intro || utilityDescriptions[key] ||
    "Calm, practical career and expat coaching for international professionals in English and German.";
  const path = "/" + slug.join("/");
  return {
    title,
    description,
    alternates: { canonical: canonicalBase + path },
    openGraph: {
      title,
      description,
      url: canonicalBase + path,
      images: ["/og.png"],
    },
  };
}

function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

function ServicePage({ route, data }: { route: string; data: PageData }) {
  return (
    <main>
      <Header />
      <section
        className={"page-hero service-page-hero revamp-hero route-" + route}
      >
        <div>
          <p className="kicker">{data.label}</p>
          <h1>{data.title}</h1>
          <p>{data.intro}</p>
          <Button href="/book">Book a Free Intro Session</Button>
          <TrustRail compact />
        </div>
        <aside>
          <img
            src={
              route === "about" || route === "coaching-approach"
                ? "/nina-cutout.png"
                : "/nina-headshot-soft.png"
            }
            alt="Nina Sterngold, Career and Expat Coach"
          />
          <span>
            Personal coaching
            <br />
            with Nina
          </span>
        </aside>
      </section>
      <section className="recognition">
        <p className="eyebrow">Does this sound familiar?</p>
        <h2>{data.recognition}</h2>
      </section>
      <SignatureStory route={route} />
      <section className="support-editorial">
        <header>
          <p className="eyebrow">What we can work on</p>
          <h2>Support shaped around the real question in front of you.</h2>
        </header>
        <div>
          {data.support.map(([title, copy], i) => (
            <article key={title}>
              <span>0{i + 1}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>
      <RelevantProof route={route} />
      <EditorialFAQ service={data.label.toLowerCase()} />
      <BookingBand />
      <Footer />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: data.label,
          provider: { "@type": "Person", name: "Nina Sterngold" },
          areaServed: "International",
          availableLanguage: ["English", "German"],
        }}
      />
    </main>
  );
}

function Resources() {
  return (
    <main>
      <Header />
      <section className="page-hero resource-hero revamp-resource-hero">
        <p className="kicker">Ideas for work and life in transition</p>
        <h1>A thoughtful resource library for clearer career decisions.</h1>
        <p>
          Practical reflections from Nina for international professionals
          navigating career change, job search, identity and visibility.
        </p>
      </section>
      <section className="featured-post">
        <div>
          <span>Featured · {articles[0].time}</span>
          <h2>{articles[0].title}</h2>
          <p>{articles[0].excerpt}</p>
          <a href={"/resources/" + articles[0].slug}>
            Read the featured article ↗
          </a>
        </div>
        <div className="editorial-shape">
          Pause.
          <br />
          Notice.
          <br />
          Choose.
        </div>
      </section>
      <ResourceLibrary articles={articles} />
      <Newsletter />
      <BookingBand />
      <Footer />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Goldstar Coaching Resources",
          hasPart: articles.map((a) => ({
            "@type": "Article",
            headline: a.title,
            url: canonicalBase + "/resources/" + a.slug,
          })),
        }}
      />
    </main>
  );
}

function Article({ article }: { article: (typeof articles)[number] }) {
  const related = articles
    .filter((item) => item.slug !== article.slug)
    .slice(0, 3);
  return (
    <main>
      <Header />
      <article className="blog-detail revamp-article">
        <header>
          <p className="kicker">
            {article.category} · {article.time}
          </p>
          <h1>{article.title}</h1>
          <p>{article.excerpt}</p>
          <div className="article-byline">
            <img src="/nina-headshot.png" alt="Nina Sterngold" />
            <span>
              <b>Nina Sterngold</b>
              <small>Career & Expat Coach</small>
            </span>
          </div>
        </header>
        <div className="article-reading">
          <ArticleTOC />
          <div>
            <p className="article-intro">
              Career questions often arrive with urgency. When the answer
              matters, it is tempting to search harder, make longer lists and
              ask more people what they would do. Clarity usually needs
              something quieter first.
            </p>
            <h2 id="listen">Listen to the question beneath the pressure.</h2>
            <p>
              Begin by separating the facts from the noise around them. What has
              changed? Which part of the situation is genuinely difficult? What
              are you afraid a decision might say about you? Naming the real
              tension reduces the number of problems you are trying to solve at
              once.
            </p>
            <p>
              You do not need to turn every uncomfortable week into a career
              crisis. At the same time, recurring frustration deserves
              attention. Notice what has persisted across different managers,
              projects or seasons.
            </p>
            <blockquote>
              Your next step does not need to be dramatic. It needs to make
              sense for you.
            </blockquote>
            <h2 id="patterns">Look for patterns in your best work.</h2>
            <p>
              Think about moments when you felt absorbed, useful or proud. Look
              beyond job titles. Perhaps you were making complexity
              understandable, helping a team move, building a relationship or
              creating structure where none existed. Those patterns often travel
              better than a specific role name.
            </p>
            <div className="reflection-box">
              <b>Try this</b>
              <p>
                Write down three pieces of work that felt meaningful. For each
                one, note what you were doing, who benefited and what capability
                you were using.
              </p>
            </div>
            <h2 id="experiment">
              Replace one big answer with a small experiment.
            </h2>
            <p>
              A conversation, a short project, a rewritten profile statement or
              a day spent shadowing another function can teach you more than
              another week of abstract thinking. A good experiment is small
              enough to do and specific enough to produce evidence.
            </p>
            <p>
              Evidence builds confidence because it makes the next decision less
              imaginary. You are no longer asking whether a whole new life might
              work; you are learning which part of a possibility deserves
              another step.
            </p>
            <h2 id="reflect">Reflect, adjust and keep the decision yours.</h2>
            <p>
              After an experiment, ask what surprised you, what gave you energy
              and what concern remains. Direction emerges through a series of
              informed choices. It does not need to arrive as one perfect
              revelation.
            </p>
            <div className="article-cta">
              <h3>Want a calm place to apply this to your own career?</h3>
              <p>
                The free introductory session is a 30-minute conversation with
                no obligation to continue.
              </p>
              <Button href="/book">Book a Free Intro Session</Button>
            </div>
          </div>
          <aside className="article-side-cta">
            <img src="/nina-headshot-soft.png" alt="Nina Sterngold" />
            <b>Not sure what comes next?</b>
            <p>Bring the unfinished question. We can start there.</p>
            <Button href="/book">Talk with Nina</Button>
          </aside>
        </div>
      </article>
      <section className="related-reading">
        <div className="section-head">
          <p className="eyebrow">Continue reading</p>
          <h2>Related reflections</h2>
        </div>
        <div>
          {related.map((item) => (
            <a href={"/resources/" + item.slug} key={item.slug}>
              <figure><img src={item.image} alt="" loading="lazy" /></figure>
              <span>{item.category}</span>
              <h3>{item.title}</h3>
              <b>Read article ↗</b>
            </a>
          ))}
        </div>
      </section>
      <Newsletter />
      <Footer />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: article.title,
          description: article.excerpt,
          author: { "@type": "Person", name: "Nina Sterngold" },
          mainEntityOfPage: canonicalBase + "/resources/" + article.slug,
        }}
      />
    </main>
  );
}

function TestimonialPage() {
  return (
    <main>
      <Header />
      <section className="page-hero testimonial-hero">
        <p className="kicker">Client stories</p>
        <h1>
          Real words from people who found clarity, confidence and direction.
        </h1>
        <p>
          Recommendations shared by people who have experienced Nina’s empathy,
          practical thinking and steady support.
        </p>
      </section>
      <RelevantProof />
      <Testimonials />
      <section className="client-values">
        <p className="eyebrow">What people consistently notice</p>
        <h2>Empathy that creates trust. Clarity that creates movement.</h2>
        <div>
          <span>Open and honest reflection</span>
          <span>A patient, welcoming presence</span>
          <span>Structured, goal-oriented support</span>
          <span>Reliability and genuine care</span>
        </div>
      </section>
      <BookingBand />
      <Footer />
    </main>
  );
}

function BookPage() {
  return (
    <main className="book-flow">
      <Header />
      <section className="booking revamp-booking">
        <div>
          <p className="kicker">Free 30-minute intro session</p>
          <h1>Let’s talk about where you are now and what might come next.</h1>
          <p>
            A relaxed online conversation to share what is happening, clarify
            the question you want support with and see whether Nina’s approach
            feels right for you.
          </p>
          <ul>
            <li>No need to arrive with a perfect goal</li>
            <li>Confidential and personal</li>
            <li>No pressure or obligation to continue</li>
            <li>Available in English or German</li>
          </ul>
          <div className="mini-nina">
            <img src="/nina-headshot.png" alt="Nina Sterngold" />
            <span>
              <b>Nina Sterngold</b>
              <small>Career & Expat Coach</small>
            </span>
          </div>
        </div>
        <section className="booking-card" id="calendar">
          <p className="eyebrow">Choose your next step</p>
          <h2>Arrange your conversation with Nina.</h2>
          <p>
            The production booking calendar needs Nina’s confirmed scheduling
            URL. Until it is connected, use the direct email option below and
            Nina will help arrange a time.
          </p>
          <a
            className="button"
            href="mailto:hello@goldstar-coaching.com?subject=Free%20intro%20session"
          >
            Request an intro session <span>↗</span>
          </a>
          <small>hello@goldstar-coaching.com · Your message is private.</small>
        </section>
      </section>
      <Footer />
    </main>
  );
}

function PrivacyPage() {
  return <main><Header/><article className="legal-page"><p className="kicker">Privacy</p><h1>Privacy policy.</h1><p>Goldstar Coaching respects the privacy of people who visit this website or contact Nina about coaching.</p><h2>Information you choose to share</h2><p>If you send an email or use a contact form, the information you provide is used to respond to your enquiry and communicate about coaching. Please avoid sharing sensitive personal information before a confidential conversation has been arranged.</p><h2>Website services</h2><p>This website may use essential hosting and security services required to deliver the site reliably. A scheduling provider will only be added once its production details and privacy terms are confirmed.</p><h2>Your questions</h2><p>For questions about information you have shared, email <a href="mailto:hello@goldstar-coaching.com">hello@goldstar-coaching.com</a>.</p></article><Footer/></main>;
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  const key = slug[0];
  if (key === "resources" && slug[1] && /^\d+$/.test(slug[1]))
    redirect("/resources/" + legacy[Number(slug[1]) % legacy.length]);
  if (key === "resources" && slug[1]) {
    const article =
      articles.find((item) => item.slug === slug[1]) || articles[0];
    return <Article article={article} />;
  }
  if (pages[key]) return <ServicePage route={key} data={pages[key]} />;
  if (key === "resources") return <Resources />;
  if (key === "testimonials") return <TestimonialPage />;
  if (key === "book") return <BookPage />;
  if (key === "privacy-policy") return <PrivacyPage />;
  if (key === "contact")
    return (
      <main>
        <Header />
        <section className="contact-page">
          <div>
            <p className="kicker">Contact Nina</p>
            <h1>Have a question before booking?</h1>
            <p>
              Online coaching is available internationally in English and
              German.
            </p>
            <a href="mailto:hello@goldstar-coaching.com">
              hello@goldstar-coaching.com ↗
            </a>
          </div>
          <form>
            <label>
              Name
              <input name="name" autoComplete="name" />
            </label>
            <label>
              Email
              <input name="email" type="email" autoComplete="email" />
            </label>
            <label>
              How can I help?
              <textarea name="message" rows={7} />
            </label>
            <button type="button">Send message ↗</button>
          </form>
        </section>
        <Footer />
      </main>
    );
  return (
    <ServicePage route="career-coaching" data={pages["career-coaching"]} />
  );
}
