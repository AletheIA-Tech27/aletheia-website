import { EmailProvider, EmailPayload, EmailResult } from '../provider';

interface StoredEmail extends EmailPayload {
  id: string;
  timestamp: number;
}

const TEST_EMAILS_KEY = '__sentEmails';

function getStoredEmails(): StoredEmail[] {
  if (typeof globalThis === 'undefined') return [];
  const stored = (globalThis as Record<string, unknown>)[TEST_EMAILS_KEY];
  return (stored as StoredEmail[]) ?? [];
}

function setStoredEmails(emails: StoredEmail[]): void {
  if (typeof globalThis === 'undefined') return;
  (globalThis as Record<string, unknown>)[TEST_EMAILS_KEY] = emails;
}

export class TestProvider implements EmailProvider {
  async send(payload: EmailPayload): Promise<EmailResult> {
    const emails = getStoredEmails();
    const id = `test-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
    const stored: StoredEmail = {
      ...payload,
      id,
      timestamp: Date.now(),
    };
    setStoredEmails([...emails, stored]);
    return { id, provider: 'test' };
  }

  static getSentEmails(): StoredEmail[] {
    return getStoredEmails();
  }

  static clearSentEmails(): void {
    setStoredEmails([]);
  }
}