import React from 'react';
import { HeroSection } from './HeroSection';
import { RewardOverview } from './RewardOverview';
import { ReferralDashboard } from './ReferralDashboard';
import { ReferralTree } from './ReferralTree';
import { EarningsAnalytics } from './EarningsAnalytics';
import { Leaderboard } from './Leaderboard';
import { RewardHistory } from './RewardHistory';
import { ReferralToolkit } from './ReferralToolkit';
import { EducationPanel } from './EducationPanel';
import { FAQ } from './FAQ';

export function WebReward() {
  return (
    <div className="flex flex-col gap-8 pb-20">
      <HeroSection />
      <RewardOverview />
      <ReferralDashboard />
      <ReferralTree />
      <EarningsAnalytics />
      <Leaderboard />
      <RewardHistory />
      <ReferralToolkit />
      <EducationPanel />
      <FAQ />
    </div>
  );
}
