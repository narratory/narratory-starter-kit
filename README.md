# Starting kit for building chatbots and voice-apps with Narratory

Dependencies:
* Newer versions of Node.js & npm (Node 11 recommended)
* Typescript
* Google Cloud account with billing activated and a service-account with IAM role "Dialogflow API Admin"

Recommended editor: 
* Virtual Studio Code

Getting started:
* Fill in your Google credentials in google_credentials.json
* Create and start an interactive chat in the command-line with your bot with `npm run start`

All commands:
* `npm run start` to start or update the bot and then launch an interactive chat in the terminal.
* `npm run update` to update the bot with new content.
* `npm run chat` to start the interactive chat in the command-line window.
* `npm run watch` to run the Typescript compiler and a Narratory-specific watcher that creates a user.ts file for you. This file allows you to get autocomplete for every entity variable you create.

