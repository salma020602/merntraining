const person = {
    firstName: 'John',
    lastName: 'Doe'
};

Object.defineProperty(person, 'fullName', {
    get() {
        return '${this.firstName} ${this.lastName}'
    },
    set(name) {
        const arr = name.split(' ')// ['yyy', 'zzz']

        this.firstName = arr[0]
        this.lastName = arr[1]
    },
    //writable : true,
    configurable : true, // can be deleted or modified
    enumrable: true, // shows this property in for ... in 

})

console.log(person.fullName) // get will be invoked
person.fullName = 'yyy zzz' // set will be invoked

delete person.fullName
for (Key in person) { // enumerable
     console.log(key)
}