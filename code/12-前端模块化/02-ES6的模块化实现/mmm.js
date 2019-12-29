// 1.导入的{}中定义的变量
import {flag, sum} from "./aaa.js";

// 2.导入直接export定义的变量
import {num1, num2} from "./aaa.js";

// 3.导入 export的 function
import {mul, Person} from "./aaa.js";

// 4.导入 default
import add from './aaa.js'

// 5.统一全部导入
import * as aaa from './aaa.js'

if (flag) {
  console.log('mmm');
  console.log(sum(1, 22));

  console.log(num1);

  console.log(mul(33, 12));
  const p = new Person()
  p.run()

  add('你好')

  console.log(aaa.num1);
  aaa.default('aaa.default')
}