import { test, expect } from '@playwright/test';

test.describe('Homepage', () => { // all tests for homepage grouped here

  test.beforeEach(async ({ page }) => { // to run before each test in this block
    await page.goto('/')
  })
  
  test('Should display the page title', async ({ page }) => {
    await expect(page).toHaveTitle(/Bahaa Abou Zaher - Portfolio/)
  })
  
})

test.describe('Contact', () => {
  test.beforeEach(async({ page }) => {
    await page.goto('/')
  })

  test("should submit contact form successfully" , async ({ page }) => {

    // filling form and submitting
    await page.getByLabel(/name/i).fill("Test Name");
    await page.getByLabel(/email/i).fill("testing@test.com");
    await page.getByLabel(/message/i).fill("Test Message");

    await page.getByRole('button', {name: /send message/i }).click();
    
  })

  test('should show validation for invalid email', async ({ page }) => {

    const email = page.getByLabel(/email/i);
    await email.fill('wrongemail');

    const valid = await email.evaluate((el) => (el as HTMLInputElement).checkValidity());

    expect(valid).toBe(false);
  });
})