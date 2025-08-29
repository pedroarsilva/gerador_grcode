import chalk from "chalk";

const promptSchemaQRCode = [
  {
    name: "link",
    description: chalk.blue("Digite o link para gerar o QR Code"),
  },
  {
    name: "type",
    description: chalk.yellow(
      "Escolha entre o tipo de QR Code(1- NORMAL) ou (2- TERMINAL)"
    ),
    pattern: /^[1-2]+$/,
    message: chalk.red.italic("Escolha apenas entre 1 e 2"),
    required: true,
  },
];

export default promptSchemaQRCode;

// Refactoring