export class Employee {
  constructor(
    public Id: number,
    public FirstName: string,
    public LastName: string
  ) {}

  toString(): string {
    return `${this.FirstName} ${this.LastName} (Id: ${this.Id})`;
  }
}
