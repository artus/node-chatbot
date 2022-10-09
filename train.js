const { NlpManager } = require("node-nlp");
const manager = new NlpManager({ languages: ["nl"] }); 
const fs = require("fs"); 
const files = fs.readdirSync("./intents"); 
for (const file of files) {
  let data = fs.readFileSync(`./intents/${file}`);
  data = JSON.parse(data);
  const intent = file.replace(".json", "");
  for (const question of data.questions) {
    manager.addDocument("nl", question, intent);
  }
  for (const answer of data.answers) {
    manager.addAnswer("nl", intent, answer);
  }
} 

async function train_save() {
  await manager.train();
  manager.save();
} 

train_save();
