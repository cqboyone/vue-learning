//CommonJs模块化规范
const {add,mul} = require('./mathUtils')
console.log(add(1,2))
console.log(mul(1,2))


//es6模块化规范
import {name,age} from "./info";
console.log(name)
console.log(age)