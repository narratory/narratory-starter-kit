# Starting kit for building chatbots and voice-apps with Narratory

Documentation: [narratory.io](https://narratory.io)

## Dependencies:
* Git - for cloning this library ([download here](https://git-scm.com/downloads)).
* Node & Npm - to run Narratory create and chat commands. Version v11+ recommended ([download here](https://nodejs.org/en/download/)).
* Typescript - to build Narratory scripts ([download here](https://www.typescriptlang.org/)).
* A Dialogflow agent - since Dialogflow is used to run Narratory agents (create one for free at [dialogflow.com](https://dialogflow.com)).

Recommended editor:
* Virtual Studio Code - since it has excellent built-in Typescript support ([download here](https://code.visualstudio.com/)).

## Getting started

* Open your terminal
* Clone this repository with `git clone https://github.com/narratory/narratory-starter-kit YOUR_FOLDER_NAME`.
* Enter the new library with `cd YOUR_FOLDER_NAME`
* Give Narratory access to your new Dialogflow agent by following these steps:
  * Open your browser and go to settings in the _Dialogflow console_ for your agent.
  * Press on the _service account email_, taking you to _Google cloud console_ (If this is your first time in the Google cloud console, accept the terms).
  * Once inside, click _Create service account_ in the top 
  * Give the service account a name, for example Narratory.
  * In the next step, add the role _Dialogflow API Admin_ to to the service account.
  * In the final step, press _Create a key_ and select the _JSON_ alternative and download it to your computer.
  * Open the file and fill in the credentials in `google_credentials.json` in the root of this directory.
* Create and start an interactive chat in the command-line with your bot with `npm run start`.

## Start creating 

Please head over to the Narratory docs at [narratory.io](https://narratory.io) to read more.

* Open your directory with your editor and observe the following files in the `/src` folder:
  * agent.ts - this is your agent defined with a name, a language, a narrative, a questions bank, an array of bridges and your credentials
  * narrative.ts - this is where the main narrative (a sequence of BotTurns) in this starter-kit is defined. 
  * questions.ts - this is where the question bank (various UserTurns) are defined.
  * nlu.ts - this is where your custom entities and intents are defined.
  * user.ts - this is an automatically generated file (by the `npm run watch` command) that gives you autocomplete for all entity names

> Try to do some changes in narrative.ts and run `npm run start` again to notice the difference!

## Testing your app

For your convenience, it is possible to test your Narratory app directly in your terminal with the command `npm run chat` (or `npm run start` if you also want to update the agent). 

You can also test it right away in the Google Assistant (Google Actions) test console. In your browser, follow the link "See how it works in Google Assistant" in the right column in the Dialogflow console to open it up, or go to Integrations in the left menu and enter it from there. The latter is recommended if you are doing continuous changes since you can check the option to update the Google Action automatically once your Dialogflow agent updates.

## All commands

* `npm run start` to start or update the bot and then launch an interactive chat in the terminal.
* `npm run update` to update the bot with new content.
* `npm run chat` to start the interactive chat in the command-line window.
* `npm run watch` to run the Typescript compiler and a Narratory-specific watcher that creates a user.ts file for you. This file allows you to get autocomplete for every entity variable you create.

