export class User {
  public readonly id: string;
  private _name: string | null = null;

  constructor(id: string) {
    this.id = id;
  }

  public setName(name: string) {
    this._name = name;
  }

  public get name(): string | null {
    return this._name;
  }
}
