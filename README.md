# Anonymous Confession Bot Website

This folder contains the website for the Anonymous Confession Bot.

It is built with:

- Next.js
- React
- Tailwind CSS

## Run The Website

From this folder:

```bash
npm install
npm run dev
```

Then open:

```text
http://localhost:3000
```

## Build For Production

```bash
npm run build
npm run start
```

## Main Files

- `pages/index.js` homepage
- `layouts/components/Logo.js` header and footer logo
- `config/config.json` site title and branding settings
- `config/menu.json` top and footer navigation
- `config/social.json` social links

## Invite Button

The invite button is configured in:

- `pages/index.js`

Look for:

```js
const inviteUrl =
  "https://discord.com/oauth2/authorize?client_id=YOUR_CLIENT_ID&scope=bot%20applications.commands&permissions=268823632";
```

Replace `YOUR_CLIENT_ID` with your Discord application ID, or replace the whole string with the full invite URL from the Discord Developer Portal.

## Logo Files

Custom logo images are stored in:

- `logo/darkmode2.png`
- `logo/lightmode2.png`
- `logo/darkmode.png`
- `logo/lightmode.png`

The small header logo and the large artwork can use different files depending on how the site is configured.

## Notes

- The website and the Discord bot are separate apps.
- The Discord bot runs from the repo root with `python bot.py`.
- The website runs from this `BotWebsite` folder with `npm run dev`.
