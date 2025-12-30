import React from 'react';
import Navbar from './components/Navbar';
import Hero from './pages/Hero';
import About from './pages/About';
import Features from './pages/Features';
import Results from './pages/Results';
import Reviews from './pages/Reviews';
import Faq from './pages/Faq';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';
import { ModalProvider, useModal } from './context/ModalContext';

const AppContent = () => {
  const { isModalOpen, closeModal } = useModal();

  return (
    <div className="w-full relative">
      <Navbar />

      <main>
        <section id="home">
          <Hero />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="features">
          <Features />
        </section>

        <section id="results">
          <Results />
        </section>

        <section id="reviews">
          <Reviews />
        </section>

        <section id="faq">
          <Faq />
        </section>
      </main>

      <Footer />

      <BookingModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

function App() {
  return (
    <ModalProvider>
      <AppContent />
    </ModalProvider>
  );
}

export default App;
