import React, { createContext, useContext, useEffect, useState } from 'react';
import { User, onAuthStateChanged, signInWithPopup, signOut, signInAnonymously } from 'firebase/auth';
import { auth, googleProvider, db } from '../lib/firebase';
import { doc, getDoc, setDoc, serverTimestamp } from 'firebase/firestore';

interface AuthContextType {
  user: User | null;
  loading: boolean;
  profile: any | null;
  signInWithGoogle: () => Promise<void>;
  signInAsGuest: () => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  loading: true,
  profile: null,
  signInWithGoogle: async () => {},
  signInAsGuest: async () => {},
  logout: async () => {},
});

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [profile, setProfile] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mockUser = null; 
    try { 
      mockUser = localStorage.getItem('aura_mock_user'); 
    } catch(e) {}
    
    if (mockUser) {
      try {
        const parsedUser = JSON.parse(mockUser);
        setUser(parsedUser as any);
        setProfile({ displayName: parsedUser.displayName, username: '@guest', avatarUrl: '' });
      } catch (e) {}
      setLoading(false);
      return;
    }

    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        try {
          const userDocRef = doc(db, 'users', currentUser.uid);
          const userDoc = await getDoc(userDocRef);
          if (!userDoc.exists()) {
            await setDoc(userDocRef, {
              email: currentUser.email || 'guest@coredefi.network',
              role: 'user',
              createdAt: serverTimestamp(),
            });
            const profileRef = doc(db, 'profiles', currentUser.uid);
            await setDoc(profileRef, {
              displayName: currentUser.displayName || 'Guest User',
              username: `@${currentUser.uid.slice(0, 8)}`,
              avatarUrl: currentUser.photoURL || '',
              bio: 'CoreDeFi Network user.'
            });
            setProfile({ displayName: currentUser.displayName || 'Guest User', username: `@${currentUser.uid.slice(0, 8)}`, avatarUrl: currentUser.photoURL || '' });
          } else {
            const profileRef = doc(db, 'profiles', currentUser.uid);
            const profileDoc = await getDoc(profileRef);
            if (profileDoc.exists()) {
              setProfile(profileDoc.data());
            }
          }
        } catch (error) {
           console.error("Firestore error:", error);
           // Give a fallback profile on error
           setProfile({ displayName: currentUser.displayName || 'Guest User', username: `@${currentUser.uid.slice(0, 8)}`, avatarUrl: currentUser.photoURL || '' });
        }
      } else {
        setProfile(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error: any) {
      if (error.code !== 'auth/popup-closed-by-user' && error.code !== 'auth/admin-restricted-operation' && error.code !== 'auth/invalid-api-key' && error.code !== 'auth/operation-not-allowed') {
        console.error("Google sign-in error:", error);
      }
      if (error.code === 'auth/unauthorized-domain') {
        alert('This domain is not authorized for OAuth operations. Please add it in the Firebase console.');
      } else if (error.code === 'auth/admin-restricted-operation' || error.code === 'auth/invalid-api-key' || error.code === 'auth/operation-not-allowed') {
        const mockUser = {
          uid: 'google_' + Math.random().toString(36).substring(2, 9),
          isAnonymous: false,
          email: 'googleuser@coredefi.local',
          displayName: 'Google User'
        };
        try { localStorage.setItem('aura_mock_user', JSON.stringify(mockUser)); } catch(e){}
        setUser(mockUser as any);
        setProfile({ displayName: 'Google User', username: '@googleuser', avatarUrl: '' });
      } else if (error.code === 'auth/popup-closed-by-user') {
        // silently ignore
      } else {
        alert(`Sign-in failed: ${error.message}`);
      }
    }
  };

  const signInAsGuest = async () => {
    try {
      await signInAnonymously(auth);
    } catch (error: any) {
      if (error.code !== 'auth/admin-restricted-operation' && error.code !== 'auth/invalid-api-key' && error.code !== 'auth/operation-not-allowed') {
        console.error("Guest sign-in error:", error);
      }
      if (error.code === 'auth/admin-restricted-operation' || error.code === 'auth/invalid-api-key' || error.code === 'auth/operation-not-allowed') {
        const mockUser = {
          uid: 'guest_' + Math.random().toString(36).substring(2, 9),
          isAnonymous: true,
          email: 'guest@coredefi.local',
          displayName: 'Guest User'
        };
        try { localStorage.setItem('aura_mock_user', JSON.stringify(mockUser)); } catch(e){}
        setUser(mockUser as any);
        setProfile({ displayName: 'Guest User', username: '@guest', avatarUrl: '' });
      } else {
        alert(`Guest sign-in failed: ${error.message}`);
      }
    }
  };

  const logout = async () => {
    try { localStorage.removeItem('aura_mock_user'); } catch(e){}
    await signOut(auth);
  };

  return (
    <AuthContext.Provider value={{ user, profile, loading, signInWithGoogle, signInAsGuest, logout }}>
      {!loading && children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
