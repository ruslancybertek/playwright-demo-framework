import { test, expect } from '@playwright/test';

/**
 * API tests using Playwright's built-in request fixture —
 * no extra HTTP client needed. Runs against the public
 * JSONPlaceholder demo API.
 */
test.describe('Users API', () => {
  const baseURL = 'https://jsonplaceholder.typicode.com';

  test('GET /users returns a list of users', async ({ request }) => {
    const response = await request.get(`${baseURL}/users`);
    expect(response.ok()).toBeTruthy();

    const users = await response.json();
    expect(Array.isArray(users)).toBeTruthy();
    expect(users.length).toBeGreaterThan(0);
    expect(users[0]).toHaveProperty('id');
    expect(users[0]).toHaveProperty('email');
  });

  test('POST /users creates a user', async ({ request }) => {
    const response = await request.post(`${baseURL}/users`, {
      data: { name: 'QA Demo', email: 'qa@example.com' },
    });
    expect(response.status()).toBe(201);

    const body = await response.json();
    expect(body.name).toBe('QA Demo');
    expect(body).toHaveProperty('id');
  });

  test('GET /users/1 returns a single user', async ({ request }) => {
    const response = await request.get(`${baseURL}/users/1`);
    expect(response.ok()).toBeTruthy();

    const user = await response.json();
    expect(user.id).toBe(1);
    expect(user).toHaveProperty('username');
  });
});
