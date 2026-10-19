import { test } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { InventoryPage } from '../../pages/InventoryPage';
import { USERS } from '../../fixtures/test-data';

test.describe('Login', () => {
  test('standard user can log in and sees the inventory', async ({ page }) => {
    const login = new LoginPage(page);
    const inventory = new InventoryPage(page);

    await login.goto();
    await login.login(USERS.standard.username, USERS.standard.password);
    await inventory.expectLoaded();
  });

  test('locked-out user sees an error message', async ({ page }) => {
    const login = new LoginPage(page);

    await login.goto();
    await login.login(USERS.lockedOut.username, USERS.lockedOut.password);
    await login.expectErrorVisible();
  });
});
