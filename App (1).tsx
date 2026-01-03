import React from 'react';
import { SiteHeader } from './components/SiteHeader';
import { Hero } from './components/Hero';
import { ValueProp } from './components/ValueProp';
import { Proof } from './components/Proof';
import { RevenueCalculator } from './components/RevenueCalculator';
import { CallToAction } from './components/CallToAction';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="bg-background min-h-screen selection:bg-blue-500/30 selection:text-white">
      <SiteHeader />
      <main>
        <Hero />
        <ValueProp />
        <Proof />
        <RevenueCalculator />
        <CallToAction />
      </main>
      <Footer />
      {React.createElement('elevenlabs-convai', { 'agent-id': 'agent_0001kdqex8m2ekh83bahjrge2gm9' })}
    </div>
  );
}

export default App;