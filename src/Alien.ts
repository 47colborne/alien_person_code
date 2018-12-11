interface Alien {
  trait: string;
}

class Alien {
  constructor(trait: string) {
    this.trait = trait;
  }

  public display() {
    return this.trait;
  }
}

export default Alien;
