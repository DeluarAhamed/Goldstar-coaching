import type { Metadata } from 'next';
import './goldstar.css';
import Animations from './Animations';
import RelatedPosts from './RelatedPosts';
import PagePolish from './PagePolish';
export const metadata:Metadata={
  metadataBase:new URL('http://localhost:3000'),
  title:'Goldstar Coaching | Career & Expat Coaching with Nina Sterngold',
  description:'Calm, practical career and expat coaching for international professionals in English and German.',
  openGraph:{title:'Goldstar Coaching',description:'Clarity, confidence and direction for your next career chapter.',images:[]},
  twitter:{card:'summary_large_image',title:'Goldstar Coaching',description:'Career and expat coaching with Nina Sterngold.',images:[]}
};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body><Animations/><RelatedPosts/><PagePolish/>{children}</body></html>}
