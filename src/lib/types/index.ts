// ─── Core Types ────────────────────────────────────────────────────────────────
// These types are designed for easy extension when the backend is connected.

export type UserRole = "member" | "admin" | "super_admin";
export type MemberStatus = "pending" | "active" | "suspended" | "expelled";
export type LoanStatus = "pending" | "approved" | "rejected" | "active" | "repaid" | "defaulted";
export type TransactionStatus = "pending" | "successful" | "failed";
export type TransactionType = "contribution" | "loan_disbursement" | "loan_repayment" | "withdrawal" | "penalty";
export type PaymentMethod = "manual" | "paystack"; // extend here when Paystack is live

export interface User {
  id: string;
  memberId: string; // predetermined member registration number
  fullName: string;
  email: string;
  phone: string;
  role: UserRole;
  status: MemberStatus;
  passportUrl?: string;
  bvnVerified: boolean;
  ninVerified: boolean;
  emailVerified: boolean;
  phoneVerified: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface Contribution {
  id: string;
  userId: string;
  amount: number;
  month: string; // "2024-01"
  paymentMethod: PaymentMethod;
  status: TransactionStatus;
  paidAt?: string;
  confirmedBy?: string; // admin ID for manual confirmation
  createdAt: string;
}

export interface Loan {
  id: string;
  userId: string;
  amount: number;
  balance: number; // member savings balance at time of request
  adminCharge: number; // 0.5% of amount
  netDisbursed: number; // amount - adminCharge
  status: LoanStatus;
  moratoriumEndsAt?: string; // 30 days from approval
  guarantorA: Guarantor;
  guarantorB?: Guarantor;
  appliedAt: string;
  approvedAt?: string;
  approvedBy?: string;
  repaidAt?: string;
}

export interface Guarantor {
  name: string;
  relationship: string;
  phone: string;
  memberId?: string; // for category A (APCS member)
}

export interface Transaction {
  id: string;
  userId: string;
  type: TransactionType;
  amount: number;
  status: TransactionStatus;
  paymentMethod: PaymentMethod;
  reference?: string; // Paystack reference when live
  note?: string;
  createdAt: string;
}

export interface ExcoMember {
  id: string;
  name: string;
  title: string;
  imageUrl?: string; // placeholder until photos provided
  bio?: string;
}

// ─── Service Interfaces (for extension) ────────────────────────────────────────

export interface IPaymentService {
  initiatePayment(amount: number, userId: string, type: TransactionType): Promise<{ reference: string; url?: string }>;
  verifyPayment(reference: string): Promise<{ status: TransactionStatus; amount: number }>;
  confirmManual(transactionId: string, adminId: string): Promise<void>;
}

export interface IDisbursementService {
  disburse(userId: string, amount: number, loanId: string): Promise<{ reference: string; status: TransactionStatus }>;
  bulkDisburse(items: { userId: string; amount: number; loanId: string }[]): Promise<void>;
}

export interface INotificationService {
  sendEmail(to: string, subject: string, body: string): Promise<void>;
  sendSMS(to: string, message: string): Promise<void>;
}

export interface IVerificationService {
  verifyBVN(bvn: string, userId: string): Promise<{ verified: boolean }>;
  verifyNIN(nin: string, userId: string): Promise<{ verified: boolean }>;
  sendOTP(phone: string): Promise<void>;
  verifyOTP(phone: string, otp: string): Promise<{ valid: boolean }>;
}
