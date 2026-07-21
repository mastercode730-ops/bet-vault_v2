import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import TrustStrip from '@/components/TrustStrip';
import WhyUs from '@/components/WhyUs';
import Journey from '@/components/Journey';
import Markets from '@/components/Markets';
import Story from '@/components/Story';
import Blog from '@/components/Blog';
import Voices from '@/components/Voices';
import Questions from '@/components/Questions';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <TrustStrip />
      <WhyUs />
      <Journey />
      <Markets />
      <Story />
      <Blog />
      <Voices />
      <Questions />
      <Footer />
    </main>
  );
}
