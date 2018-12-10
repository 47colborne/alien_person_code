import Character from "../Character";

it("has an initial value", () => {
  expect(new Character("a").value).toEqual("a");
});

it("can change its value", () => {
  const character = new Character("a");

  character.value = "A";

  expect(character.value).toEqual("A");
});
