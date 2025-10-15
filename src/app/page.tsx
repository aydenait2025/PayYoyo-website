import type { Metadata } from 'next'
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Hero } from '@/components/sections/hero';
import { Problem } from '@/components/sections/problem';
import { Solution } from '@/components/sections/solution';
import { Market } from '@/components/sections/market';
import { Contact } from '@/components/sections/contact';

export const metadata: Metadata = {
  title: 'PayYoYo - AI-Powered Autonomous Payment Platform | Save $720 Annually',
  description: 'Revolutionize payments with PayYoYo\'s AI-driven autonomous platform. Save $720/year with intelligent gift card optimization, GPS-enhanced spending, and zero-waste technology.',
  keywords: ['AI payments', 'autonomous payments', 'gift card optimization', 'fintech'],
  openGraph: {
    title: 'PayYoYo - AI-Powered Autonomous Payment Platform',
    description: 'Save $720 annually with AI-driven autonomous payments.',
    url: 'https://payyoyo.com',
    type: 'website'
  }
}

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <Market />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
