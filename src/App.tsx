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
      <Navbar />
      <Hero />
      <main>
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
