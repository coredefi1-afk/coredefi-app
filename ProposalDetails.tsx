import React from 'react';
import { Card } from '@/src/components/ui/Card';
import { FileText, Download, Link as LinkIcon, DollarSign, AlertTriangle, Target } from 'lucide-react';

interface ProposalDetailsProps {
  proposal: any;
}

export function ProposalDetails({ proposal }: ProposalDetailsProps) {
  return (
    <Card className="bg-aura-800/30 border-aura-700/50 p-6">
      <h3 className="text-lg font-bold text-white mb-6 flex items-center">
        <FileText className="w-5 h-5 text-emerald-400 mr-2" />
        Proposal Details
      </h3>

      <div className="space-y-6">
        <div>
          <h4 className="text-sm font-semibold text-gray-300 mb-2 uppercase tracking-wider">Summary</h4>
          <p className="text-gray-400 text-sm leading-relaxed">
            {proposal.summary} This proposal outlines a comprehensive strategy to enhance protocol decentralization and re-align validator incentives. Detailed analysis has been conducted on the macroeconomic impact.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
           <div className="p-4 bg-aura-900/50 rounded-lg border border-aura-700/30">
              <h4 className="flex items-center text-sm font-semibold text-gray-300 mb-2">
                <Target className="w-4 h-4 text-cyan-400 mr-2" />
                Objectives
              </h4>
              <ul className="list-disc list-inside text-sm text-gray-400 space-y-1">
                <li>Increase network security</li>
                <li>Optimize yield emissions</li>
                <li>Promote wider token distribution</li>
              </ul>
           </div>
           <div className="p-4 bg-aura-900/50 rounded-lg border border-aura-700/30">
              <h4 className="flex items-center text-sm font-semibold text-gray-300 mb-2">
                <AlertTriangle className="w-4 h-4 text-amber-400 mr-2" />
                Risks
              </h4>
              <ul className="list-disc list-inside text-sm text-gray-400 space-y-1">
                <li>Short-term yield fluctuation</li>
                <li>Validator hardware requirements</li>
              </ul>
           </div>
        </div>

        <div>
           <h4 className="flex items-center text-sm font-semibold text-gray-300 mb-3">
              <DollarSign className="w-4 h-4 text-emerald-400 mr-2" />
              Budget Request
           </h4>
           <div className="p-4 bg-aura-900/50 rounded-lg border border-aura-700/30 flex items-center justify-between">
              <span className="text-sm text-gray-400">Total Requested</span>
              <span className="text-lg font-bold text-white">{proposal.impact}</span>
           </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-gray-300 mb-3">Supporting Documents</h4>
          <div className="flex flex-wrap gap-2">
            <button className="flex items-center px-3 py-2 bg-aura-800/50 hover:bg-aura-700/50 border border-aura-700/50 rounded-lg text-sm text-gray-300 transition-colors">
              <FileText className="w-4 h-4 mr-2 text-blue-400" />
              Technical_Specs.pdf
            </button>
            <button className="flex items-center px-3 py-2 bg-aura-800/50 hover:bg-aura-700/50 border border-aura-700/50 rounded-lg text-sm text-gray-300 transition-colors">
              <LinkIcon className="w-4 h-4 mr-2 text-fuchsia-400" />
              Forum Discussion
            </button>
          </div>
        </div>
      </div>
    </Card>
  );
}
