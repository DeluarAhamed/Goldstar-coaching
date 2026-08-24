import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.goldstar-coaching.com'),
  title: 'Goldstar Coaching | Career & Expat Coaching',
  description: 'Warm, practical coaching for career transitions, international professionals, and confident next steps.',
  openGraph: {
    title: 'Goldstar Coaching | Your story. Your career.',
    description: 'Career and expat coaching for clarity, confidence, and a practical path forward.',
    images: ['/og.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Goldstar Coaching | Your story. Your career.',
    description: 'Career and expat coaching for clarity, confidence, and a practical path forward.',
    images: ['/og.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
