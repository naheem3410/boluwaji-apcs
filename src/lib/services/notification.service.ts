/**
 * NotificationService — Placeholder now.
 * Connect SMS provider (e.g. Termii, Twilio) and email provider (e.g. SendGrid) when ready.
 */
import type { INotificationService } from "@/lib/types";

class PlaceholderNotificationService implements INotificationService {
  async sendEmail(to: string, subject: string, body: string) {
    // TODO: Connect SendGrid / Mailgun / etc.
    console.log(`[Email] To: ${to} | Subject: ${subject}`);
  }

  async sendSMS(to: string, message: string) {
    // TODO: Connect Termii / Twilio / etc.
    console.log(`[SMS] To: ${to} | Message: ${message}`);
  }
}

export const notificationService: INotificationService = new PlaceholderNotificationService();
