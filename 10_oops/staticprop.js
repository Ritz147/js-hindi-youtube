class User{
  constructor(username){
    this.username=username
  }
  logMe(){
    console.log(`Username: ${this.username}`)
  }
  static createId(){
    return `123`
  }
}
const ritu=new User("ritu")
//console.log(ritu.createId())
class Teacher extends User{
  constructor(username,email){
    super(username)
    this.email=email
  }
}
const iphone=new Teacher("iphone","i@phone.com")
iphone.logMe()
//console.log(iphone.createId())