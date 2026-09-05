import type { Metadata } from 'next';
import './goldstar.css';
import Animations from './Animations';
import RelatedPosts from './RelatedPosts';
import PagePolish from './PagePolish';
export const metadata:Metadata={
  metadataBase:new URL('https://goldstar-coachingcom.vercel.app'),
  title:'Goldstar Coaching | Career & Expat Coaching with Nina Sterngold',
  description:'Calm, practical career and expat coaching for international professionals in English and German.',
  alternates:{canonical:'https://goldstar-coachingcom.vercel.app/'},
  openGraph:{title:'Goldstar Coaching',description:'Clarity, confidence and direction for your next career chapter.',url:'https://goldstar-coachingcom.vercel.app/',images:['/og.png']},
  twitter:{card:'summary_large_image',title:'Goldstar Coaching',description:'Career and expat coaching with Nina Sterngold.',images:['/og.png']}
};
export default function RootLayout({children}:{children:React.ReactNode}){const schema={'@context':'https://schema.org','@type':'Person',name:'Nina Sterngold',jobTitle:'Career & Expat Coach',knowsLanguage:['English','German'],url:'https://goldstar-coachingcom.vercel.app/'};return <html lang="en"><body><a className="skip-link" href="#main-content">Skip to content</a><Animations/><RelatedPosts/><PagePolish/><div id="main-content">{children}</div><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}}/></body></html>}
