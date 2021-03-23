const user = {
    name: 'lucas',
    age: 23,
    getMessage() {
        return 'Hello' + this.name;
    },
};
const user2 = {
    name: 'someone',
};
console.log(user.getMessage());
