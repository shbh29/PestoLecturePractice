const obj = {
    firstName: "Jane",
    friends: ["Jamal","Kamal"],
    printFriends: function() {
        this.friends.forEach((fr) => {
            console.log(`${this.firstName} knows ${fr}`);
        });
    }
}

obj.printFriends();