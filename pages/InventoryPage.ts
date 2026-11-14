import type { Page, Locator } from '@playwright/test';

export class InventoryPage {
  readonly title: Locator;
  readonly items: Locator;
  readonly cartBadge: Locator;

  constructor(private readonly page: Page) {
    this.title = page.locator('[data-test="title"]');
    this.items = page.locator('[data-test="inventory-item"]');
    this.cartBadge = page.locator('[data-test="shopping-cart-badge"]');
  }

  async addToCart(productName: string): Promise<void> {
    await this.items
      .filter({ hasText: productName })
      .getByRole('button', { name: 'Add to cart' })
      .click();
  }
}
