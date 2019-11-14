import narrative from "./narrative"
import questions from "./questions"
import { Agent } from "narratory"

const agent: Agent = {
    agentName: "My first chat app",
    narrative,
    questions,
    bridges: ["So", "Where were we", "Now"],
    credentials: require("../google_credentials.json")
}

export default agent