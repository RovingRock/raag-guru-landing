import Nav from './components/Nav';
import Hero from './components/Hero';
import FeatureSection from './components/FeatureSection';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import { features } from './data/content';

export default function App() {
  return (
    <>
      <Nav />
      <main id="features">
        <Hero />
        {features.map((f) => (
          <FeatureSection key={f.id} feature={f} />
        ))}
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
