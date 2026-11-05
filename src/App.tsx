import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import EducationSection from './components/EducationSection';
import CertificationsSection from './components/CertificationsSection';
import ExperienceSection from './components/ExperienceSection';
import MusicSection from './components/MusicSection';
import ContactSection from './components/ContactSection';
import BackToTop from './components/BackToTop';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Navbar />
      <main id="main" tabIndex={-1}>
        <Hero />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <EducationSection />
        <CertificationsSection />
        <ExperienceSection />
        <MusicSection />
        <ContactSection />
      </main>
      <BackToTop />
      <Footer />
    </>
  );
}

export default App;
