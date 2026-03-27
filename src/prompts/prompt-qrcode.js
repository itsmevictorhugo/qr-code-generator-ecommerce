import chalk from "chalk";

const promptQRCore = [
  {
    name:'link',
    description: chalk.yellow('Write the link to QRCode generate')
  },
  {
    name:'type', 
    description: chalk.yellow('Choose between QRCode types: (1- Normal or 2- Terminal)'),
    pattern: /^[1-2]$/,
    message: chalk.red.italic('Choose only 1 or 2'), 
    required: true,
  }
];

export default promptQRCore;