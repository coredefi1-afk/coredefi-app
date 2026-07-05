import { db } from '../lib/firebase';
import { collection, getDocs, query, limit } from 'firebase/firestore';

export class AnalyticsService {
  async getTreasuryStats() {
    try {
      const q = query(collection(db, 'treasury'), limit(1));
      const snap = await getDocs(q);
      if (!snap.empty) {
        return snap.docs[0].data();
      }
      return null;
    } catch (e) {
      console.error(e);
      return null;
    }
  }

  async getStakingPosition(userId: string) {
    try {
      // In a real app we'd sum this up, or store a total in 'profiles'
      const q = query(collection(db, 'staking'));
      const snap = await getDocs(q);
      let total = 0;
      snap.forEach(doc => {
        if (doc.data().userId === userId) {
          total += doc.data().amount;
        }
      });
      return total;
    } catch (e) {
      console.error(e);
      return 0;
    }
  }
}

export const analyticsService = new AnalyticsService();
