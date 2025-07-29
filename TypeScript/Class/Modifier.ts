// private

class Person {
  public name: string;
  public age: number;
  protected location: string;
  public isMarried: boolean;
  private premium: string;

  constructor(n: string, a: number, l: string, i: boolean, p: string) {
    (this.name = n),
      (this.age = a),
      (this.location = l),
      (this.isMarried = i),
      (this.premium = p);
  }
  format() {
    return `${this.name},${this.age},${this.location} ${this.isMarried},${this.premium}`;
  }
}

class Human extends Person {
    constructor(n: string, a: number, l: string, i: boolean, p: string) {
        super(n,a,l,i,p)
    }
}

const Hello = new Human("1", 12, "2", false, "3")
console.log(Hello)


// don't understand this one!
// revise 
