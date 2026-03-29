<div align="center">

<img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" />
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" />
<img src="https://img.shields.io/badge/ES%20Modules-enabled-blue?style=for-the-badge" />

# 🛒 QR Code Generator - E-commerce Toolkit

**A Node.js CLI toolkit for e-commerce operations: generate QR Codes from any URL and create secure passwords - all from the terminal.**

</div>

---

## 📌 About

This project is a terminal-based toolkit built for e-commerce workflows. It lets you generate QR Codes directly in the terminal or as a standard output, and create randomized secure passwords with configurable character sets - without ever leaving the command line.

The project is structured with a strong focus on **modularity and scalability**: each feature lives in its own service layer, prompt schemas are decoupled from the business logic, and the password character set logic uses the **Extract Method** refactoring technique to keep responsibilities clean and isolated.

New tools can be added to the menu with minimal friction, making this a solid foundation for a growing CLI toolkit.

---

## 🗂 Architecture

The project follows a feature-based service structure, orchestrated by a single entry point:

```
src/
├── index.js                          # Entry point - main menu, feature routing
├── prompts-schema/
│   ├── prompt-main.js                # Main menu prompt schema
│   └── prompt-qrcode.js             # QR Code input prompt schema
└── services/
    ├── qr-code/
    │   ├── create.js                 # QR Code flow orchestration
    │   └── handle.js                 # QR Code rendering logic
    └── password/
        ├── create.js                 # Password flow orchestration
        ├── handle.js                 # Password generation logic
        └── utils/
            └── permitted-characters.js  # Extract Method - character set builder
```

| File                        | Responsibility                                                              |
| --------------------------- | --------------------------------------------------------------------------- |
| `index.js`                  | Main menu prompt, routes user choice to QR Code or Password service         |
| `prompt-main.js`            | Schema for the main menu selection (1 or 2)                                 |
| `prompt-qrcode.js`          | Schema for QR Code inputs: URL and output type                              |
| `qr-code/create.js`         | Starts the QR Code prompt and delegates to the handler                      |
| `qr-code/handle.js`         | Renders the QR Code in the terminal using `qrcode-terminal`                 |
| `password/create.js`        | Orchestrates password generation and outputs the result                     |
| `password/handle.js`        | Builds the password by sampling from the permitted character pool           |
| `permitted-characters.js`   | Builds the character pool from `.env` flags (Extract Method pattern)        |

---

## ✨ Features

- 🔗 Generate a QR Code from any URL
- 🖥 Two QR Code output modes: **Normal** (larger) or **Terminal** (compact/small)
- 🔐 Generate a secure random password
- ⚙️ Configurable password rules via `.env`: uppercase, lowercase, numbers, special characters, and length
- 🎨 Colored and styled terminal prompts using `chalk`
- 📦 Scalable structure - new tools can be added as new service modules

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or higher (required for `--env-file` flag and ES Modules)

### Installation

```bash
# Clone the repository
git clone https://github.com/itsmevictorhugo/qr-code-generator-ecommerce.git

# Navigate to the project
cd qr-code-generator-ecommerce

# Install dependencies
npm install
```

### Configuration

A `.env` file is already included in the repository with the following defaults:

```env
PASSWORD_LENGTH=8
UPPERCASE_LETTERS=false
LOWERCASE_LETTERS=true
NUMBERS=true
SPECIAL_CHARACTERS=true
```

You can edit it at any time to customize the password output.

### Run

```bash
npm start
```

### Expected flow

```
Choose the tool (1- QRCode or 2- PASSWORD): 1
Write the link to QRCode generate: https://yourstore.com/product/123
Choose between QRCode types: (1- Normal or 2- Terminal): 2

QRCode sucessfull generated:

█████████████████████████████
█ ▄▄▄▄▄ █▀▀▄▀▀▀█ ▄▄▄▄▄ █
...
```

> If an invalid option is entered, the prompt displays: `Choose between 1 and 2` and `Choose only 1 or 2`

```
Choose the tool (1- QRCode or 2- PASSWORD): 2

password
xR3$kLm!9Zqw
```

---

## 🧠 Concepts Demonstrated

- **Pattern validation**: prompt inputs use regex (`/^[1-2]$/`) to restrict accepted values, with descriptive error messages (`Choose between 1 and 2`, `Choose only 1 or 2`) guiding the user on invalid input
- **Feature-based architecture**: each tool lives in its own folder with `create.js` (orchestration) and `handle.js` (logic)
- **Extract Method (refactoring)**: `permitted-characters.js` isolates the character set logic, keeping `handle.js` clean and testable
- **Decoupled prompt schemas**: input validation schemas are separated from business logic in `prompts-schema/`
- **Environment-driven configuration**: password rules are controlled entirely through `.env`, with no hardcoded values
- **ES Modules**: (`import`/`export`) modern JavaScript module system throughout
- **Async/await**: consistent async pattern across all functions for a scalable and uniform codebase

---

## 👨‍💻 Author

**Victor Hugo**  
Frontend Engineer · [GitHub](https://github.com/itsmevictorhugo) · [LinkedIn](https://linkedin.com/in/itsmevictorhugo)