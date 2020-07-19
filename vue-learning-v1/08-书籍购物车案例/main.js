const app = new Vue({
      el: '#app',
      data: {
        books: [
          {
            id: 1,
            name: '《算法导论》',
            date: '2006-9',
            price: 85.00,
            count: 1
          },
          {
            id: 2,
            name: '《UNIX编程艺术》',
            date: '2006-2',
            price: 59.00,
            count: 1
          },
          {
            id: 3,
            name: '《编程珠玑》',
            date: '2008-10',
            price: 39.00,
            count: 1
          },
          {
            id: 4,
            name: '《代码大全》',
            date: '2006-3',
            price: 128.00,
            count: 1
          },
        ]
      },
      computed: {
        totalPrice() {
          // let totalPrice = 0
          // // 遍历方法1
          // for (let item of this.books) {
          //   totalPrice += item.price * item.count
          // }

          // 遍历方法2
          // for(let i in this.books){
          //   totalPrice += this.books[i].price * this.books[i].count
          // }

          // 遍历数组方法3
          return this.books.reduce(function (preVlue, book) {
            return preVlue + book.price * book.count
          }, 0)

        }
      },
      methods: {
        // getFinalPrice(price) {
        //   return '$' + price.toFixed(2)
        // }
        decrement(item) {
          // console.log(item);
          if (this.books[item.id - 1].count-- <= 1) {
            this.books[item.id - 1].count = 1
          }
        },
        increment(item) {
          // console.log(item);
          this.books[item.id - 1].count++
        },
        remove(index) {
          this.books.splice(index, 1)
        }
      },
      filters: {
        showPrice(price) {
          return '$' + price.toFixed(2)
        }
      }
    }
)
