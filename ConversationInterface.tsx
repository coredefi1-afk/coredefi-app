import React, { useState, useEffect, useRef } from 'react';
import { Card } from '@/src/components/ui/Card';
import { Button } from '@/src/components/ui/Button';
import { FadeIn, SlideUp } from '@/src/components/animations';
import { Send, Mic, Paperclip, Copy, RotateCw, ThumbsUp, ThumbsDown, Bot, User, Loader2 } from 'lucide-react';
import { motion } from 'motion/react';
import Markdown from 'react-markdown';

interface Message {
  id: number;
  role: 'user' | 'model';
  content: string;
  timestamp: string;
}

const initialMessages: Message[] = [
  {
    id: 1,
    role: 'model',
    content: 'Hello! I am CoreDeFi AI, your Web3 Financial Copilot. I can help you understand staking strategies, analyze treasury metrics, explain governance proposals, or calculate potential rewards. How can I assist you today?',
    timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  }
];

export function ConversationInterface() {
  const [inputValue, setInputValue] = useState('');
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSend = async (text: string = inputValue) => {
    if (!text.trim() || isTyping) return;
    
    const newUserMsg: Message = {
      id: Date.now(),
      role: 'user',
      content: text.trim(),
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    
    setMessages(prev => [...prev, newUserMsg]);
    setInputValue('');
    setIsTyping(true);
    
    // Add an empty model message that we will stream into
    const modelMsgId = Date.now() + 1;
    setMessages(prev => [...prev, {
      id: modelMsgId,
      role: 'model',
      content: '',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }]);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          prompt: newUserMsg.content,
          history: messages.map(m => ({ role: m.role, content: m.content }))
        }),
      });

      if (!response.ok) throw new Error('Failed to fetch response');
      
      const reader = response.body?.getReader();
      const decoder = new TextDecoder();
      if (!reader) throw new Error('No reader available');

      let currentContent = '';
      
      while (true) {
        const { value, done } = await reader.read();
        if (done) break;
        
        const chunk = decoder.decode(value);
        const lines = chunk.split('\n');
        
        for (const line of lines) {
          if (line.startsWith('data: ') && line !== 'data: [DONE]') {
            try {
              const data = JSON.parse(line.slice(6));
              currentContent += data.text;
              
              setMessages(prev => prev.map(m => 
                m.id === modelMsgId ? { ...m, content: currentContent } : m
              ));
            } catch (e) {
              console.error("Error parsing stream chunk", e);
            }
          }
        }
      }
    } catch (error) {
      console.error(error);
      setMessages(prev => prev.map(m => 
        m.id === modelMsgId ? { ...m, content: 'Sorry, I encountered an error. Please try again later.' } : m
      ));
    } finally {
      setIsTyping(false);
    }
  };

  const suggestedPrompts = [
    "What's the current APY for Smart Flexi Staking?",
    "Explain the latest DAO proposal.",
    "How does CoreDeFi's treasury work?"
  ];

  return (
    <Card className="flex flex-col h-[600px] bg-aura-900 border-aura-700/50 overflow-hidden">
      {/* Header */}
      <div className="p-4 border-b border-aura-700/50 bg-aura-800/30 flex items-center justify-between">
        <div className="flex items-center">
          <div className="w-10 h-10 rounded-full bg-fuchsia-500/20 border border-fuchsia-500/50 flex items-center justify-center mr-3 relative">
            <Bot className="w-6 h-6 text-fuchsia-400" />
            <div className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-400 border-2 border-aura-900 rounded-full"></div>
          </div>
          <div>
            <h3 className="font-bold text-white">CoreDeFi AI</h3>
            <p className="text-xs text-gray-400">Web3 Financial Copilot • Online</p>
          </div>
        </div>
        <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
          <RotateCw className="w-4 h-4 mr-2" /> Reset Chat
        </Button>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-6 custom-scrollbar bg-gradient-to-b from-transparent to-aura-950/30">
        {messages.map((msg) => (
          <SlideUp key={msg.id} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`flex max-w-[85%] md:max-w-[75%] ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
              
              <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${msg.role === 'user' ? 'bg-aura-800 ml-3' : 'bg-fuchsia-500/20 border border-fuchsia-500/30 mr-3'}`}>
                {msg.role === 'user' ? <User className="w-4 h-4 text-gray-400" /> : <Bot className="w-5 h-5 text-fuchsia-400" />}
              </div>

              <div>
                <div className="flex items-center space-x-2 mb-1 px-1">
                  <span className="text-xs font-medium text-gray-400">{msg.role === 'user' ? 'You' : 'CoreDeFi AI'}</span>
                  <span className="text-xs text-gray-500">{msg.timestamp}</span>
                </div>
                
                <div className={`p-4 rounded-2xl ${
                  msg.role === 'user' 
                    ? 'bg-aura-accent text-aura-900 rounded-tr-none' 
                    : 'bg-aura-800/80 border border-aura-700/50 text-gray-200 rounded-tl-none'
                }`}>
                  <div className="markdown-body text-sm leading-relaxed">
                    <Markdown>{msg.content}</Markdown>
                  </div>
                </div>

                {msg.role === 'model' && (
                  <div className="flex items-center space-x-2 mt-2 px-1">
                    <button className="p-1 text-gray-500 hover:text-gray-300 transition-colors" title="Copy">
                      <Copy className="w-4 h-4" onClick={() => navigator.clipboard.writeText(msg.content)} />
                    </button>
                    <button className="p-1 text-gray-500 hover:text-emerald-400 transition-colors" title="Helpful">
                      <ThumbsUp className="w-4 h-4" />
                    </button>
                    <button className="p-1 text-gray-500 hover:text-red-400 transition-colors" title="Not Helpful">
                      <ThumbsDown className="w-4 h-4" />
                    </button>
                  </div>
                )}
              </div>
            </div>
          </SlideUp>
        ))}
        {isTyping && (
          <FadeIn className="flex justify-start">
             <div className="flex flex-row max-w-[85%] md:max-w-[75%]">
               <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 bg-fuchsia-500/20 border border-fuchsia-500/30 mr-3">
                  <Bot className="w-5 h-5 text-fuchsia-400" />
               </div>
               <div>
                  <div className="flex items-center space-x-2 mb-1 px-1">
                    <span className="text-xs font-medium text-gray-400">CoreDeFi AI</span>
                  </div>
                  <div className="p-4 rounded-2xl bg-aura-800/80 border border-aura-700/50 text-gray-200 rounded-tl-none flex items-center space-x-2">
                     <span className="w-2 h-2 bg-fuchsia-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                     <span className="w-2 h-2 bg-fuchsia-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                     <span className="w-2 h-2 bg-fuchsia-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
               </div>
             </div>
          </FadeIn>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="p-4 border-t border-aura-700/50 bg-aura-900">
        {messages.length === 1 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {suggestedPrompts.map(prompt => (
              <button 
                key={prompt}
                onClick={() => handleSend(prompt)}
                className="text-xs px-3 py-1.5 bg-aura-800 border border-aura-700/50 hover:bg-aura-700 hover:border-fuchsia-500/50 rounded-full text-gray-300 transition-colors"
              >
                {prompt}
              </button>
            ))}
          </div>
        )}
        <div className="relative flex items-center">
          <Button variant="ghost" size="icon" className="absolute left-2 text-gray-400 hover:text-white rounded-full">
            <Paperclip className="w-4 h-4" />
          </Button>
          <input 
            type="text" 
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') handleSend();
            }}
            placeholder="Ask CoreDeFi AI anything..."
            className="w-full bg-aura-800 border border-aura-700/50 rounded-full py-3 pl-12 pr-24 text-white placeholder:text-gray-500 focus:outline-none focus:border-fuchsia-500/50 transition-colors"
          />
          <div className="absolute right-2 flex items-center space-x-1">
            <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white rounded-full hidden sm:flex">
              <Mic className="w-4 h-4" />
            </Button>
            <Button 
              onClick={() => handleSend()}
              disabled={!inputValue.trim() || isTyping}
              className="bg-fuchsia-500 hover:bg-fuchsia-600 text-white rounded-full w-8 h-8 p-0 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Send className="w-4 h-4 ml-0.5" />
            </Button>
          </div>
        </div>
        <p className="text-[10px] text-center text-gray-500 mt-3">
          CoreDeFi AI can make mistakes. Consider verifying critical financial information.
        </p>
      </div>
    </Card>
  );
}
