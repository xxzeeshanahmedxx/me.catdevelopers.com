import Layout from './components/Layout';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import Timeline from './components/Timeline';
import Projects from './components/Projects';
import Music from './components/Music';
import Contact from './components/Contact';

export default function App() {
  return (
    <Layout>
      <Hero />
      <Gallery />
      <Timeline />
      <Projects />
      <Music />
      <Contact />
    </Layout>
  );
}
