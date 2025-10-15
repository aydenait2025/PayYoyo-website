import type { Metadata } from 'next'
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Hero } from '@/components/sections/hero';
import { Problem } from '@/components/sections/problem';
import { Solution } from '@/components/sections/solution';
import { Market } from '@/components/sections/market';
import { Contact } from '@/components/sections/contact';

export const metadata: Metadata = {
  title: 'PayYoYo - Toronto AI Payment Platform | Save $720 Annually',
  description: 'Toronto-based AI payment platform revolutionizing payments and saving users $720 annually. PayYoYo offers autonomous payment optimization with GPS-enhanced intelligence for Canadian users.',
  keywords: ['Toronto AI payments', 'Canadian fintech', 'Ontario payment platform', 'Toronto gift card optimization', 'Canadian autonomous payments'],
  openGraph: {
    title: 'PayYoYo - Toronto AI Payment Platform | Save $720 Annually',
    description: 'Toronto-based AI payment platform saving Canadian users $720 annually with autonomous payment optimization.',
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
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
