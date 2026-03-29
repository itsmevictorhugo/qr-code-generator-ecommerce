import chalk from "chalk";

const promptSchemaMainPrompt = [
  {
    name: 'select', 
    description: chalk.yellow.bold('Choose the tool (1- QRCode or 2- PASSWORD)'),
    pattern: /^[1-2]$/, 
    message: chalk.red.italic('Choose between 1 and 2'), 
    required: true
  }
]

export default promptSchemaMainPrompt;