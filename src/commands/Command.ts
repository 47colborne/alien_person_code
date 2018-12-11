export type Command = () => Promise<void>;

export interface CommandMapping {
  [command: string]: Command;
}
