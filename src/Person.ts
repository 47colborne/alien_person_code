interface Person {
  trait: string;
}

class Person {
  constructor(trait: string) {
    this.trait = trait;
  }

  public display() {
    return this.trait;
  }
}

export default Person;
