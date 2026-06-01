import { readFileSync, existsSync } from "node:fs";
import { join } from "node:path";
import assert from "node:assert/strict";

const root = new URL("..", import.meta.url).pathname;
const read = (path) => readFileSync(join(root, path), "utf8");

assert.equal(existsSync(join(root, "index.html")), true, "index.html should exist");
assert.equal(existsSync(join(root, "styles.css")), true, "styles.css should exist");
assert.equal(existsSync(join(root, "script.js")), true, "script.js should exist");
assert.equal(
  existsSync(join(root, ".github/workflows/pages.yml")),
  true,
  "GitHub Pages workflow should exist",
);

const html = read("index.html");
const css = read("styles.css");
const js = read("script.js");
const workflow = read(".github/workflows/pages.yml");

assert.match(html, /PipDance LLC/i, "home page should identify the company");
assert.match(html, /\+1 \(512\) 351-5695/, "home page should show the requested phone");
assert.match(html, /2026-001980071/, "home page should include the Wyoming filing ID");
assert.match(html, /30 N Gould St Ste R/, "home page should include the registered office address");
assert.match(html, /online dance/i, "home page should describe online dance teaching");
assert.match(html, /live classes/i, "home page should mention live online classes");
assert.match(html, /private coaching/i, "home page should mention private dance coaching");
assert.match(html, /choreography/i, "home page should mention choreography");
assert.match(html, /dance instruction/i, "home page should include service boundary language");
assert.match(html, /<section[^>]+id="contact"/i, "contact section should be present");
assert.match(html, /<form[^>]+action="mailto:/i, "contact form should have a mailto fallback");
assert.match(html, /aria-label="Open navigation"/, "mobile navigation button should have an accessible name");
assert.doesNotMatch(html, /86457864532/, "AT&T account number must not be published");
assert.doesNotMatch(html, /\+65 8098 8208/, "old phone number must not be published");
assert.doesNotMatch(html, /trading|investment advice|brokerage|drawdown|money transmission|financial markets/i, "old financial-services copy must not be published");

assert.match(css, /@media \(max-width: 720px\)/, "CSS should include mobile layout rules");
assert.match(css, /\.hero-media/, "CSS should style the visual hero media");
assert.match(js, /IntersectionObserver/, "JS should progressively reveal content");
assert.match(workflow, /actions\/deploy-pages@v4/, "workflow should deploy to GitHub Pages");

console.log("Site checks passed.");
