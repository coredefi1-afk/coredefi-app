import { db } from '../lib/firebase';
import { collection, query, where, orderBy, getDocs, updateDoc, doc, addDoc, serverTimestamp } from 'firebase/firestore';

export interface Notification {
  id: string;
  title: string;
  message: string;
  read: boolean;
  timestamp: any;
  type: string;
}

export class NotificationService {
  async getNotifications(userId: string): Promise<Notification[]> {
    const q = query(
      collection(db, 'notifications'),
      where('userId', '==', userId),
      orderBy('timestamp', 'desc')
    );
    try {
      const snap = await getDocs(q);
      return snap.docs.map(d => ({
        id: d.id,
        ...d.data()
      })) as Notification[];
    } catch (e) {
      console.error(e);
      return [];
    }
  }

  async markAsRead(notificationId: string) {
    try {
      const ref = doc(db, 'notifications', notificationId);
      await updateDoc(ref, { read: true });
    } catch (e) {
      console.error(e);
    }
  }
}

export const notificationService = new NotificationService();
