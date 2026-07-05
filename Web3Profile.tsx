import React, { useState } from 'react';
import { Card } from '@/src/components/ui/Card';
import { Button } from '@/src/components/ui/Button';
import { FadeIn } from '@/src/components/animations';
import { UserCircle2, Edit2, Share2, Twitter, Github, Globe, Check, X, Copy } from 'lucide-react';
import { useAuth } from '@/src/components/AuthProvider';

export function Web3Profile() {
  const { user, profile } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [displayName, setDisplayName] = useState(profile?.displayName || 'Anonymous User');
  const [username, setUsername] = useState(profile?.username || 'user' + Math.floor(Math.random() * 1000));
  const [bio, setBio] = useState(profile?.bio || 'Web3 enthusiast, DeFi strategist, and active CoreDeFi DAO contributor. Focused on sustainable protocol growth.');

  const handleSave = () => {
    // In a real app, save to backend
    setIsEditing(false);
  };

  const handleShare = () => {
    navigator.clipboard.writeText(`https://coredefi.id/${username}`);
    alert("Profile link copied to clipboard!");
  };

  return (
    <FadeIn>
      <Card className="bg-aura-800/30 border-aura-700/50 p-6 overflow-hidden relative">
        <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-rose-500/20" />
        
        <div className="relative pt-12 flex flex-col items-center text-center">
          <div className="w-24 h-24 rounded-full bg-aura-900 border-4 border-aura-800 flex items-center justify-center mb-4 relative overflow-hidden">
             {profile?.avatarUrl ? (
               <img src={profile.avatarUrl} alt="Avatar" className="w-full h-full object-cover" />
             ) : (
               <UserCircle2 className="w-16 h-16 text-gray-500" />
             )}
             <div className="absolute bottom-0 right-0 w-6 h-6 bg-green-500 border-2 border-aura-800 rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-white rounded-full" />
             </div>
          </div>
          
          {isEditing ? (
            <div className="w-full space-y-3 mb-6 px-4">
              <input 
                type="text" 
                value={displayName} 
                onChange={e => setDisplayName(e.target.value)}
                className="w-full bg-aura-900/50 border border-aura-700/50 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-purple-500/50"
                placeholder="Display Name"
              />
              <div className="flex items-center">
                <span className="text-gray-500 mr-2 text-sm">@</span>
                <input 
                  type="text" 
                  value={username} 
                  onChange={e => setUsername(e.target.value)}
                  className="w-full bg-aura-900/50 border border-aura-700/50 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-purple-500/50"
                  placeholder="Username"
                />
              </div>
              <textarea 
                value={bio} 
                onChange={e => setBio(e.target.value)}
                rows={3}
                className="w-full bg-aura-900/50 border border-aura-700/50 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-purple-500/50 resize-none"
                placeholder="Bio"
              />
              <div className="flex justify-center space-x-2 pt-2">
                <Button onClick={handleSave} size="sm" className="bg-emerald-500 hover:bg-emerald-600 text-white">
                  <Check className="w-4 h-4 mr-1" /> Save
                </Button>
                <Button onClick={() => setIsEditing(false)} size="sm" variant="secondary">
                  <X className="w-4 h-4 mr-1" /> Cancel
                </Button>
              </div>
            </div>
          ) : (
            <>
              <h2 className="text-2xl font-bold text-white mb-1">{displayName}</h2>
              <p className="text-purple-400 font-mono text-sm mb-4">
                @{username}
              </p>
              
              <p className="text-sm text-gray-400 mb-6 leading-relaxed max-w-sm">
                {bio}
              </p>
              
              <div className="flex items-center space-x-4 mb-8">
                 <button className="text-gray-400 hover:text-white transition-colors"><Twitter className="w-5 h-5" /></button>
                 <button className="text-gray-400 hover:text-white transition-colors"><Github className="w-5 h-5" /></button>
                 <button className="text-gray-400 hover:text-white transition-colors"><Globe className="w-5 h-5" /></button>
              </div>
              
              <div className="w-full flex justify-between text-sm border-t border-aura-700/50 pt-4 mb-6">
                 <div className="text-center">
                    <span className="block text-gray-500 text-xs">Member Since</span>
                    <span className="text-white font-medium">
                      {user?.metadata?.creationTime ? new Date(user.metadata.creationTime).toLocaleDateString(undefined, { year: 'numeric', month: 'short' }) : 'Jan 2024'}
                    </span>
                 </div>
                 <div className="text-center">
                    <span className="block text-gray-500 text-xs">Public Profile</span>
                    <span onClick={handleShare} className="text-blue-400 font-medium cursor-pointer hover:underline flex items-center justify-center group">
                      coredefi.id/{username}
                      <Copy className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </span>
                 </div>
              </div>
              
              <div className="flex w-full space-x-3">
                 <Button onClick={() => setIsEditing(true)} className="flex-1 bg-purple-500 hover:bg-purple-600 text-white">
                    <Edit2 className="w-4 h-4 mr-2" /> Edit CoreDeFi ID
                 </Button>
                 <Button onClick={handleShare} variant="secondary" className="px-4">
                    <Share2 className="w-4 h-4" />
                 </Button>
              </div>
            </>
          )}
        </div>
      </Card>
    </FadeIn>
  );
}
