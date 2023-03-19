class Config {
    #usNm
    #pass

    constructor(usNm, pass) {
        this.#usNm = usNM // it is private to class
        this.#pass = pass // it is private to class
    }

    get usNm() {
        return this.#usNm
    }

    printCreds() { // this method accessed by object
    console.log('UserName ${this.#usNm}, Password ${this.#pass}')
}

static notForInstance() { // to call this method, object is not required
console.log('I dont need instance')
     }
}

class DbConfig extends Config { }

class NmConfig extends Config { }

Config.notForInstance()

//const cfg = new Config('abc', 'pqr')
//console,log('Outside')
//console.log('UserName ${cfg.usNM}, Password ${cfg.pass}')
//cfg.printCreds()