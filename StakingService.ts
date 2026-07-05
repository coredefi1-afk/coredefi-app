import { ethers } from 'ethers';
import { db } from '../lib/firebase';
import { collection, addDoc, serverTimestamp, getDocs, query, where, updateDoc, doc } from 'firebase/firestore';

export class StakingService {
  private provider: ethers.BrowserProvider | null = null;
  private signer: ethers.Signer | null = null;
  
  constructor() {
    try {
      if (typeof window !== 'undefined' && window.ethereum) {
        this.provider = new ethers.BrowserProvider(window.ethereum as any);
      }
    } catch(e) {}
  }

  async getSigner() {
    if (!this.provider) throw new Error("No provider");
    if (!this.signer) {
      this.signer = await this.provider.getSigner();
    }
    return this.signer;
  }

  async stake(amount: string, userId: string) {
    const parsedAmount = parseFloat(amount);
    if (isNaN(parsedAmount) || parsedAmount <= 0) throw new Error("Invalid amount");

    await new Promise(resolve => setTimeout(resolve, 2000));

    const stakingRef = collection(db, 'staking');
    await addDoc(stakingRef, {
      userId,
      amount: parsedAmount,
      status: 'active',
      timestamp: serverTimestamp()
    });

    const logsRef = collection(db, 'activity_logs');
    await addDoc(logsRef, {
      userId,
      type: 'stake',
      description: `Staked ${parsedAmount.toFixed(2)} AURAXX`,
      timestamp: serverTimestamp()
    });
    
    return true;
  }

  async unstake(amount: string, userId: string) {
    const parsedAmount = parseFloat(amount);
    if (isNaN(parsedAmount) || parsedAmount <= 0) throw new Error("Invalid amount");

    await new Promise(resolve => setTimeout(resolve, 2000));

    const logsRef = collection(db, 'activity_logs');
    await addDoc(logsRef, {
      userId,
      type: 'unstake',
      description: `Unstaked ${parsedAmount.toFixed(2)} sAURAXX`,
      timestamp: serverTimestamp()
    });

    return true;
  }
}

export const stakingService = new StakingService();
