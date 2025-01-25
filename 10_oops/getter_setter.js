class User{
    constructor(email,password){
        this.email=email;
        this.password=password;
    }
    set email(value){
        this._email=value;
    }
    get email(){
        return this._email;
    }
    set password(value){
        this._password=value;
    }
    get password(){
        return `${this._password}hitesh`
    }
}
const hitesh=new User("Ritu@gmail","abc")
console.log(hitesh.password)
console.log(hitesh.email)
//getter define kiya toh setter toh define krna hi padega