# day01
- [安装](https://cn.vuejs.org/v2/guide/installation.html)
- 不使用var，使用let/const
- v-for
- @
- el/methods/data
- view:dom viewmode:vue mode:抽离出来的data
- ![生命周期](https://cn.vuejs.org/images/lifecycle.png)
- v-bind 动态绑定属性,如:src :href 等
    - :class 动态绑定class.不删除的class写法`class='title'`,动态绑定的class`:class='{}'`
    - `<h2 :style="{fontSize:fontSize+'px',backgroundColor:'red'}">{{message}}</h2>`不带引号是变量,带了引号是常量
- 计算属性:只调用一次,methods每次调用