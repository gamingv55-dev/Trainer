import { useState } from 'react';
import Intro from './components/Intro';
import Navbar from './components/Navbar';
import BarProgress from './components/BarProgress';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import About from './sections/About';
import Services from './sections/Services';
import Results from './sections/Results';
import Certificates from './sections/Certificates';
import Process from './sections/Process';
import Tracking from './sections/Tracking';
import Speaker from './sections/Speaker';
import Faq from './sections/Faq';
import Contact from './sections/Contact';

export default function App() {
  const [introDone, setIntroDone] = useState(false);

  return (
    <>
      {!introDone && <Intro onDone={() => setIntroDone(true)} />}
      <Navbar />
      <BarProgress />
      <main>
        <Hero />
        <About />
        <Services />
        <Results />
        <Certificates />
        <Process />
        <Tracking />
        <Speaker />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
