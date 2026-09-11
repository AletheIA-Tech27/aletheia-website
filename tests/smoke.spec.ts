import { test, expect } from '@playwright/test';

test.describe('Smoke tests', () => {
  test('home page loads and displays hero', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('h1')).toBeVisible();
    await expect(page.locator('text=Solicita tu presupuesto')).toBeVisible();
  });

  test('lead form submits successfully in test mode', async ({ page }) => {
    await page.goto('/');

    // Scroll to form
    await page.locator('#contacto').scrollIntoViewIfNeeded();

    // Fill form with valid data
    await page.fill('#name', 'Juan Pérez');
    await page.fill('#email', 'juan@ejemplo.com');
    await page.fill('#phone', '+52 55 1234 5678');
    await page.fill('#message', 'Este es un mensaje de prueba para verificar el formulario.');
    await page.check('#consent');

    // Submit
    await page.click('button[type="submit"]');

    // Wait for success toast
    await expect(page.getByText('¡Mensaje enviado!', { exact: true }).first()).toBeVisible({ timeout: 10000 });
  });

  test('lead form shows validation errors for empty fields', async ({ page }) => {
    await page.goto('/');
    await page.locator('#contacto').scrollIntoViewIfNeeded();

    // Try to submit empty form
    await page.click('button[type="submit"]');

    // Check for validation errors
    await expect(page.locator('text=El nombre debe tener al menos 2 caracteres')).toBeVisible();
    await expect(page.locator('text=Ingresa un email válido')).toBeVisible();
    await expect(page.locator('text=Ingresa un teléfono válido')).toBeVisible();
    await expect(page.locator('text=El mensaje debe tener al menos 10 caracteres')).toBeVisible();
    await expect(page.locator('text=Debes aceptar la política de privacidad')).toBeVisible();
  });

  test('honeypot field rejects spam submissions', async ({ page }) => {
    await page.goto('/');
    await page.locator('#contacto').scrollIntoViewIfNeeded();

    // Fill valid data
    await page.fill('#name', 'Spam Bot');
    await page.fill('#email', 'spam@bot.com');
    await page.fill('#phone', '+52 55 1234 5678');
    await page.fill('#message', 'Mensaje de spam para probar honeypot.');
    await page.check('#consent');

    await page.evaluate(() => {
  const input = document.querySelector('input[name="website"]') as HTMLInputElement;
  if (input) {
    const setter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value')!.set!;
    setter.call(input, 'http://spam-site.com');
    input.dispatchEvent(new Event('input', { bubbles: true }));
  }
});

    // Submit
    await page.click('button[type="submit"]');

    // Should show spam detection error
    await expect(page.locator('text=Detección de spam')).toBeVisible({ timeout: 10000 });
  });
});