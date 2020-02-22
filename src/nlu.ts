import { Entity, Intent } from "narratory"

export const favNumber: Intent = {
  examples: ["what is your favorite number", "what number do you like best", "what number gets you going"]
}

export const virtualAssistant: Entity = {
  name: "virtualAssistant",
  enums: [
    { name: "alexa", alts: ["alexa", "Amazon Alexa", "The amazon one"] },
    { name: "google home", alts: ["google", "Google assistant", "assistant from google"] },
    { name: "siri" },
    { name: "Cortana", alts: ["microsoft assistant"] }
  ]
}

export const favAssistant: Intent = {
  entities: {
    myFavAssistant: virtualAssistant
  },
  examples: [
    "I love siri",
    "I talk to alexa at home",
    "I have a google home",
    "my computer has cortana",
    "I like _myFavAssistant",
    "google assistant on my phone"
  ]
}
