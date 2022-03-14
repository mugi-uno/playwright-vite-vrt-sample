import type { PlaywrightTestConfig } from "@playwright/test";
import { devices } from "@playwright/test";

const config: PlaywrightTestConfig = {
  webServer: {
    command: "npx vite serve --config vite.vrt.config.ts",
    port: 3000,
    reuseExistingServer: true,
  },
  testDir: "./tests",
  projects: [
    {
      name: "chromium",
      use: {
        ...devices["Desktop Chrome"],
      },
    },
  ],
};

export default config;
