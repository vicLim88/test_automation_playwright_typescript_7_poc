import { test, expect } from '../fixtures/pages';

test.describe('Login', () => {
  test.beforeEach(async ({ loginPage }) => {
    await loginPage.goto();
  });

  test('valid user lands on inventory', async ({ loginPage, inventoryPage }) => {
    await loginPage.login('standard_user', 'secret_sauce');
    await expect(inventoryPage.title).toHaveText('Products');
    await expect(inventoryPage.items).toHaveCount(6);
  });

  test('locked-out user sees an error', async ({ loginPage }) => {
    await loginPage.login('locked_out_user', 'secret_sauce');
    await expect(loginPage.error).toContainText('locked out');
  });
});
