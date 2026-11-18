import { test, expect } from '@playwright/test';

test('My First Playwright',async({page})=>{
  await page.goto("https://www.google.com");
  
})