var name = '小明'
var age = 18
var flag = true

function sum(num1, num2) {
  return num1 + num2;
}

if (flag) {
  console.log(sum(1, 2));
}

// 1.导出方式1
export {
  flag,
  sum
}

// 2.导出方式2
export var num1 = 1000
export var num2 = 1.222

// 3.导出函数/类
export function mul(num1, num2) {
  return sum(num1, num2)
}

// 类
export class Person {
  run() {
    console.log('running');
  }
}

// 5.export default 导出属性或者函数. 在同一个模块中不允许重复多个
// const address = '北京市'
// export default address
export default function (args) {
  console.log(args);
}