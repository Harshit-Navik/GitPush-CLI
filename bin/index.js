#!/usr/bin/env node

import { Command } from "commander";
import { execSync } from "child_process";
import chalk from "chalk";

const program = new Command();

program
    .name("gitpush")
    .description("Push files to git in one command")
    .version("1.0.0");

program
    .argument("<target>")
    .argument("<message>")
    .action((target, message) => {

        try {
            console.log(chalk.blue("Adding files..."));

            if (target === "all") {
                execSync("git add .", {
                    stdio: "inherit",
                });
            } else {
                execSync(`git add ${target}`, {
                    stdio: "inherit",
                });
            }

            console.log(chalk.yellow("Creating commit..."));

            execSync(`git commit -m "${message}"`, {
                stdio: "inherit",
            });

            console.log(chalk.green("Pushing to remote..."));

            execSync("git push", {
                stdio: "inherit",
            });

            console.log(
                chalk.green.bold("Successfully pushed to GitHub!")
            );

        } catch (error) {

            console.log(
                chalk.red("Git push failed")
            );

            console.error(error.message);
        }
    });

program.parse();