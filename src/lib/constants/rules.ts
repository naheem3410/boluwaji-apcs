// Cooperative Rules as constants — single source of truth
// Update here and the whole app reflects changes

export const COOP_RULES = {
  MIN_MONTHLY_CONTRIBUTION: 5000, // NGN
  CONTRIBUTION_DEADLINE_DAY: 5, // 5th of subsequent month
  ADMIN_CHARGE_PERCENT: 0.5, // 0.5% deducted at source
  MAX_LOAN_PERCENT: 100, // 100% of member balance
  PENALTY_FIRST_MONTH: 2000, // NGN
  PENALTY_SUBSEQUENT_MONTHS: 5000, // NGN
  EXPULSION_CONSECUTIVE_MONTHS: 3,
  REFUND_PERIOD_MONTHS: 6,
  VOLUNTARY_WITHDRAWAL_NOTICE_MONTHS: 6,
  PARTIAL_WITHDRAWAL_NOTICE_MONTHS: 3,
  NEW_MEMBER_HALF_LOAN_MONTHS: 6, // 50% loan after 6 months
  NEW_MEMBER_FULL_LOAN_MONTHS: 12, // 100% loan after 12 months
  POST_LOAN_WAIT_MONTHS: 6, // wait after full repayment
  LOAN_MORATORIUM_DAYS: 30,
  GUARANTOR_A_MIN_SAVINGS_PERCENT: 20, // Guarantor A must have 20% of loan value
  GUARANTOR_A_LOAN_REPAID_PERCENT: 75, // Must have repaid 75% before guaranteeing
  GUARANTEED_MIN_REPAID_PERCENT: 50, // Guaranteed must repay 50% before guarantor can borrow
} as const;

export const COOP_INFO = {
  NAME: "Ibadan (Boluwaji) Alliance Progressive Cooperative",
  SHORT_NAME: "Boluwaji APCS",
  FULL_LEGAL_NAME: "BOLUWAJI (IBADAN) ALLIANCE PROGRESSIVE CICS LIMITED (APCS)",
  FOUNDED: 2017,
  EMAIL: "apcs.progressive@gmail.com", // PLACEHOLDER
  PHONE: "+2348060454800", // PLACEHOLDER
  ADDRESS: "Ibadan, Oyo State, Nigeria", // PLACEHOLDER
  TAGLINE: "Building Wealth Together, Interest-Free",
} as const;
