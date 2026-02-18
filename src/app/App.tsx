import { useEffect, useRef } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { UniversitiesSlider } from './components/UniversitiesSlider';
import { SuccessStories } from './components/SuccessStories';
import { ApplicationForm } from './components/ApplicationForm';
import { ScholarshipsSection } from './components/ScholarshipsSection';
import { UniversitiesSection } from './components/UniversitiesSection';
import { ContactSection } from './components/ContactSection';
import { AboutSection } from './components/AboutSection';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { LoadingScreen } from './components/LoadingScreen';

function App() {
  const aboutRef = useRef<HTMLDivElement>(null);

  const handleNavigation = (section: string) => {
    const element = document.getElementById(section);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <>
      <LoadingScreen />
      <div className="min-h-screen bg-white" dir="rtl">
        <Header onNavigate={handleNavigation} />
        
        <main>
          <HeroSection onNavigate={handleNavigation} />
          
          <UniversitiesSlider />

          <ScholarshipsSection />
          
          <SuccessStories />
          
          
          
          <UniversitiesSection />
          
          <ApplicationForm />
          
          {/* <div ref={aboutRef}>
            <AboutSection />
          </div> */}
          
          <ContactSection />
        </main>
        
        <Footer onNavigate={handleNavigation} />
        <ScrollToTop />
      </div>
    </>
  );
}

export default App;