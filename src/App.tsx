import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Sidebar } from './components/Sidebar';
import { Footer } from './components/Footer';
import { ProfileScreen } from './components/ProfileScreen';
import { GenealogyScreen } from './components/GenealogyScreen';
import { EventsScreen } from './components/EventsScreen';
import { Screen } from './types';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('genealogy');

  const renderScreen = () => {
    switch (currentScreen) {
      case 'profile':
        return <ProfileScreen />;
      case 'genealogy':
        return <GenealogyScreen />;
      case 'events':
        return <EventsScreen />;
      default:
        return <GenealogyScreen />;
    }
  };

  return (
    <div className="min-h-screen bg-[#FDF9F3] text-primary font-body selection:bg-primary/30 selection:text-primary overflow-x-hidden">
      <Navbar currentScreen={currentScreen} setScreen={setCurrentScreen} />
      
      <div className="flex min-h-screen pt-20 lg:pt-0">
        <Sidebar currentScreen={currentScreen} setScreen={setCurrentScreen} />
        
        <main className="flex-1 w-full lg:pl-64">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentScreen}
              initial={{ opacity: 0, scale: 0.99 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.01 }}
              transition={{ duration: 0.4 }}
              className="w-full min-h-screen"
            >
              {renderScreen()}
              <Footer />
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
}
