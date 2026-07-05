import React from 'react';
import { HeroSection } from './HeroSection';
import { ProtocolStatus } from './ProtocolStatus';
import { EcosystemOverview } from './EcosystemOverview';
import { TreasuryPreview } from './TreasuryPreview';
import { ProtocolInsights } from './ProtocolInsights';
import { Roadmap } from './Roadmap';
import { Announcements } from './Announcements';
import { AuraAIPanel } from './AuraAIPanel';

export function Home() {
  return (
    <div className="flex flex-col gap-8 pb-20">
      <HeroSection />
      <ProtocolStatus />
      <EcosystemOverview />
      <TreasuryPreview />
      <ProtocolInsights />
      <Roadmap />
      <Announcements />
      <AuraAIPanel />
    </div>
  );
}
