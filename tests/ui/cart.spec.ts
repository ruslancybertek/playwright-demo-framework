import { test } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { InventoryPage } from '../../pages/InventoryPage';
import { USERS, PRODUCTS } from '../../fixtures/test-data';

test.describe('Cart', () => {
  test.beforeEach(async ({ page }) => {
    const login = new LoginPage(page);
    await login.goto();
    await login.login(USERS.standard.username, USERS.standard.password);
  });

  test('adding a product updates the cart badge', async ({ page }) => {
    const inventory = new InventoryPage(page);

    await inventory.expectLoaded();
    await inventory.addToCart(PRODUCTS.backpack);
    await inventory.expectCartCount(1);
  });

  test('adding two products updates the cart badge to 2', async ({ page }) => {
    const inventory = new InventoryPage(page);

    await inventory.expectLoaded();
    await inventory.addToCart(PRODUCTS.backpack);
    await inventory.addToCart(PRODUCTS.bikeLight);
    await inventory.expectCartCount(2);
  });
});
