class StringBuilder{
    constructor(str){
        this._value = str;
    }
    get value () {
        return this._value;
    };
    append(str){
        this._value = this._value + str;
        return this._value + str;
    }
    prepend(str){
        this._value = str + this.value;
        return str + this._value;
    }
    pad(str){
        this._value = str + this.value + str;
        return str + this.value + str;
    }
}
const builder = new StringBuilder('.');
builder.append('^');
console.log(builder.value); // '.^'
builder.prepend('^');
console.log(builder.value); // '^.^'
builder.pad('=');
console.log(builder.value); // '=^.^='