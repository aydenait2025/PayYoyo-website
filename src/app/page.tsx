import type { Metadata } from 'next'
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Hero } from '@/components/sections/hero';
import { Problem } from '@/components/sections/problem';
import { Solution } from '@/components/sections/solution';
import { Market } from '@/components/sections/market';
import { Contact } from '@/components/sections/contact';
import { TeamPreview } from '@/components/sections/team-preview';

export const metadata: Metadata = {
  title: 'PayYoYo - GPS-Enhanced AI Payment Wallet | Save $636 Annually',
  description: 'AI-powered gift card payment wallet like Apple Pay & Google Pay. GPS-triggered smart payments save $636 annually, featuring automatic card selection, zero balance archive, and merchant-favored redemption.',
  keywords: ['AI payment wallet', 'GPS-triggered payments', 'gift card optimization', 'Apple Pay alternative', 'Google Pay competitor', 'merchant analytics', 'smart wallet'],
  openGraph: {
    title: 'PayYoYo - GPS-Enhanced AI Payment Wallet | Save $636 Annually',
    description: 'AI-powered gift card payment wallet like Apple Pay & Google Pay. GPS-triggered smart payments save $636 annually with automatic card selection and merchant analytics.',
    url: 'https://payyoyo.com',
    locale: 'en_CA',
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
        <TeamPreview />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
