class invoice {
  client: string;
  amount: number;
  details: string;

  constructor(c: string, a: number, d: string) {
    (this.client = c), (this.amount = a), (this.details = d);
  }
  format() {
    return `${this.client} owns ${this.details} ${this.amount} dollars`;
  }
}

const oneForm = new invoice("Maya", 50, "Albern");
console.log(oneForm.format());

// Alternative: 
class whatever {
  constructor(
    public hey: string,
    private hey2: number,
    readonly hey3: string,
  ) {}

  format() {
    return `${this.hey}, ${this.hey2}, ${this.hey3}`
  }
}
const newalt = new whatever("Lizta", 75, "Aizel");
console.log(newalt.format());