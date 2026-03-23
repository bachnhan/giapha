/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Sidebar } from './components/Sidebar';
import { Footer } from './components/Footer';
import { ProfileScreen } from './components/ProfileScreen';
import { GenealogyScreen } from './components/GenealogyScreen';
import { EventsScreen } from './components/EventsScreen';
import { ContributionsScreen } from './components/ContributionsScreen';
import { Screen } from './types';

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
      case 'contributions':
        return <ContributionsScreen />;
      default:
        return <GenealogyScreen />;
    }
  };

  return (
    <div className="min-h-screen bg-background text-on-surface font-body selection:bg-primary/20 selection:text-primary">
      <Navbar currentScreen={currentScreen} setScreen={setCurrentScreen} />
      
      <div className="flex">
        <Sidebar currentScreen={currentScreen} setScreen={setCurrentScreen} />
        
        <main className="flex-1 min-h-screen">
          {renderScreen()}
          <Footer />
        </main>
      </div>
    </div>
  );
}
