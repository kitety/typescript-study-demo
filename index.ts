// var fn = () => 'Hello'
var a: number = 13;
var b: boolean = true;
var c: string = "Hello" + 6;
a = 45;

for (let i = 0; i < 10; i++) {
  // console.log(i)
}
// Error
// console.log(i)

if (true) {
  let j = 0;
}
var j: number = 12;
// console.log(j)

{
  let my_name: string = "Kitety";
  let my_name1: string = "Kitety1";
}

// Array
{
  let myArr1: (number | string)[] = [1, 2, ""];
  let myArr2: (number)[] = [1, 2, 3];
  let myArr3: Array<number | boolean> = [1, 2, 3, false, 4];
  myArr3.push(12);
  // 赋值就不用定义类型,因为声明的时候定义了
  let popElement = myArr3.pop();
  myArr3 = [];
}
// tuple
{
  let tuple1: [string, number, boolean] = ["string", 1, false];
  // 在后面可以追加，但是要是前面已经有了的类型，强而且不能插入，
  // 前面的几个类型必须满足，顺序要固定
  tuple1.push(2);
  // tuple1.push([])
  // tuple1=[]
  // console.log(tuple1)
}
// function
// 加问号可传可不传
function add(a: number, b: number = 20): number {
  if (!b) {
    b = 0;
  }
  return a + b;
}
console.log(add(45));

// ...rest 扩充其他的元素
function sum(a: number, b: number, ...rest: number[]): number {
  // a+b为初始值
  let restAll: number = rest.reduce((total, num) => total + num, a + b);
  return restAll;
}
console.log(sum(45, 1, 2, 3, 4, 5, 6));

