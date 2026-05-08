#!/usr/bin/env node

import { Command } from "commander";
import { execSync } from "child_process";
import fs from "fs";
import chalk from "chalk";

const program = new Command();

program
  .name("gitpush")
  .description("Push files to git in one command")
  .version("1.0.0");

program
  .argument("<target>", "all OR filepath")
  .argument("<message>", "commit message")
  .action((target, message) => {
    try {

      // CHECK IF INSIDE GIT REPO

      try {
        execSync("git rev-parse --is-inside-work-tree", {
          stdio: "ignore",
        });
      } catch {
        console.log(
          chalk.red("This is not a git repository.")
        );
        process.exit(1);
      }

      // ADD FILES

      console.log(
        chalk.blue("\nAdding files...")
      );

      if (target === "all") {

        execSync("git add .", {
          stdio: "inherit",
        });

      } else {

        // check file exists

        if (!fs.existsSync(target)) {
          console.log(
            chalk.red(`File not found: ${target}`)
          );

          process.exit(1);
        }

        execSync(`git add "${target}"`, {
          stdio: "inherit",
        });
      }


      // COMMIT

      console.log(
        chalk.yellow("\nCreating commit...")
      );

      execSync(`git commit -m "${message}"`, {
        stdio: "inherit",
      });

      // GET CURRENT BRANCH

      const branch = execSync(
        "git branch --show-current"
      )
        .toString()
        .trim();

      console.log(
        chalk.green(
          `\nPushing to branch: ${branch}`
        )
      );

      // PUSH

      execSync(
        `git push -u origin ${branch}`,
        {
          stdio: "inherit",
        }
      );

      // SUCCESS

      console.log(
        chalk.green.bold(
          "\nSuccessfully pushed to GitHub!"
        )
      );

    } catch (error) {

      console.log(
        chalk.red(
          "\nGit push failed."
        )
      );

      console.error(
        chalk.red(error.message)
      );
    }
  });

program.parse();