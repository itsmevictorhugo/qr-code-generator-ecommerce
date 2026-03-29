import prompt from "prompt";
import promptSchemaMainPrompt from './prompts-schema/prompt-main.js'
import createQRCode from "../src/services/qr-code/create.js";
import createPassword from "./services/password/create.js";

async function main() {
  prompt.get(promptSchemaMainPrompt, async (err, choice) => {
    if(err) console.log(err);
    
    if(choice.select == 1) await createQRCode();
    if(choice.select == 2) await createPassword();
  })
  prompt.start();
}

main();