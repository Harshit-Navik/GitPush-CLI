# GitPush CLI

Push your code to GitHub in one command instead of typing three separate Git commands.

## Overview

GitPush is a command-line tool that saves you time and typing by combining the three most common Git operations into a single command:

```bash
gitpush all "Your commit message"
```

Instead of:

```bash
git add .
git commit -m "Your commit message"
git push -u origin main
```

This tool is perfect for developers who frequently push code changes and want a faster, simpler workflow.

## Features

- **One-command workflow** - Add, commit, and push all at once
- **Push everything or specific files** - Use `all` for everything, or specify exact files
- **Automatic branch detection** - Pushes to the correct branch automatically
- **Clear feedback** - Colored messages show exactly what's happening
- **Safety checks** - Verifies you're in a Git repository before attempting operations
- **File validation** - Checks that files exist before trying to add them
- **Error messages** - Clear explanations when something goes wrong

## Installation

### Step 1: Install Node.js

GitPush requires Node.js to run. Download and install from [nodejs.org](https://nodejs.org/). Choose the LTS version.

### Step 2: Install GitPush

From your terminal, run:

```bash
npm install -g gitpush-cli
```

### Step 3: Verify Installation

Confirm it's installed by running:

```bash
gitpush --version
```

You should see `1.0.0` displayed.

## Getting Started

### Basic Requirements

Before using GitPush, make sure:

1. You're inside a Git repository (folder with a `.git` folder)
2. Your Git user is configured:

```bash
git config user.name "Your Name"
git config user.email "your.email@example.com"
```

3. Your repository has a remote URL set up (usually origin pointing to GitHub)

### Your First Push

Navigate to your project folder and run:

```bash
gitpush all "Initial commit"
```

GitPush will:
1. Add all your changes
2. Create a commit with your message
3. Push to GitHub
4. Show you success confirmation

## Usage

### Command Syntax

```bash
gitpush <target> <message>
```

### Parameters

**target** - What files to push:
- `all` - Push all changes in the current folder
- `filename.txt` - Push a specific file (include path if not in root)
- `src/app.js` - Push a file from a subfolder

**message** - Your commit message describing what changed (required)

### Push Everything

Use `all` when you've made changes and want to push all of them:

```bash
gitpush all "Fix login bug"
```

### Push a Single File

When you've only modified one file and want to commit just that:

```bash
gitpush package.json "Update dependencies"
```

### Push Multiple Files in Subdirectories

When you want to push a specific file from a folder:

```bash
gitpush src/components/Button.js "Refactor button component"
```

## Examples

### Scenario 1: Daily Development Work

You've made several changes throughout the day and want to push them:

```bash
gitpush all "Daily work: completed user authentication feature"
```

### Scenario 2: Quick Bug Fix in One File

You fixed a critical bug in just one file:

```bash
gitpush src/database.js "Hotfix: prevent database connection leak"
```

### Scenario 3: Update Configuration Files

You updated project configuration:

```bash
gitpush .env.example "Update environment template"
```

### Scenario 4: Multiple Separate Commits

If you want to push changes in stages (one file at a time):

```bash
gitpush src/auth.js "Feature: add two-factor authentication"
gitpush src/api/routes.js "Feature: add 2FA endpoints"
gitpush tests/auth.test.js "Test: add 2FA unit tests"
```

Each command creates a separate commit that you can track individually.

## Configuration

GitPush uses your existing Git configuration. No additional setup is needed.

If you want to change your Git user information globally, run:

```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

## Troubleshooting

### Error: "This is not a git repository"

**Problem:** You're not inside a Git project folder.

**Solution:** 
- Navigate to your Git project folder
- If you need to create a new repository, run `git init` first

### Error: "File not found: filename.js"

**Problem:** The file path you specified doesn't exist or is incorrect.

**Solution:**
- Check the file name spelling
- Use the correct path relative to your current directory
- Use `all` instead if you want all changes

### Error: Git push failed

**Problem:** Push operation failed (could be network, permissions, or conflicts).

**Solutions:**
1. Check your internet connection
2. Verify your GitHub credentials are configured
3. Check if your repository has remote URL: `git remote -v`
4. Try a manual push to see the exact error: `git push`

### Command not found: "gitpush"

**Problem:** GitPush isn't installed or not in your PATH.

**Solutions:**
1. Verify installation: `npm list -g gitpush-cli`
2. If not installed, run: `npm install -g gitpush-cli`
3. On macOS/Linux, ensure npm global bin is in your PATH

### "git push" hangs or doesn't complete

**Problem:** Push operation is taking too long or seems stuck.

**Solution:**
- Press Ctrl+C to cancel
- Check your internet connection
- Try pushing with `git push` directly to see if there's a larger issue

## FAQ

### Can I undo a push?

No, GitPush can't undo a push, but Git can. If you pushed something by mistake, you can reset:

```bash
git reset HEAD~1
git push --force-with-lease
```

Be careful with force push on shared repositories.

### What if I need to push to a different branch?

GitPush automatically detects and pushes to your current branch. If you're on a different branch (not main):

```bash
gitpush all "Your message"
```

It will push to whatever branch you're currently on.

### Can I use it on Windows?

Yes, GitPush works on Windows, macOS, and Linux. Just make sure you have Node.js and Git installed.

### Do I need to be logged into GitHub?

Yes, your Git credentials need to be configured. If you're pushing via HTTPS, Git might prompt you for credentials. If using SSH, ensure your SSH key is added to GitHub.

### Can I commit without pushing?

Not with GitPush. GitPush always does all three steps. If you want to commit without pushing, use Git directly:

```bash
git add .
git commit -m "Your message"
```

### What commit message format should I use?

Use any message you want, but follow these best practices:
- Start with a verb: "Add", "Fix", "Update", "Remove"
- Be descriptive but concise
- Examples: "Fix nav menu alignment", "Add user profile page", "Update dependencies"

### Is my data safe?

GitPush only runs standard Git commands. It doesn't store, modify, or send data anywhere except to your configured Git remote (usually GitHub).

### How is this different from just using Git?

GitPush saves you from typing three commands every time. For developers pushing code 5-10 times a day, it significantly reduces repetitive typing and is less error-prone.

### Can I use GitPush with GitLab, Bitbucket, or other platforms?

Yes, GitPush works with any Git hosting platform. It only requires a configured Git repository and remote URL.

## Author

Harshit Navik

## License

ISC License
