 class People {
  name: string;
  static sex: string = 'man';
  constructor(name: string) {
    this.name = name;
  }
  static run(): void {
      console.log(`${People.sex}`)
  }
  sayMyName(): void {
      console.log(`myName is ${this.name}`);
  }
  
}

new People('Jack').sayMyName();
abstract class abstractClass {
    public abstract fun() :void;
}