import React, { useState } from 'react';
import { Sidebar } from './Sidebar';
import { Topbar } from './Topbar';
import { Footer } from './Footer';
import { Background } from '../Background';
import { LoginOverlay } from '../LoginOverlay';
import { GlobalSearch } from '../GlobalSearch';

interface AppLayoutProps {
  children: React.ReactNode;
}

export function AppLayout({ children }: AppLayoutProps) {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-transparent text-foreground overflow-hidden font-sans relative">
      <Background />
      <LoginOverlay />
      <GlobalSearch />
      <Topbar onMenuClick={() => setIsMobileMenuOpen(true)} />
      
      <div className="flex-1 flex overflow-hidden">
        <Sidebar 
          isCollapsed={isSidebarCollapsed} 
          setIsCollapsed={setIsSidebarCollapsed} 
          isMobileOpen={isMobileMenuOpen}
          setIsMobileOpen={setIsMobileMenuOpen}
        />
        
        <main 
          className="flex-1 overflow-y-auto relative z-10 p-4 md:p-8 w-full max-w-[1600px] mx-auto custom-scrollbar"
          role="main"
          aria-label="Main content"
        >
          {children}
        </main>
      </div>

      <Footer />
    </div>
  );
}