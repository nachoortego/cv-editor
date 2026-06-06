import { chromium } from "playwright";
import { spawn } from "node:child_process";
import { setTimeout as delay } from "node:timers/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const localeArg = process.argv.find((arg) => arg.startsWith("--locale="));
const locale = localeArg?.split("=")[1] === "en" ? "en" : "es";
const port = 4173;
const baseUrl = `http://127.0.0.1:${port}`;

async function waitForServer(url, attempts = 60) {
  for (let i = 0; i < attempts; i += 1) {
    try {
      const response = await fetch(url);
      if (response.ok) return;
    } catch {
      // Server still starting.
    }
    await delay(500);
  }
  throw new Error(`Preview server did not start at ${url}`);
}

function runCommand(command, args) {
  return new Promise((resolve, reject) => {
    const child = spawn(command, args, {
      cwd: root,
      shell: true,
      stdio: "inherit",
    });
    child.on("close", (code) => {
      if (code === 0) resolve(undefined);
      else reject(new Error(`${command} ${args.join(" ")} failed with code ${code}`));
    });
  });
}

function startPreview() {
  return spawn(
    "npm",
    ["run", "preview", "--", "--port", String(port), "--strictPort", "--host", "127.0.0.1"],
    {
      cwd: root,
      shell: true,
      stdio: ["ignore", "pipe", "pipe"],
    },
  );
}

async function main() {
  console.log("Building production bundle…");
  await runCommand("npm", ["run", "build"]);

  console.log("Starting preview server…");
  const server = startPreview();

  try {
    await waitForServer(baseUrl);

    const browser = await chromium.launch();
    const page = await browser.newPage();

    await page.goto(`${baseUrl}/?export=1&locale=${locale}`, {
      waitUntil: "networkidle",
    });
    await page.evaluate(() => document.fonts.ready);

    const output = path.join(root, `CV-Ignacio-Ortego-${locale}.pdf`);
    await page.pdf({
      path: output,
      preferCSSPageSize: true,
      printBackground: true,
      margin: { top: 0, right: 0, bottom: 0, left: 0 },
    });

    await browser.close();
    console.log(`Saved ${output}`);
  } finally {
    server.kill("SIGTERM");
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
