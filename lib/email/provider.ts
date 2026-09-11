export interface EmailPayload {
  to: string;
  subject: string;
  html: string;
  text: string;
}

export interface EmailResult {
  id: string;
  provider: string;
}

export interface EmailProvider {
  send(payload: EmailPayload): Promise<EmailResult>;
}

let cachedProvider: EmailProvider | null = null;

async function loadTestProvider(): Promise<EmailProvider> {
  const { TestProvider } = await import('./providers/test');
  return new TestProvider();
}

async function loadResendProvider(): Promise<EmailProvider> {
  const { ResendProvider } = await import('./providers/resend');
  return new ResendProvider();
}

export async function getEmailProvider(): Promise<EmailProvider> {
  if (!cachedProvider) {
    const isTestEnv = process.env.NODE_ENV === 'test';
    const hasResendKey = !!process.env.RESEND_API_KEY;

    if (isTestEnv || !hasResendKey) {
      cachedProvider = await loadTestProvider();
    } else {
      cachedProvider = await loadResendProvider();
    }
  }

  return cachedProvider;
}

export function resetEmailProviderForTesting(): void {
  cachedProvider = null;
}