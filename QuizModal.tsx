import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, CheckCircle, XCircle } from 'lucide-react';
import { Button } from './ui/Button';

interface QuizModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
}

export function QuizModal({ isOpen, onClose, title }: QuizModalProps) {
  const [step, setStep] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);

  if (!isOpen) return null;

  const questions = [
    {
      q: "What is the primary benefit of Smart Flexi Staking?",
      options: ["Fixed returns", "Dynamic yield optimization", "Zero risk", "Unlimited supply"],
      correct: 1
    },
    {
      q: "How often does the treasury rebase occur?",
      options: ["Every hour", "Every 6 hours", "Daily", "Weekly"],
      correct: 1
    },
    {
      q: "What token is used for CoreDeFi governance?",
      options: ["ETH", "USDC", "AURAXX", "sAURAXX"],
      correct: 2
    }
  ];

  const handleNext = () => {
    if (selectedAnswer === questions[step].correct) {
      setScore(prev => prev + 1);
    }
    
    if (step < questions.length - 1) {
      setStep(prev => prev + 1);
      setSelectedAnswer(null);
    } else {
      setShowResult(true);
    }
  };

  const resetQuiz = () => {
    setStep(0);
    setScore(0);
    setShowResult(false);
    setSelectedAnswer(null);
    onClose();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="w-full max-w-lg bg-aura-900 border border-aura-700/50 rounded-2xl shadow-2xl overflow-hidden"
        >
          <div className="p-4 border-b border-aura-700/50 flex items-center justify-between">
            <h2 className="text-xl font-display font-bold text-white">{showResult ? 'Quiz Results' : title}</h2>
            <button onClick={resetQuiz} className="text-gray-400 hover:text-white">
              <X className="w-5 h-5" />
            </button>
          </div>
          
          <div className="p-6">
            {showResult ? (
              <div className="text-center">
                {score >= 2 ? (
                  <CheckCircle className="w-16 h-16 text-emerald-400 mx-auto mb-4" />
                ) : (
                  <XCircle className="w-16 h-16 text-red-400 mx-auto mb-4" />
                )}
                <h3 className="text-2xl font-bold text-white mb-2">You scored {score}/{questions.length}</h3>
                <p className="text-gray-400 mb-6">
                  {score >= 2 ? 'Congratulations! You passed the certification.' : 'Please review the materials and try again.'}
                </p>
                <Button onClick={resetQuiz} className="w-full">Close</Button>
              </div>
            ) : (
              <div>
                <div className="mb-6 flex justify-between items-center text-sm text-gray-400">
                  <span>Question {step + 1} of {questions.length}</span>
                  <span>Score: {score}</span>
                </div>
                <h3 className="text-lg font-medium text-white mb-6">{questions[step].q}</h3>
                
                <div className="space-y-3 mb-6">
                  {questions[step].options.map((opt, i) => (
                    <button
                      key={i}
                      onClick={() => setSelectedAnswer(i)}
                      className={`w-full text-left p-4 rounded-xl border transition-all ${
                        selectedAnswer === i 
                          ? 'bg-blue-500/20 border-blue-500 text-white' 
                          : 'bg-aura-800/50 border-aura-700/50 text-gray-300 hover:bg-aura-800 hover:border-aura-600'
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
                
                <Button 
                  onClick={handleNext} 
                  disabled={selectedAnswer === null}
                  className="w-full"
                >
                  {step === questions.length - 1 ? 'Finish Quiz' : 'Next Question'}
                </Button>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
