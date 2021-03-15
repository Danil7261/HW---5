function Account({email, login}){
    this.email = email;
    this.login = login;
}
Account.prototype.getInfo = function(){
    console.log(`Email:${this.email}, Login:${this.login}`)
}
console.log(Account.prototype.getInfo); // function
const mango = new Account({
email: 'mango@dog.woof',
login: 'Mangozedog',
});
mango.getInfo(); // Login: Mangozedog, Email: mango@dog.woof
const poly = new Account({
email: 'poly@mail.com',
login: 'Poly',
});
poly.getInfo(); // Login: Poly, Email: poly@mail.com