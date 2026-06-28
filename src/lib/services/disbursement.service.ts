/**
 * DisbursementService — Manual now.
 * When Paystack Transfer API goes live: implement PaystackDisbursementService.
 */
import type { IDisbursementService, TransactionStatus } from "@/lib/types";

class ManualDisbursementService implements IDisbursementService {
  async disburse(userId: string, amount: number, loanId: string) {
    // TODO: Replace with Paystack Transfer API
    console.log(`[ManualDisbursement] Disburse ₦${amount} to user ${userId} for loan ${loanId}`);
    return { reference: `DISB-${Date.now()}`, status: "pending" as TransactionStatus };
  }

  async bulkDisburse(items: { userId: string; amount: number; loanId: string }[]) {
    // TODO: Replace with Paystack Bulk Transfer API
    for (const item of items) {
      await this.disburse(item.userId, item.amount, item.loanId);
    }
  }
}

export const disbursementService: IDisbursementService = new ManualDisbursementService();
