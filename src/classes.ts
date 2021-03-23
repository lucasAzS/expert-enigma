interface PeopleInterface {
  getFullName(): string;
}

class People implements PeopleInterface {
  private firstName: string;
  private lastName: string;
  readonly unchangeableName: string;
  static readonly maxAge: number;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.unchangeableName = firstName;
  }

  getFullName(): string {
    return this.firstName + ' ' + this.lastName;
  }
}

class Admin extends People {
  private editor: string;

  setEditor(editor: string): void {
    this.editor = editor;
  }

  getEditor(): string {
    return this.editor;
  }
}

const people = new People('Lucas', 'Azambuja');
console.log(people.getFullName());

const admin = new Admin('Lucas', 'Azambuja');
console.log(admin.getEditor());
