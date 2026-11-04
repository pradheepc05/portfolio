import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import NeuralNetworkBackground from './components/effects/NeuralNetworkBackground';
import Hero from './sections/Hero';
import WhatIBuild from './sections/WhatIBuild';
import FeaturedProject from './sections/FeaturedProject';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import Experience from './sections/Experience';
import Contact from './sections/Contact';

export default function App() {
  return <div className="relative min-h-screen"><NeuralNetworkBackground /><Navbar /><main className="relative z-10"><Hero /><WhatIBuild /><FeaturedProject /><Projects /><Skills /><Experience /><Contact /></main><Footer /></div>;
}
