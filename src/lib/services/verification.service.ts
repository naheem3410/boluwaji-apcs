/**
 * VerificationService — Placeholder now.
 * Connect BVN/NIN provider (e.g. Dojah, Smile Identity) when ready.
 */
import type { IVerificationService } from "@/lib/types";

class PlaceholderVerificationService implements IVerificationService {
  async verifyBVN(bvn: string, userId: string) {
    // TODO: Connect BVN verification provider
    console.log(`[BVN] Verify BVN for user ${userId}`);
    return { verified: false };
  }

  async verifyNIN(nin: string, userId: string) {
    // TODO: Connect NIN verification provider
    console.log(`[NIN] Verify NIN for user ${userId}`);
    return { verified: false };
  }

  async sendOTP(phone: string) {
    // TODO: Connect SMS OTP provider
    console.log(`[OTP] Send OTP to ${phone}`);
  }

  async verifyOTP(phone: string, otp: string) {
    // TODO: Verify OTP against provider
    console.log(`[OTP] Verify OTP for ${phone}`);
    return { valid: false };
  }
}

export const verificationService: IVerificationService = new PlaceholderVerificationService();
