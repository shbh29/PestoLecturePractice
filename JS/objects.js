let user = {
    fname: "abc",
    9: "123",
    obj: {
        why: "This kolaveri Di"
    },
    lname: "Jobya",
    getFullName: function() {
        return this.fname + ' ' + this.lname;
    },
    'full.name': "abc Jobya",
    names: ["ja", "ja", "ja", "kabutar", "ja", "ja", "ja"]
};

// console.log(user['9']);
// console.log(user['full.name']);
// console.log(user.obj.why);

user.getFullName.hiddenName = "Akash Jobanputra";

console.log(user.getFullName.hiddenName)

console.log("function print: ",user.getFullName)

// console.log(user.names)

user.names["favSong"] = "Mummy";

for(let i of user.names) {
    console.log("for: ", i, typeof i);
}
// console.log(typeof user.names);

user.names.push(999);
console.log(user.names)

console.log(user);
console.log(delete user.names);
console.log(delete user.names);
console.log(delete user.names);
console.log(user);


