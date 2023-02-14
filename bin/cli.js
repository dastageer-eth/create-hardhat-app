#!/usr/bin/env node

const { execSync } = require("child_process");

const runCommand = (command) => {
  try {
    execSync(`${command}`, { stdio: "inherit" });
  } catch (e) {
    console.log(`%cError to execute ${command}`, 'color: red', e);
    return false;
  }
  return true;
};

const repoName = process.argv[2];
const gitCheckoutCommand = `git clone --depth 1 https://github.com/dastageer-eth/create-hardhat-app ${repoName}`;
const installDepsCommand = `cd ${repoName} && touch .env && rm -rf .git`;

console.log(`%cInitializing the template with name ${repoName}`, 'color: blue');
const checkOut = runCommand(gitCheckoutCommand);
if (!checkOut) process.exit(-1);

console.log(`%cInstalling dependencies for ${repoName}`, 'color: blue');
const installedDeps = runCommand(installDepsCommand);
if (!installedDeps) process.exit(-1);

console.log(`%cCongratualtions! You are ready. Follow the following to start`, 'color: green; font-size: larger');
console.log(`%ccd ${repoName} `, 'color: blue');
console.log(`%cnpm install`, 'color: blue');
console.log(`%cgit checkout -b dev`, 'color: blue');
