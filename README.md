# Starting kit for building chatbots and voice-apps with Narratory

Dependencies:
* Newer versions of Node.js & npm (Node 11 recommended)
* Typescript
* A Dialogflow agent created (create one for free at [dialogflow.com](https://dialogflow.com))

Recommended editor: 
* Virtual Studio Code

Getting started:
* Clone this repository with `git clone https://github.com/narratory/narratory-starter-kit YOUR_FOLDER_NAME`
* Give Narratory access to your new Dialogflow agent
  * Go to settings in the Dialogflow console for your agent
  * Press on the service account email, taking you to Google cloud console
  * If this is your first time in the Google cloud console, accept the terms
  * Once inside, click "Create service account" and give it a name, for example Narratory.
  * In the next step, add the role "Dialogflow API Admin" to to the service account
  * Finally, press "Create a key" and select the JSON alternative and download it to your computer.
  * Open the file and fill in the credentials in google_credentials.json in the root of this directory.
* Create and start an interactive chat in the command-line with your bot with `npm run start`

All commands:
* `npm run start` to start or update the bot and then launch an interactive chat in the terminal.
* `npm run update` to update the bot with new content.
* `npm run chat` to start the interactive chat in the command-line window.
* `npm run watch` to run the Typescript compiler and a Narratory-specific watcher that creates a user.ts file for you. This file allows you to get autocomplete for every entity variable you create.

