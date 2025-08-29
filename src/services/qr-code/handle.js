import qr from "qrcode-terminal"
import chalk from "chalk";

export default async function handle (err, result) {
  if(err){
    console.log("error on application")
    return;
  }

  const isSmall = result.type == 2
  // result busca o que está no prompt-qrcode.js, em name
  // result.type vem como string, então convertemos para número
  // foi o nome type que escolhemos no prompt
  
  qr.generate(result.link, {small: isSmall}, (qrcode) => {
    console.log(chalk.green("QR Code gerado com sucesso:\n")),
    console.log(qrcode)
  })
}