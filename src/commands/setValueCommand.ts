import { promisify } from "util";
import Character from "../Character";
import { Command } from "./Command";

const setTimeoutPromise = promisify(setTimeout);

export const setValueCommand = (character: Character, value: string): Command => {
  return () => {
    return setTimeoutPromise(5000).then(() => {
      character.value = value;
    });
  };
};
