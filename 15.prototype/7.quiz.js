// 5.ingeritance를 calss문법으로 고쳐보기

class Animal {
  #name;
  #emoji;

  constructor(name, emoji) {
    this.#name = name;
    this.#emoji = emoji;
  }

  get name() {
    return this.#name;
  }

  set name(name) {
    this.#name = name;
  }

  get emoji() {
    return this.#emoji;
  }

  set emoji(emoji) {
    this.#emoji = emoji;
  }

  printName = () => {
    console.log(`${this.#name} ${this.#emoji}`);
  };
}

class Dog extends Animal {
  #owner;

  constructor(name, emoji, owner) {
    super(name, emoji);
    this.#owner = owner;
  }

  get owner() {
    return this.#owner;
  }

  set owner(owner) {
    this.#owner = owner;
  }

  play = () => {
    console.log('놀자!');
  };
}

class Tiger extends Animal {
  hunt = () => {
    console.log('사냥하자');
  };
}

const dog = new Dog('멍멍이', '😀', '홍길동');
console.log(dog);
console.log(dog.name);
console.log(dog.emoji);
console.log(dog.owner);
dog.play();
dog.printName();
console.log(dog instanceof Dog);
console.log(dog instanceof Animal);
console.log(dog instanceof Tiger);
console.log('──────────────────────────────────────────');

const tiger = new Tiger('호랭랭랭이', '😍');
console.log(tiger);
console.log(tiger.name);
console.log(tiger.emoji);
tiger.hunt();
tiger.printName();
console.log(tiger instanceof Tiger);
console.log(tiger instanceof Animal);
console.log(tiger instanceof Dog);
