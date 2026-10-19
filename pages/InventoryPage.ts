import { Page, Locator, expect } from '@playwright/test';

/**
 * Page Object for the SauceDemo inventory (products) page.
 */
export class InventoryPage {
  readonly page: Page;
  readonly title: Locator;
  readonly cartBadge: Locator;

  constructor(page: Page) {
    this.page = page;
    this.title = page.locator('.title');
    this.cartBadge = page.locator('.shopping_cart_badge');
  }

  async expectLoaded() {
    await expect(this.title).toHaveText('Products');
  }

  async addToCart(productName: string) {
    // SauceDemo data-test ids look like: add-to-cart-sauce-labs-backpack
    const slug = productName.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    await this.page.locator(`[data-test="add-to-cart-${slug}"]`).click();
  }

  async expectCartCount(count: number) {
    await expect(this.cartBadge).toHaveText(String(count));
  }

  async openCart() {
    await this.page.locator('.shopping_cart_link').click();
  }
}
