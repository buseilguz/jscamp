import { BaseLogger } from "../crossCuttingConcerns/logging/logger.js"
import { users } from "../data/users.js"
import Customer from "../models/customer.js"
import User from "../models/user.js"
import UserService from "../services/userService.js"



let logger1=new BaseLogger()

let userService=new UserService(logger1)

let user1=new User(1,"engin","demiroğ", "edirne")
let user2=new User(2,"baran","gökçek", "muğla")

userService.add(user1)
userService.add(user2)



//console.log(userService.list())
//console.log(userService.getById(2))


let customer={id:1,firstName:"Engin"}

customer.lastName= "demıroğ"

console.log(customer.lastName)

console.log(".........................")
userService.load()
let customerToAdd=new Customer(9,"Seda","yılmaz","Ankara","adsds")
customerToAdd.type= "customer"
userService.add(customerToAdd)
console.log(userService.customers)
console.log(userService.employees)
console.log(userService.errors)
console.log(userService.getCustomersSorted())