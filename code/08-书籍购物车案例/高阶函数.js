// 编程范式: 命令式/声明式
// 编程范式: 面向对象(第一公民)/函数式
// 下面是三个高阶函数
const nums = [10, 20, 40, 50, 44, 245, 432, 102, 333]
// // filter 回调函数一定要返回一个Boolean值,返回true时,把n加入一个数组;false时不会加入
// const numsNew = nums.filter(function (n) {
//   if (n < 100)
//     return true
// })
// console.log(numsNew);
//
// // map函数每次变换后都返回
// const numsNew2 = numsNew.map(function (n) {
//   return n * 2
// })
// console.log(numsNew2);
//
// // reduce 对数组所有内容进行汇总
// const total = numsNew2.reduce(function (preValue, n) {
//   return preValue + n
// }, 0);
// console.log(total);

// // 三个函数合一
// const tol = nums.filter(function (n) {
//   if (n < 100)
//     return n
// }).map(function (n) {
//   return n * 2
// }).reduce(function (preValue, n) {
//   return preValue + n
// }, 0)
// console.log(tol)

// 简写
let tol2 = nums.filter(n => n < 100).map(n => n * 2).reduce((preVlue, n) => preVlue + n)
console.log(tol2);