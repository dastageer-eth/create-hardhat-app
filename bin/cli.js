#!/usr/bin/env node

const { execSync } = require("child_process");

const runCommand = (command) => {
  try {
    execSync(`${command}`, { stdio: "inherit" });
  } catch (e) {
    console.log(`Error to execute ${command}`, e);
    return false;
  }
  return true;
};

const repoName = process.argv[2];
const gitCheckoutCommand = `git clone --depth 1 https://github.com/dastageer-eth/create-hardhat-app ${repoName}`;
const installDepsCommand = `cd ${repoName} && touch .env && npm install`;

console.log(`Initializing the template with name ${repoName}`);
const checkOut = runCommand(gitCheckoutCommand);
if (!checkOut) process.exit(-1);

console.log(`Installing dependencies for ${repoName}`);
const installedDeps = runCommand(installDepsCommand);
if (!installedDeps) process.exit(-1);

console.log(`Congratualtions! You are ready. Follow the following to start`);
console.log(`cd ${repoName} `);
console.log(`git checkout -b dev`);
