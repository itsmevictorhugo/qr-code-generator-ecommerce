import prompt from "prompt";
import mainPrompt from './prompts/prompt-main.js'
import createQRCode from "../src/services/qr-code/create.js";

async function main() {
  prompt.get(mainPrompt, async (err, choice) => {
    if(choice.select == 1) await createQRCode();
    if(choice.select == 2) console.log('Choosed Password');
  })
  prompt.start();
}

main();