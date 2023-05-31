#!/usr/bin/env node

const { exec } = require("child_process");

function executeCommand(command) {
  return new Promise((resolve, reject) => {
    exec(command, (error, stdout, stderr) => {
      if (error) {
        reject(error);
        return;
      }
      resolve(stdout.trim());
    });
  });
}

async function fastpush() {
  try {
    const commitMessage = process.argv[2];
    if (!commitMessage) {
      console.error("Please provide a commit message.");
      return;
    }

    await executeCommand("git add .");
    await executeCommand(`git commit -m "${commitMessage}"`);
    await executeCommand("git push");

    console.log("Pushed to remote repository successfully.");
  } catch (error) {
    console.error("An error occurred:", error);
  }
}

//initialise command
fastpush();
