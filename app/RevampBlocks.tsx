import { Button } from './site';

export const serviceFacts = ['Coaching since 2017', 'English + German', 'ICF member', 'Online · international'];

export function TrustRail({ compact = false }: { compact?: boolean }) {
  return <div className={'revamp-trust ' + (compact ? 'is-compact' : '')}>{serviceFacts.map((fact, i) => <span key={fact}><b>0{i + 1}</b>{fact}</span>)}</div>;
}

const concepts: Record<string, { kicker: string; title: string; items: [string, string][] }> = {
  'career-coaching': { kicker: 'Your transition pathway', title: 'From “something has to change” to an informed next move.', items: [['Where you are', 'Name what no longer fits without rushing past it.'], ['What becomes clear', 'See the strengths, values and possibilities that matter now.'], ['What you can do next', 'Turn insight into focused conversations, experiments and decisions.']] },
  'expat-coaching': { kicker: 'The whole transition', title: 'Work × identity × place', items: [['Work', 'Rebuild professional direction in a different market and culture.'], ['Identity', 'Reconnect with who you are when familiar roles have shifted.'], ['Place', 'Make choices that honour the life you are building abroad.']] },
  'job-search-coaching': { kicker: 'A calmer search system', title: 'Focus before application volume.', items: [['01 · Target', 'Roles and organisations worth your attention.'], ['02 · Position', 'A clear value story across CV and LinkedIn.'], ['03 · Visibility', 'A network that creates useful conversations.'], ['04 · Apply', 'Focused applications and confident interviews.']] },
  'linkedin-coaching': { kicker: 'Your professional story', title: 'Experience is not the problem. The story may be unclear.', items: [['Before', 'A profile that lists responsibilities but hides your value.'], ['Clarity', 'A positioning thread connecting strengths, experience and direction.'], ['After', 'A credible profile that helps the right people understand you.']] },
  'coaching-approach': { kicker: 'How we work together', title: 'Thoughtful reflection. Grounded action.', items: [['Discover', 'Understand what is happening beneath the immediate question.'], ['Clarify', 'Identify the values, strengths and choices that matter.'], ['Plan', 'Shape a realistic direction and useful experiments.'], ['Take action', 'Move with support, feedback and room to adjust.']] },
  about: { kicker: 'The perspective behind the practice', title: 'A career shaped across cultures, leadership and coaching.', items: [['International perspective', 'First-hand understanding of how work and identity shift across cultures.'], ['Leadership experience', 'Grounded insight into organisations, teams and professional change.'], ['Coaching since 2017', 'A calm, curious practice focused on clarity and meaningful action.'], ['Goldstar Coaching', 'Personal support for professionals writing a more fitting next chapter.']] },
};

export function SignatureStory({ route }: { route: string }) {
  const concept = concepts[route];
  return <section className={'signature-story signature-' + route}>
    <header><p className="eyebrow">{concept.kicker}</p><h2>{concept.title}</h2></header>
    <div>{concept.items.map(([name, text], index) => <article key={name}><span>0{index + 1}</span><h3>{name}</h3><p>{text}</p></article>)}</div>
  </section>;
}

export function RelevantProof({ route }: { route?: string }) {
  const proof = route === 'career-coaching'
    ? ['/client-dieter.png', 'Dieter Hofer', '“Nina creates a space where real reflection becomes possible: open, honest and goal-oriented.”']
    : route === 'job-search-coaching' || route === 'linkedin-coaching'
      ? ['/client-monika.png', 'Monika Ruzicka Kenter', '“She combines strong commercial and marketing acumen with building genuine relationships.”']
      : ['/client-pamela-palos.png', 'Pamela Palos', '“Nina is distinguished by her patience and empathy. Everyone feels welcome and comfortable approaching her.”'];
  return <section className="proof-spotlight"><div><p className="eyebrow">A real recommendation</p><blockquote>{proof[2]}</blockquote><footer><img src={proof[0]} alt=""/><span><b>{proof[1]}</b><small>LinkedIn recommendation</small></span></footer></div><aside><p>What clients often value</p><strong>Clarity without pressure.</strong><strong>Empathy with direction.</strong><strong>Reflection that leads to action.</strong></aside></section>;
}

export function BookingBand() {
  return <section className="booking-band"><div><p className="eyebrow">A useful first conversation</p><h2>You do not need a perfect goal before you begin.</h2></div><div><p>The free 30-minute introduction is a calm place to share what is happening, name the question in front of you and see whether coaching feels like the right next step.</p><small>No pressure · Confidential · Online</small><Button href="/book" light>Book a Free Intro Session</Button></div></section>;
}

export function EditorialFAQ({ service = 'coaching' }: { service?: string }) {
  const questions = [
    ['Do I need a clear goal before booking?', 'No. Finding the right question is often the first useful part of coaching. The introductory session gives us room to explore what feels unclear.'],
    [`How can ${service} help me?`, 'We connect thoughtful reflection with practical next steps shaped around your situation, energy and goals.'],
    ['What happens in the free intro session?', 'We talk for 30 minutes about where you are, what you want support with and whether working together feels like a good fit. There is no obligation to continue.'],
    ['Can we work online and in German?', 'Yes. Coaching is available online for international professionals in English or German.'],
    ['How many sessions will I need?', 'That depends on the question and the depth of change you want to explore. We agree a focused rhythm together and review it as the work progresses.'],
  ];
  return <section className="faqs revamp-faq"><div><p className="eyebrow">Common questions</p><h2>What you may want to know before we talk.</h2></div><div>{questions.map(([q, a]) => <details key={q}><summary>{q}<span>+</span></summary><p>{a}</p></details>)}</div></section>;
}
