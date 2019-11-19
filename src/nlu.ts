import { Entity, Intent } from "narratory"

export const favNumber : Intent = {
    examples: [
        "what is your favorite number",
        "what number do you like best",
        "what number gets you going"
    ]
}

export const virtualAssistant: Entity = {
    name: "virtualFriend",
    enums: [
        { alts: ["Alexa", "Amazon Alexa", "The amazon one"] },
        { alts: ["Google home", "Google assistant", "assistant from google"] },
        { alts: ["Siri"] },
        { alts: ["Cortana"]}
    ]
}

export const favAssistant: Intent = {
    entities: {
        myVirtualAssistant: virtualAssistant
    },
    examples: [
        "I love siri",
        "I talk to alexa at home",
        "I have a google home",
        "my computer has cortana",
        "google assistant on my phone"
    ]
}