// 联合类型
function isNumber(value: any): value is number {
  // ts对应的类型判断
  // 可以进行进一步处理
  return typeof value === "number";
}
console.log(1111, isNumber("11"));
function isString(value: any): value is string {
  return typeof value === "string";
}
// any
{
  // 慎用
  let a: any;
  a = 10;
  a = "String";
  a = [1, 23, 456];
  const log = (value: any) => {
    if (isNumber(value)) {
      return `Your number is ${value}`;
    } else if (isString(value)) {
      return `Your string is ${value}`;
    } else {
      throw new Error(`Expected string or number,but get ${value}.`);
    }
  };
  console.log(log("qqq"));
  let c: any[];
  // 报错
  // c=12;
  c = [1, [], 1, "Hello"];
}
// 联合类型
{
  const log = (value: string | number | null | undefined) => {
    if (isNumber(value)) {
      return `Your number is ${value}`;
    } else if (isString(value)) {
      return `Your string is ${value}`;
    } else {
      // throw new Error(`Expected string or number,but get ${value}.`)
    }
  };
  // 这样的话TS都会直接报错
  console.log(22, log(null));
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
  let aPerson = new Person();
  // 设置内容
  aPerson.firstName = "Kitety";
  aPerson.age = 23;
  console.log(aPerson.firstName);

  class Movie {
    name: string;
    play_count: number;
    time: number;
    // this指向生成的对象自身
    constructor(name: string, play_count: number, time: number) {
      this.name = name;
      this.play_count = play_count;
    }
    // 可能对数据进行操作
    display_play_count(padding?: string) {
      if (padding) {
        return `${this.play_count} 次 ${padding}`;
      }
      return `${this.play_count} 次`;
    }
    // 对数据进行操作
    increse_play_count() {
      this.play_count += 1;
    }
  }
  // 声称对象
  let movie = new Movie("电影", 15, 87);
  movie.name = "Avengers";
  console.log(movie.display_play_count());
  movie.increse_play_count();
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
      console.log("hi!");
    }
    otherGreet() {
      this.greet();
    }
  }
  class Programmer extends Person {
    greet() {
      console.log("hello world!");
    }
    // super 代表父类
    greetLikeNormalPerson() {
      super.greet();
    }
  }
  // class 作为类型
  let aPerson: Person = new Person();
  let aProgrammer: Programmer = new Programmer();
  // 设置内容
  aPerson.greet();
  aProgrammer.greet();
  aProgrammer.greetLikeNormalPerson();
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
      console.log("hi!");
    }
    public getFirstName() {
      return this.firstName;
    }
    private sayHi() {
      console.log("private say hi!");
    }
    public sayHiOut() {
      this.sayHi();
    }
    public setFirstName(name: string) {
      this.firstName = name;
    }
    public otherGreet() {
      this.greet();
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

  let aPerson = new Person();
  // 错误,只能在class Person内部使用
  console.log(aPerson.setFirstName("Kitety"));
  console.log(aPerson.getFirstName());
  aPerson.sayHiOut();
}
// protected
{
  // 如果不写的话就默认public
  class Person {
    // 定义数据
    protected firstName: string;
    // 这样的话在子类不能使用
    // private lastName: string;
    protected lastName: string;
    private age: number;
    public greet() {
      console.log("hi!");
    }
    public getFirstName() {
      return this.firstName;
    }
    private sayHi() {
      console.log("private say hi!");
    }
    public sayHiOut() {
      this.sayHi();
    }
    public setFirstName(name: string) {
      this.firstName = name;
    }
    public otherGreet() {
      this.greet();
    }
  }
  class Programmer extends Person {
    public greet() {
      console.log("hello world!");
    }
    // super 代表父类
    public greetLikeNormalPerson() {
      super.greet();
    }
    public showName() {
      return this.firstName;
    }
    public setName(name: string) {
      this.firstName = name;
      // this.lastName = 'lastName' + name
    }
    public getFullName(): string {
      return this.firstName + this.lastName;
    }
    // 这种方式还是不行的 会直接报错
    // public getSuperFirstName():string{
    //   return super.firstName
    // }
  }
  // class 作为类型
  let aPerson: Person = new Person();
  let aProgrammer: Programmer = new Programmer();
  // 报错
  // console.log(aProgrammer.firstName);
  aProgrammer.setName("kitety");
  console.log(aProgrammer.getFullName());
  console.log(aProgrammer.showName());
  // 测试是不行的
  // console.log('使用super来测试父类的private',aProgrammer.getSuperFirstName())

  // 继承也会继承私有属性
  // console.log(aProgrammer.age);
  /**
   * public任何属性和方法都可以在子类 实例调用,默认是这个
   * protected 任何属性和方法都可以在子类调用,
   * private 任何属性和方法在本类调用
   * 注意在调用的时候,可以通过相关的public函数来调用使用受限制的函数private/protected,比如内置get/set函数等等
   * 继承的时候相关的属性都会继承
   * 大概的范围 public > protected > private
   */
}
// 对protect的修饰
{
  class Person {
    protected firstName: string;
    protected lastName: string;
    public greet() {
      console.log("hi!");
    }
    // protected constructor就会出现错误,并且子类继承生成实例也会报错
    // private的话子类就直接不能使用super
    protected constructor(firstName: string, lastName: string) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
  }
  // protected constructor就会出现错误,并且子类继承生成实例也会报错
  // 除非子类重写constructor
  class Programmer extends Person {
    public constructor(firstName: string, lastName: string) {
      // 调用父类构造函数的方法
      super(firstName, lastName);
      console.log("programer constructor");
    }
  }
  // protected constructor就会出现错误,并且子类继承生成实例也会报错
  // let per = new Person('hello', 'kitety')
  let pro = new Programmer("hello", "kitety");
  /**
   * public 默认,子类可用
   * protected 子类可重写contructor配合super使用
   * private 子类不可用
   */
}
// static
// 不用实例化
/**
 * 通过类.属性，或者类.方法来调用，
 * protected/private 当前类不能调用，只能通过public静态方法方法调用
 * 父类protected/private 子类继承所有,子类不能直接调用protected/private属性，只能通过继承的public方法调用
 * 子类定义的方法，只要有是父类定义为public protected的才能使用，private的不能
 */
{
  class Person {
    // 静态属性
    private static age: number = 10;
    protected static name1: string = "hello";
    // public protected private一样的
    public static getStaticAge(): number {
      return Person.age;
    }
    public getAge(): number {
      return Person.age;
    }
  }
  let p = new Person();
  // console.log("静态属性", Person.age);
  console.log("静态方法", Person.getStaticAge());
  console.log("静态属性调用", p.getAge());
  class Programmer extends Person {
    public constructor() {
      // 调用父类构造函数的方法
      super();
      console.log("programer constructor");
    }
    // static getProgrammerAge(): number {
    //   return Programmer.age;
    // }
    static getProgrammerName(): string {
      return Programmer.name1;
    }
  }
  console.log("getProgrammerAge", Programmer.getStaticAge());
  console.log("getProgrammerName", Programmer.getProgrammerName());
}
// readonly 只读属性
{
  class Person {
    readonly name: string = "readonly name string";
  }
  let aPerson = new Person();
  // 会报错，只读属性
  // aPerson.name = "hello";
  console.log(aPerson.name);
}
// 枚举类型
{
  // 取出的对应的值是number
  enum DaysOfTheWeek {
    // 可以设置默认初始值，默认从0开始
    SUN = 120,
    MON,
    TUE,
    WEN,
    THU,
    FRI,
    SAT
  }
  let day: DaysOfTheWeek;
  day = DaysOfTheWeek.FRI;
  // 5
  console.log(typeof day, day);
}
// 接口
// 规定了规范
{
  // 接口
  // 名称不分大小写
  interface INamed {
    name: string;
    // 方法 无方法体
    print(name: string): void;
  }
  // 只要o有name就可以使用
  // o可以是一个接口类型，o要有name属性
  const sayName = (o: INamed) => {
    // console.log(o.name);
    // o.print(o.name)
  };
  const person = {
    name: "Hello person",
    age: 7,
    print: function(name: string): void {
      console.log("name");
    }
  };
  const bottle = {
    litres: 1,
    name: "漂流瓶",
    print: (name: string): void => {
      console.log("name");
    }
  };
  class Person {
    name: string;
    print(name: string): void {
      console.log("name");
    }
  }
  let p = new Person();
  p.name = "pp";
  /**
   * duck typing
   * 有name属性，name他可以打印；看起来像鸭子，就是鸭子
   */
  sayName(person);
  sayName(bottle);
  sayName(p);
}
// 类型别名
{
  // 定义类型别名
  type Name = string;
  let my_name: Name = "hello";
  // console.log(my_name);
  type User = {
    name: string;
    age?: number;
  };
  let obj: User = {
    name: "obj",
    age: 27
  };
  // 另一种形式
  let user: { name: string; age: number } = {
    name: "obj",
    age: 27
  };
  // type 和 interface很像
  interface IUser {
    name: string;
    // 加个？表示可传可不传
    age?: number;
    paint?(): void;
  }
  interface IUser {
    email: string;
  }
  // 装饰器可以叠加
  let iUser: IUser = {
    name: "kitety",
    age: 13,
    email: "aizaizuori@gmail.com"
  };
}
// 类实现接口
{
  interface Person {
    name: string;
    greet(): void;
  }
  // 类实现接口
  class Employee implements Person {
    name: string;
    greet(): void {
      console.log(this.name);
    }
  }
  // 用接口，用类，都是可以的
  let em1: Employee = new Employee();
  let em2: Person = new Employee();
  // 例子 支付
  interface Pay {
    post(): void;
  }
  // 真正的支付接口
  const do_pay = (pay: Pay) => {
    pay.post();
  };
  class WePay implements Pay {
    post() {}
  }
  class AliPay implements Pay {
    post() {}
  }

  let we: Pay = new WePay();
  let ali: Pay = new AliPay();
  // 调用支付
  do_pay(we);
  do_pay(ali);
}
// 类型断言
{
  // 类型断言
  interface Money {
    count: number;
    [propName: string]: any;
    // 只读
    readonly first_name: string;
  }
  class M implements Money {
    count: number;
    first_name: string;
  }
  let m: Money = new M();
  // m.first_name='111';
  const printCount = (m: Money) => {
    return m.count;
  };
  printCount(m);
  printCount({ count: 22, first_name: "hello" });
  // 这句会报错
  // 加了[propName: string]: any;就不会
  printCount({ count: 22, name: "money", first_name: "hello" });
  // 类型断言
  printCount({ count: 22, name: "money", first_name: "hello" } as Money);
}
// 接口中的函数
{
  interface Callback {
    // 简单理解为匿名函数
    (success: boolean): void;
  }
  let call: Callback;
  call = (success: boolean): void => {
    // do something
  };
}
// 类型断言
{
  let x: any = "1111111111111";
  // x是任何类型，编译器不能明确
  // <string>明确一下
  let b: string = (<string>x).substring(0, 3);
  // 没有发生类型转换
  let b1 = <number>x;
  console.log(b, typeof b1);
  function getLen(something: number | string): number {
    /**
     * something,length在编译的时候就会报错
     * 所以转换一下类型
     */
    let s = <string>something;
    if (s.length) {
      return s.length;
    } else {
      return s.toString().length;
    }
  }
  console.log(getLen(12));

  // 更好明确类型和类型里面的结构

  interface Person {
    name: string;
    age: number;
  }
  // 下面两种方式都可以
  let p = {} as Person;
  p.age = 27;
  p.name = "类型断言";
  // 另一种方式
  let p1 = <Person>{
    age: 27,
    name: "类型断言"
  };
}
// 继承和实现多个接口
{
  interface Person {
    name: string;
  }
  interface Boss {
    email: string;
  }
  interface Programmer extends Person {
    age: number;
  }
  let p: Programmer = {
    name: "kitety",
    age: 27
  };
  // 类不能有多个类，不能有多个父类
  // 但是可以实现多个接口
  // 每个属性都要实现
  class NewBoss implements Person, Boss {
    name: string;
    email: string;
  }
  let newBoss: NewBoss = {
    name: "kitety",
    email: "aizaizuori@gmail.com"
  };
  let b1: Person = newBoss;
  let b2: Boss = newBoss;
}
