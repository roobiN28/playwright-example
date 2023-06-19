### Install browsers
npx playwright install
### Run normal tests
npx playwright test --headed

### Generate test
npx playwright codegen --viewport-size "1200, 800" --save-har "network.har" -o "tests/generatedTestLive.spec.ts" --save-trace generatedTrace https://www.w3schools.com/
### Test runner [UI MODE]
npx playwright test --ui

### Run shop test with intercept search request
npx playwright test --grep "Shop fulfill network example with Page Object" --headed


### Run example tests
Change in playwright.config.ts  testDir: './tests-examples',
<br>
npx playwright test --headed

