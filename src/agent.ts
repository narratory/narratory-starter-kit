import narrative from "./narrative"
import userInitiatives from "./userInitiatives"
import { Agent, Language } from "narratory"

const agent: Agent = {
    agentName: "My first chat app",
    language: Language.English,
    narrative, // See the file narrative.ts
    userInitiatives, // See the file userInitiatives.ts
    bridges: ["So", "Where were we", "Now"],
    narratoryKey: "ENTER-NARRATORY-KEY-HERE", // Enter your Narratory key here, sign up att narratory.io if you don't have one
    googleCredentials: require("../google_credentials.json") // Populate this file, or change the link to your existing credentials file. Check the README.md for how to create it.
}

export default agent
