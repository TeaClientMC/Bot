import type { Collection, SlashCommandBuilder } from "discord.js";

export declare type Handler = {
	name: string;
	execute: function;
};

export declare type Event = {
	name: string;
	once: boolean;
	execute: function;
};

export declare type SlashCommand = {
	data: SlashCommandBuilder;
	execute: function;
};

declare module "discord.js" {
	export interface Client {
		commands: Collection<unknown, Command>;
	}
}
