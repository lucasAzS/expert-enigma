class People {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.unchangeableName = firstName;
    }
    getFullName() {
        return this.firstName + ' ' + this.lastName;
    }
}
class Admin extends People {
    setEditor(editor) {
        this.editor = editor;
    }
    getEditor() {
        return this.editor;
    }
}
const people = new People('Lucas', 'Azambuja');
console.log(people.getFullName());
const admin = new Admin('Lucas', 'Azambuja');
console.log(admin.getEditor());
