import { UserTurn } from "narratory"
import * as nlu from "./nlu"

/*
    Questions and other user-driven initiatives
*/

const nameQuery: UserTurn = {
  intent: ["What is your name", "who are you", "what can I call you"],
  bot: "I don't have any name yet, unfortunately."
}

const favoriteNumber = Math.floor(Math.random() * 9) + 1 // A number between 1 and 9. Note, this is calculated when the agent is created, not when it is run.

const favoriteQuestions: UserTurn[] = [
  { intent: nlu.favNumber, bot: `my favorite number is ${favoriteNumber}` },
  {
    intent: ["What time is it?", "what time is it right now?"],
    bot: "It's time to build some voice apps, that is for sure!"
  }
]

export default [nameQuery, ...favoriteQuestions]
