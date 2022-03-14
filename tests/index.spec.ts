import { test, expect } from "@playwright/test";

test("Visual Regression Test", async ({ page }) => {
  if (process.env.REACT) {
    // 変更後環境に遷移する
    await page.goto("http://localhost:3000/src/");
  } else {
    // 変更前環境に遷移する
    await page.goto("https://mugi-uno.github.io/playwright-vite-vrt-sample/");
  }

  // 撮影準備のため任意の操作を行う
  await page.fill(".input", "入力値");

  expect(await page.screenshot()).toMatchSnapshot("vrt.png", {
    threshold: 0.075,
  });
});
