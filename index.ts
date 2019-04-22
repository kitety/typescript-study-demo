// var fn = () => 'Hello'
var a: number = 13
var b: boolean = true
var c: string = 'Hello' + 6
a = 45

for (let i = 0; i < 10; i++) {
  // console.log(i)
}
// Error
// console.log(i)

if (true) {
  let j = 0
}
var j: number = 12;
// console.log(j)

{
  let my_name: string = "Kitety"
  let my_name1: string = "Kitety1"
}

// Array
{
  let myArr1: (number | string)[] = [1, 2, '']
  let myArr2: (number)[] = [1, 2, 3]
  let myArr3: Array<number | boolean> = [1, 2, 3, false, 4];
  myArr3.push(12)
  // 赋值就不用定义类型,因为声明的时候定义了
  let popElement = myArr3.pop()
  myArr3 = []
}
// tuple
{
  let tuple1: [string, number, boolean] = ['string', 1, false]
  // 在后面可以追加，但是要是前面已经有了的类型，强而且不能插入，
  // 前面的几个类型必须满足，顺序要固定
  tuple1.push(2)
  // tuple1.push([])
  // tuple1=[]
  // console.log(tuple1)
}
// function
// 加问号可传可不传
function add(a: number, b: number = 20, ): number {
  if (!b) {
    b = 0
  }
  return a + b;
}
console.log(add(45))

// ...rest 扩充其他的元素
function sum(a: number, b: number, ...rest: number[]): number {
  // a+b为初始值
  let restAll: number = rest.reduce((total, num) => (total + num), a + b)
  return restAll
}
console.log(sum(45, 1, 2, 3, 4, 5, 6))

// 联合类型
function isNumber(value: any): value is number {
  // ts对应的类型判断
  // 可以进行进一步处理
  return typeof value === 'number'
}
console.log(1111, isNumber('11'))
function isString(value: any): value is string {
  return typeof value === 'string'
}
// any
{
  // 慎用
  let a: any;
  a = 10;
  a = 'String';
  a = [1, 23, 456]
  const log = (value: any) => {
    if (isNumber(value)) {
      return `Your number is ${value}`
    } else if (isString(value)) {
      return `Your string is ${value}`
    } else {
      throw new Error(`Expected string or number,but get ${value}.`)
    }
  }
  console.log(log('qqq'))
  let c: any[];
  // 报错
  // c=12;
  c = [1, [], 1, 'Hello']
}
// 联合类型
{
  const log = (value: string | number | null | undefined) => {
    if (isNumber(value)) {
      return `Your number is ${value}`
    } else if (isString(value)) {
      return `Your string is ${value}`
    } else {
      // throw new Error(`Expected string or number,but get ${value}.`)
    }
  }
  // 这样的话TS都会直接报错
  console.log(22, log(null))
  // 还有--strictNullChecks 在编译的时候null只能归于null,undefined只能归于undefined
}
// class
/* class模板 数据data 行为action */
{
  class Person {
    // 定义数据
    firstName: string;
    lastName: string;
    age: number;
  }
  let aPerson = new Person()
  // 设置内容
  aPerson.firstName = 'Kitety'
  aPerson.age = 23
  console.log(aPerson.firstName);

  class Movie {
    name: string;
    play_count: number
    time: number
    // this指向生成的对象自身
    constructor(name: string, play_count: number, time: number) {
      this.name = name
      this.play_count = play_count
    }
    // 可能对数据进行操作
    display_play_count(padding?: string) {
      if (padding) {
        return `${this.play_count} 次 ${padding}`
      }
      return `${this.play_count} 次`
    }
    // 对数据进行操作
    increse_play_count() {
      this.play_count += 1
    }
  }
  // 声称对象
  let movie = new Movie('电影', 15, 87)
  movie.name = 'Avengers'
  console.log(movie.display_play_count());
  movie.increse_play_count()
  console.log(movie.display_play_count());
}
// 继承和多态
{
  class Person {
    // 定义数据
    firstName: string;
    lastName: string;
    age: number;
    greet() {
      console.log('hi!');
    }
    otherGreet() {
      this.greet()
    }
  }
  class Programmer extends Person {
    greet() {
      console.log('hello world!');
    }
    // super 代表父类
    greetLikeNormalPerson() {
      super.greet()
    }
  }
  // class 作为类型
  let aPerson: Person = new Person()
  let aProgrammer: Programmer = new Programmer()
  // 设置内容
  aPerson.greet()
  aProgrammer.greet()
  aProgrammer.greetLikeNormalPerson()
}
// 成员可见性
{
  // 如果不写的话就默认public
  class Person {
    // 定义数据
    private firstName: string;
    private lastName: string;
    private age: number;
    public greet() {
      console.log('hi!');
    }
    public getFirstName() {
      return this.firstName
    }
    private sayHi() {
      console.log('private say hi!');
    }
    public sayHiOut() {
      this.sayHi()
    }
    public setFirstName(name: string) {
      this.firstName = name
    }
    public otherGreet() {
      this.greet()
    }
  }
  // 1.public

  // class Programmer extends Person {
  //   public greet() {
  //     console.log('hello world!');
  //   }
  //   // super 代表父类
  //   public greetLikeNormalPerson() {
  //     super.greet()
  //   }
  // }
  // // class 作为类型
  // let aPerson: Person = new Person()
  // let aProgrammer: Programmer = new Programmer()
  // // 设置内容
  // aPerson.greet()
  // aProgrammer.greet()
  // aProgrammer.greetLikeNormalPerson()

  // 2.private

  let aPerson = new Person()
  // 错误,只能在class Person内部使用
  console.log(aPerson.setFirstName('Kitety'));
  console.log(aPerson.getFirstName());
  aPerson.sayHiOut()
}
// protected
{
  // 如果不写的话就默认public
  class Person {
    // 定义数据
    protected firstName: string;
    protected lastName: string;
    private age: number;
    public greet() {
      console.log('hi!');
    }
    public getFirstName() {
      return this.firstName
    }
    private sayHi() {
      console.log('private say hi!');
    }
    public sayHiOut() {
      this.sayHi()
    }
    public setFirstName(name: string) {
      this.firstName = name
    }
    public otherGreet() {
      this.greet()
    }
  }
  class Programmer extends Person {
    public greet() {
      console.log('hello world!');
    }
    // super 代表父类
    public greetLikeNormalPerson() {
      super.greet()
    }
    public showName() {
      return this.firstName
    }
    public setName(name: string) {
      this.firstName = name
    }
  }
  // class 作为类型
  let aPerson: Person = new Person()
  let aProgrammer: Programmer = new Programmer()
  // 报错
  // console.log(aProgrammer.firstName);
  aProgrammer.setName('kitety')
  console.log(aProgrammer.showName());
  // 继承也会继承私有属性
  // console.log(aProgrammer.age);
  /**
   * public任何属性和方法都可以在子类 实例调用,默认是这个
   * protected 任何属性和方法都可以在子类调用,
   * private 任何属性和方法在本类调用
   * 注意在调用的时候,可以通过相关的public函数来调用使用受限制的函数private/protected,比如内置get/set函数等等
   * 继承的时候相关的属性都会继承
   */
}

