interface UserInterface {
  name: string;
  age?: number;
  getMessage?(): string;
}

const user: UserInterface = {
  name: 'lucas',
  age: 23,
  getMessage() {
    return 'Hello' + this.name;
  },
};

const user2: UserInterface = {
  name: 'someone',
};

console.log(user.getMessage());
