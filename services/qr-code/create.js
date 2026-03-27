import prompt from "prompt";
import promptQRCore from "../../src/prompts/prompt-qrcode.js";
import handle from "./handle.js";

async function createQRCode() {
  prompt.get(promptQRCore, handle);
  prompt.start();
}

export default createQRCode;