# Contributors Guide

Thank you for your interest in contributing to TeaClient Social Bots! We're excited to have you on board. This guide will walk you through everything you need to know to get started and contribute effectively to our project.

## Table of Contents

- [Contributors Guide](#contributors-guide)
  - [Table of Contents](#table-of-contents)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Development Setup](#development-setup)
      - [Nix Setup](#nix-setup)
      - [Installing Dependencies](#installing-dependencies)
    - [Running the Bot](#running-the-bot)
- [Code of Conduct](#code-of-conduct)
- [Acknowledgements](#acknowledgements)
- [Links Used](#links-used)

## Getting Started

### Prerequisites

Before you begin, ensure you have the following:

- Basic knowledge of [TypeScript](https://www.typescriptlang.org/docs/), [DiscordJS](https://discordjs.guide/#before-you-begin), [Node.js](https://nodejs.org/en/learn/getting-started/introduction-to-nodejs), [TurboRepo](https://turbo.build/repo/docs), and [Bun](https://bun.sh/docs).
- A Discord Application and Server.
- [Bun](https://bun.sh/) installed. Note: If you're using Nix/NixOS, Bun is included in the environment setup.

**Note:** It's recommended to have a basic understanding of JavaScript before diving into TypeScript, as TypeScript is essentially JavaScript with types.

### Development Setup

This project utilizes Bun as its package manager and build tool, chosen for its speed, simplicity, and compatibility with TypeScript.

#### Nix Setup

For Nix/NixOS users, a full flake is included to streamline the setup process. You can either use `direnv` and allow it via `direnv allow`, or run:
```sh
nix develop --impure
```

#### Installing Dependencies

To install all project dependencies using Bun, run:
```sh
bun install
```

### Running the Bot

There are two methods to run the bot:

1. **Running the bot separately**: Navigate to the specific bot directory (e.g., `cd bots/<bot>`) and run `bun dev`.
2. **Running all bots**: Execute `bun dev` in the root directory to run all bots with TurboRepo.


# Code of Conduct

We expect all contributors to adhere to our [Code of Conduct](#). This document outlines our community standards and provides guidelines for participating in our project.

# Acknowledgements

We'd like to thank all contributors & Team Members/Maintainers for their efforts and dedication. Your contributions are what make this project thrive.

---

# Links Used

- [TypeScript](https://www.typescriptlang.org/docs/)
- [DiscordJS](https://discordjs.guide/#before-you-begin)
- [Node.js](https://nodejs.org/en/learn/getting-started/introduction-to-nodejs)
- [TurboRepo](https://turbo.build/repo/docs)
- [Bun](https://bun.sh/docs)
