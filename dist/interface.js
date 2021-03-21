var user = {
    name: 'lucas',
    age: 23,
    getMessage: function () {
        return 'Hello' + this.name;
    }
};
var user2 = {
    name: 'someone'
};
console.log(user.getMessage());
