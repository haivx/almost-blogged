# New Blog Post

Create a new blog post from scratch: research the topic, write the content, commit, push to main, and show the Vercel preview link.

## Steps

### 1. Check GitHub authentication

Run `gh auth status` to check if GitHub CLI is authenticated.
- If not authenticated, run `gh auth login` and guide the user through it before continuing.

### 2. Ask the user for post details

Use the AskUserQuestion tool to collect:
- **Title** — the full post title
- **Description** — one sentence summary (used as the subtitle/SEO description)
- **Tags** — comma-separated list of tags (e.g. "AI engineering, React, MCP")

### 3. Research the topic using web search

Use the WebSearch tool to search for recent, high-quality information about the topic.
- Run 3–5 searches covering different angles of the topic
- Gather key facts, concepts, insights, and perspectives
- Prioritize authoritative and up-to-date sources

### 4. Write the full post content

Based on your research, write a comprehensive, well-structured blog post in the style of the existing posts in `content/writing/`. Follow these guidelines:

- Use `##` for main sections, `###` for subsections
- Use bullet lists with single `-` for list items (no trailing backslashes)
- Use `**bold**` for emphasis on key terms
- Use `>` blockquotes for notable quotes
- Use `---` as section dividers between major sections
- Use proper Unicode em-dashes `—` instead of `---` in text
- Write in an opinionated, direct, developer-friendly tone
- Aim for 800–1500 words of substantive content

### 5. Generate the slug and create the file

- Convert the title to kebab-case slug (e.g. "AI Agents in 2026" → `ai-agents-in-2026`)
- Get today's date in ISO format for the frontmatter
- Create the file at `content/writing/[slug].md` with this frontmatter structure:

```
---
title: [Title]
description: [Description]
date: [today's date as ISO string, e.g. 2026-03-08T10:00:00.000Z]
modified: [same as date]
published: true
tags:
  - [tag 1]
  - [tag 2]
---
```

Show the user the draft and ask them to confirm or request changes before proceeding.

### 6. Commit and push to main

Once the user approves the post:

1. Stage only the new post file: `git add content/writing/[slug].md`
2. Commit with message: `feat: new post - [title]`
3. Push to main: `git push origin main`

### 7. Show the Vercel deployment link

After pushing:
- Run `gh run list --limit 1` to check if there's a CI run, or just output the expected production URL
- The production site is at: **https://almost-blogged.vercel.app**
- The new post will be live at: **https://almost-blogged.vercel.app/writing/[slug]**
- Tell the user the post URL and that Vercel typically deploys within 1–2 minutes
