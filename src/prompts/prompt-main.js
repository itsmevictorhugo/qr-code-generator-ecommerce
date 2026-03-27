const mainPrompt = [
  {
    name: 'select', 
    description: 'Choose the tool (1- QRCode or 2- PASSWORD)',
    pattern: /^[1-2]$/, 
    message: 'Choose between 1 and 2', 
    required: true
  }
]

export default mainPrompt;