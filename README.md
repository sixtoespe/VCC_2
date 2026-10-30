# Version Control and Collaboration - Assignment 2

**Student Name:** sixto espejo
**Student ID:** TCBTH2078970
**Course:** Version Control and Collaboration
**Instructor:** Michael Lewis
**Date:** October 29, 2026

---

## Overview

This repository (**VCC_2**) contains my work for **Assignment 2** of the Version Control and Collaboration course. Assignment 1 covered the basics of Git and GitHub. This assignment focuses on how teams organize and review work on GitHub using **Issues** and **Pull Requests (PRs)**.

## Objectives

- Create and manage GitHub Issues to track tasks, bugs, and ideas
- Use labels, assignees, and milestones to organize issues
- Create a feature branch and make changes linked to an issue
- Open a Pull Request and request a code review
- Link Pull Requests to Issues so they close automatically when merged
- Review, comment on, and merge a Pull Request

## What are Issues?

An **Issue** is a way to track work on a GitHub repository. Issues are used to:

- **Report bugs:** describe what is broken and how to reproduce it
- **Request features:** suggest new functionality or improvements
- **Plan tasks:** break a project into small, trackable pieces
- **Discuss ideas:** let the team comment before work begins

### Parts of an Issue

| Element | Purpose |
|---------|---------|
| Title | Short summary of the problem or task |
| Description | Details, steps to reproduce, or acceptance criteria |
| Labels | Categorize the issue (e.g., `bug`, `enhancement`, `documentation`) |
| Assignees | The person responsible for the work |
| Milestone | Group issues toward a goal or deadline |
| Comments | Team discussion and updates |

## What are Pull Requests?

A **Pull Request (PR)** proposes changes from one branch to be merged into another (usually `main`). It gives teammates a place to review, discuss, and approve the code before it becomes part of the project.

### Pull Request Lifecycle

1. Create a branch from `main`
2. Make and commit changes
3. Push the branch to GitHub
4. Open a Pull Request
5. Teammates review and comment
6. Address feedback with more commits
7. Approve and merge the PR
8. Delete the merged branch

## Prerequisites

- [Git](https://git-scm.com/downloads) installed
- A [GitHub](https://github.com/) account
- A text editor or IDE (e.g., VS Code)

Check your Git installation:

```bash
git --version
```

## Assignment Workflow

1. **Create a repository** named `VCC_2` on GitHub and clone it locally
2. **Create an Issue** describing a task or improvement (add labels and an assignee)
3. **Create a branch** for the issue
4. **Make changes** and commit with clear, meaningful messages
5. **Push** the branch to GitHub
6. **Open a Pull Request** that references the issue (e.g., `Closes #1`)
7. **Review and merge** the Pull Request
8. **Verify** the issue closed automatically after the merge
9. **Take screenshots** of the Issue and the Pull Request (including the merged state) and submit them via Teams
10. **Submit** the repository link

### Example Commands

```bash
# Clone the repository
git clone https://github.com/sixtoespe/VCC_2.git
cd VCC_2

# Create a branch for the issue
git checkout -b issue-1-update-readme

# Make changes, then stage and commit
git add .
git commit -m "Update README for Assignment 2 (closes #1)"

# Push the branch to GitHub
git push origin issue-1-update-readme
```

After pushing, open a Pull Request on GitHub from `issue-1-update-readme` into `main`. After it is merged, update your local copy:

```bash
git checkout main
git pull origin main
git branch -d issue-1-update-readme
```

Verify the process with:

```bash
git log --oneline
git remote -v
```

## Linking Issues and Pull Requests

Writing one of these keywords in a PR description or commit message closes the issue automatically when the PR is merged:

- `Closes #<number>`
- `Fixes #<number>`
- `Resolves #<number>`

## Good Pull Request Practices

- Give the PR a clear, descriptive title
- Explain *what* changed and *why* in the description
- Reference the related issue
- Keep PRs small and focused on a single purpose
- Respond to review comments politely and promptly
- Make sure there are no merge conflicts before merging

## Good Issue Practices

- Write a specific title instead of something vague like "It doesn't work"
- Include steps to reproduce for bugs
- Use labels so issues are easy to filter
- Assign issues so everyone knows who owns the work
- Close issues only when the work is complete and merged

## Repository Structure

```
.
├── README.md        # Project documentation (this file)
└── ...              # Other assignment files
```

## Screenshots

_Add screenshots of the following before submitting:_

- The created Issue (with labels and assignee)
- The open Pull Request linked to the Issue
- The merged Pull Request and the closed Issue
- Terminal output of `git log --oneline` and `git remote -v`

## What I Learned

_Write a few sentences here about what you learned in this assignment, for example how Issues and Pull Requests help a team organize and review work._

## Resources

- [Pro Git Book](https://git-scm.com/book/en/v2)
- [GitHub Docs: About Issues](https://docs.github.com/en/issues/tracking-your-work-with-issues/about-issues)
- [GitHub Docs: About Pull Requests](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests)
- [GitHub Docs: Linking a PR to an Issue](https://docs.github.com/en/issues/tracking-your-work-with-issues/using-issues/linking-a-pull-request-to-an-issue)

---

_Submitted for Version Control and Collaboration, Assignment 2._
