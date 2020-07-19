//CommonJs模块化规范
const {add,mul} = require('./js/mathUtils')
console.log(add(1,2))
console.log(mul(1,2))


//es6模块化规范
import {name,age} from "./js/info";
console.log(name)
console.log(age)

// 依赖css文件
require('./css/normal.css')

// 依赖less文件
require('./css/special.less')