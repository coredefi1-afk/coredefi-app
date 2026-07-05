import React, { createContext, useContext, useState, useEffect } from 'react';
import { ethers, BrowserProvider } from 'ethers';
import { WalletModal } from './WalletModal';

interface WalletContextType {
  address: string | null;
  network: string | null;
  balance: string | null;
  isConnecting: boolean;
  connectWallet: () => void;
  disconnectWallet: () => void;
}

const WalletContext = createContext<WalletContextType>({
  address: null,
  network: null,
  balance: null,
  isConnecting: false,
  connectWallet: () => {},
  disconnectWallet: () => {},
});

export function WalletProvider({ children }: { children: React.ReactNode }) {
  const [address, setAddress] = useState<string | null>(null);
  const [network, setNetwork] = useState<string | null>(null);
  const [balance, setBalance] = useState<string | null>(null);
  const [isConnecting, setIsConnecting] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [provider, setProvider] = useState<BrowserProvider | null>(null);

  useEffect(() => {
    // Check for existing session
    const savedAddress = localStorage.getItem('wallet_address');
    const savedNetwork = localStorage.getItem('wallet_network');
    const savedBalance = localStorage.getItem('wallet_balance');
    
    if (savedAddress) {
      setAddress(savedAddress);
      setNetwork(savedNetwork || 'CoreDeFi Mainnet');
      setBalance(savedBalance || '0.00');
    }

    try {
      if (typeof window !== 'undefined' && window.ethereum) {
        const p = new ethers.BrowserProvider(window.ethereum as any);
        setProvider(p);

        const handleAccountsChanged = async (accounts: string[]) => {
          if (accounts.length > 0) {
            setAddress(accounts[0]);
            localStorage.setItem('wallet_address', accounts[0]);
            await updateBalanceAndNetwork(p, accounts[0]);
          } else {
            disconnectWallet();
          }
        };

        const handleChainChanged = () => {
          window.location.reload();
        };

        window.ethereum.on('accountsChanged', handleAccountsChanged);
        window.ethereum.on('chainChanged', handleChainChanged);

        return () => {
          window.ethereum?.removeListener('accountsChanged', handleAccountsChanged);
          window.ethereum?.removeListener('chainChanged', handleChainChanged);
        };
      }
    } catch (e) {
      console.warn("Ethereum provider init failed", e);
    }
  }, []);

  const updateBalanceAndNetwork = async (p: BrowserProvider, account: string) => {
    try {
      const balanceBig = await p.getBalance(account);
      const formattedBalance = ethers.formatEther(balanceBig);
      setBalance(formattedBalance);
      localStorage.setItem('wallet_balance', formattedBalance);
      
      const net = await p.getNetwork();
      setNetwork(net.name);
      localStorage.setItem('wallet_network', net.name);
    } catch (error) {
      console.error(error);
    }
  };

  const connectWallet = () => {
    setIsModalOpen(true);
  };

  const handleConnect = async (walletType: string) => {
    setIsConnecting(true);
    try {
      if (walletType === 'metamask' && typeof window !== 'undefined' && window.ethereum) {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        if (accounts && accounts.length > 0) {
          setAddress(accounts[0]);
          localStorage.setItem('wallet_address', accounts[0]);
          if (provider) {
            await updateBalanceAndNetwork(provider, accounts[0]);
          } else {
            setNetwork('Ethereum Mainnet');
            setBalance('0.00');
          }
        }
      } else {
        // Mock connection for WalletConnect and Coinbase for demo purposes
        await new Promise(resolve => setTimeout(resolve, 1500));
        const mockAddress = '0x' + Math.random().toString(16).slice(2, 42).padEnd(40, '0');
        setAddress(mockAddress);
        setNetwork('CoreDeFi Mainnet');
        setBalance('100.50');
        
        localStorage.setItem('wallet_address', mockAddress);
        localStorage.setItem('wallet_network', 'CoreDeFi Mainnet');
        localStorage.setItem('wallet_balance', '100.50');
      }
      setIsModalOpen(false);
    } catch (error: any) {
      console.error("Wallet connection failed:", error);
      if (error.code === 4001) {
        alert("Connection request rejected by user.");
      } else {
        alert("Failed to connect wallet.");
      }
    } finally {
      setIsConnecting(false);
    }
  };

  const disconnectWallet = () => {
    setAddress(null);
    setBalance(null);
    setNetwork(null);
    localStorage.removeItem('wallet_address');
    localStorage.removeItem('wallet_network');
    localStorage.removeItem('wallet_balance');
  };

  return (
    <WalletContext.Provider value={{ address, network, balance, isConnecting, connectWallet, disconnectWallet }}>
      {children}
      <WalletModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        onConnect={handleConnect}
        isConnecting={isConnecting}
      />
    </WalletContext.Provider>
  );
}

export const useWallet = () => useContext(WalletContext);
