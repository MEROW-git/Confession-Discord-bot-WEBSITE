---
title: About The Bot
image: /images/banner-author.png
description: "About the Anonymous Confession Bot for Discord"
layout: about
education:
  title: Core Features
  degrees:
    - university: "Anonymous Confessions"
      content: "Users submit confessions privately through `/confess` without posting directly into public channels."
    - university: "Review Before Posting"
      content: "Admins review pending submissions in a private channel so nothing goes live without approval."
    - university: "Easy Server Setup"
      content: "Use `/setup` once to choose the public confession channel, review channel, and admin role."
    - university: "Supabase Storage"
      content: "Server settings and confession workflow data are stored through your Supabase project."

experience:
  title: Main Commands
  list:
    - /confess
    - /setup
    - /settings
    - /pending

---

The Anonymous Confession Bot is built for Discord communities that want private submissions with a clear moderation workflow. Members can send confessions without exposing themselves, while moderators stay in control of what gets published.

The bot is designed to be practical to run. After setting your environment variables and inviting it to your server, you can finish setup from Discord itself with `/setup`. From there, confessions are collected, reviewed, and posted through a simple approval flow.

If you want to self-host it, the project uses Python for the bot and Supabase for storage. The source code is available on GitHub, so you can adapt the bot for your own community rules and style.
