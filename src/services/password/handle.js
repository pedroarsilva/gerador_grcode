import permittedCharacters from "./utils/permitted-characters.js";

export default async function handle() {
  let characteres = [];
  let password = "";

  const passwordLenght = process.env.PASSWORD_LENGHT;
  characteres = await permittedCharacters()

  for (let i = 0; i < passwordLenght; i++) {
    const index = Math.floor(Math.random() * characteres.length);
    password += characteres[index];
  }

  return password;
}
