# Contributors guide

One thanks for taking the time to contribute to TeaClient Social Bots ❤️
And Two this is full guidence of how you can contribute to the Social Bots.


# Table of contents
- [Contributors guide](#contributors-guide)
- [Table of contents](#table-of-contents)
- [Getting Started](#getting-started)
  - [Knowledge](#knowledge)
    - [Prerequisites/Requirements](#prerequisitesrequirements)
  - [Development Setup](#development-setup)
  - [Nix Setup](#nix-setup)
  - [Installing | Skip if using nix.](#installing--skip-if-using-nix)
  - [Running the bot](#running-the-bot)
    - [Running the bot Seprately](#running-the-bot-seprately)
    - [Running All bots](#running-all-bots)




# Getting Started


## Knowledge

We **require** for any contributes to have a **Basic Knowledge** of how **[TypeScript][TSGuide], [DiscordJS][DiscordJsGuide], [Node][NodeJSGuide], [TurboRepo][TurboGuide] and [Bun][BunGuide] Works.**


**Note: You should learn [JavaScript][JSGuide] first before TypeScript since TypeScript is JavaScript + Types.**

**You also may need a basic knowledge of how your ide works.**

*If you don't know the basic knowledge come back when you do have the Knowledge*


### Prerequisites/Requirements


- [Bun](https://bun.sh/)
- Discord Application.
- Discord Server

**Note: Bun Is required for this project and you will recive an error for not being on bun**

**Note: On a Nix/NixOS instance you will not have to install bun so you can skip installing bun requirement.**

Other required stuff is the knowledge based [here](#knowledge) and Required to use all everything in bun sept for when it can't then just use node but really you should be using bun to the fullest.


## Development Setup

This project uses/requires Bun as its package manager and build tool. Bun is chosen for its speed, simplicity, and compatibility with TypeScript.


## Nix Setup
With Nix we include a full flake that will help you setup that means you won't have to install everything you will just need to know how to [run it](#running-the-bot).

To get your enviroment either use direnv and allow it via `direnv allow` or do:
```
nix develop --impure
```

## Installing | Skip if using nix.

To install all of the projects dependacies using bun you can use:
```sh
bun install
```
And it should install the required deps to run.


## Running the bot
There are currently two methods:

1. Running the bot Seprately by cding like `cd bot/core`
2. Running all of the bots
  
### Running the bot Seprately 
To run the bot seprately check the [`bots`](./bots/) directory for what bot you want.
to run and cd into the bot by using this example:
```sh
cd bots/<bot>
```

You should be in bots directory.

Now to run it you can use the following command: 
```sh
bun dev
```


### Running All bots

To Run all of the bots use the following command: 
```sh
bun dev
```

This will run the bots with [Turbo repo][TurboRepo].



[DiscordJsGuide]: https://discordjs.guide/#before-you-begin
[NodeJSGuide]: https://nodejs.org/en/learn/getting-started/introduction-to-nodejs
[TSGuide]: https://www.typescriptlang.org/docs/
[JSGuide]: https://developer.mozilla.org/en-US/docs/Web/javascript
[BunGuide]: https://bun.sh/docs
[TurboGuide]: https://turbo.build/repo/docs
[TurboRepo]: https://turbo.build
[BunWebsite]: https://bun.sh/