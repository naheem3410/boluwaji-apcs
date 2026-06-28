/**
 * PaymentService — Manual implementation now.
 * When Paystack goes live: implement PaystackPaymentService and swap here.
 * The interface (IPaymentService) stays the same — zero breaking changes.
 */
import type { IPaymentService, TransactionStatus, TransactionType } from "@/lib/types";

class ManualPaymentService implements IPaymentService {
  async initiatePayment(amount: number, userId: string, type: TransactionType) {
    // TODO: Replace with Paystack Initialize Transaction API
    console.log(`[ManualPayment] Initiate ₦${amount} for user ${userId}, type: ${type}`);
    return { reference: `MANUAL-${Date.now()}` };
  }

  async verifyPayment(reference: string) {
    // TODO: Replace with Paystack Verify Transaction API
    console.log(`[ManualPayment] Verify reference: ${reference}`);
    return { status: "pending" as TransactionStatus, amount: 0 };
  }

  async confirmManual(transactionId: string, adminId: string) {
    // Admin manually confirms an offline payment
    console.log(`[ManualPayment] Admin ${adminId} confirmed transaction ${transactionId}`);
  }
}

// Single export — swap ManualPaymentService → PaystackPaymentService when ready
export const paymentService: IPaymentService = new ManualPaymentService();
