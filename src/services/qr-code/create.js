import prompt from "prompt";
import promptSchemaQRCode from "../../prompts-schema/prompt-schema-qrcode.js";
import handle from "./handle.js";


export default async function createQRCode() {
  prompt.get(promptSchemaQRCode, handle)

  prompt.start();
}

// Passord Create