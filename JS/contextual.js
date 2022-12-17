'use strict';
function Person(name) {
    // this = {}
    this.name = name;
    //! return this;
}

const per = new Person('Shuham');
console.log(per);

