import narrative from "./narrative"
import questions from "./questions"
import { Agent } from "narratory"

const agent: Agent = {
    agentName: "My first chat app",
    narrative, // See the file narrative.ts
    questions, // See the file questions.ts
    bridges: ["So", "Where were we", "Now"],
    credentials: require("../google_credentials.json")
}

export default agent