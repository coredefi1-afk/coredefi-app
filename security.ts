/**
 * Security Hardening Utilities
 * Validation and sanitization functions.
 */

export const sanitizeInput = (input: string): string => {
  // Basic XSS mitigation for string inputs
  return input.replace(/</g, "&lt;").replace(/>/g, "&gt;");
};

export const validateAddress = (address: string): boolean => {
  return /^0x[a-fA-F0-9]{40}$/.test(address);
};

export const enforceRateLimit = (actionId: string, limitMs: number = 1000): boolean => {
  const lastTime = sessionStorage.getItem(`rl_${actionId}`);
  const now = Date.now();
  if (lastTime && now - parseInt(lastTime, 10) < limitMs) {
    return false; // Rate limited
  }
  sessionStorage.setItem(`rl_${actionId}`, now.toString());
  return true;
};
