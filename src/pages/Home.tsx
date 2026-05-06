import Hero from '../components/Hero';
import Manifesto from '../components/Manifesto';
import Services from '../components/Services';
import SelectedWorks from '../components/SelectedWorks';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Hero />
      <Manifesto />
      <SelectedWorks />
      <Services />
      <Footer />
    </>
  );
}
