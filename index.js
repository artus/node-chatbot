const { NlpManager } = require("node-nlp");
console.log("Starting Chatbot ...");
const manager = new NlpManager({ languages: ["nl"] });
manager.load();
var readline = require("readline");
var rl = readline.createInterface(process.stdin, process.stdout);console.log("Chatbot started!");
rl.setPrompt("> ");
rl.prompt();rl.on("line", async function (line) {
    const response = await manager.process("nl", line);
    console.log(response.answer);
    rl.prompt();
}).on("close", function () {
    process.exit(0);
});