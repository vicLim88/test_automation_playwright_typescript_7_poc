import { test, expect } from '../fixtures/pages';

test('adding a product updates the cart badge', async ({ loginPage, inventoryPage }) => {
  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');
  await inventoryPage.addToCart('Sauce Labs Backpack');
  await expect(inventoryPage.cartBadge).toHaveText('1');
});
