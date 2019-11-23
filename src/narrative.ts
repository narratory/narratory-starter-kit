import { BotTurn, ANYTHING } from "narratory"
import * as intents from "./nlu"

/* 
    Narrative, i.e the bot-driven interaction
*/

const greeting = ["Hi there", "Greetings", "hello"]

const metBefore: BotTurn = {
    say: "have we met before?",
    answers: [
        {
            intent: ["Yes", "Indeed", "Absolutely"], followup: {
                say: "Oh really, do you remember when?",
                answers: [
                    { intent: [ANYTHING], followup: "not really" }
                ]
            }
        },
        { intent: ["No", "I don't think so", "I have no idea", "I don't know"], followup: "Well, it is a pleasure to talk to you!" }
    ]
}

const favVirtualAssistant: BotTurn = {
    say: ["Which is your favorite virtual assistant?", "Who is your favorite virtual assistant?"],
    answers: [
        { intent: intents.favAssistant, followup: `Oh, I love _myFavAssistant` },
        { intent: ["What is a virtual assistant", "what do you mean"], repair: "For example, Alexa from Amazon, Google Assistant and of course Siri from Apple. Do you have a favorite?" },
        { intent: ["No", "I don't have a favorite", "No one", "none", "They all stink"], followup: "Oh, well. That's okay. Maybe you'll like me more!" }
    ]
}

const goodbye: BotTurn = {
    say: ["Alright, now, do you have any questions for me?"]
}

export default [greeting, metBefore, favVirtualAssistant, goodbye]