import * as _ from 'lodash';
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
  // 125
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
    print: function (name: string): void {
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
    post() { }
  }
  class AliPay implements Pay {
    post() { }
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
// 接口继承类
{
  class Component {
    private weight: number;
    private height: number;
    constructor(weight: number, height: number) {
      this.weight = weight;
      this.height = height;
    }
    display(): void {
      console.log(this.weight, this.height);
    }
  }
  // 接口继承类
  // 继承方法和属性，但是可以不用实现方法
  // 可以定义方法和属性
  interface Widget extends Component {
    size: number;
    hide(): void;
  }
  class Button extends Component implements Widget {
    size: number = 12;
    hide(): void {
      console.log("hide");
    }
  }
  let w: Widget = new Button(1, 2);
  w.display();
}
// Indexable Types
{
  interface States {
    // 中括号代表索引
    // 这里的index可以更改 类型为string或者number,只有这两种类型
    [index: string]: boolean;
  }
  let s1: States = {
    state: false,
    able: true
  };
  // console.log(s);
  interface States1 {
    [index: number]: boolean;
  }
  // 没有数组的方法和属性
  let s2: States1 = [false, true];

  // 这里会报错没有长度。长度只有数组才有，同时一些数组的方法也不能用
  // 这就是s2:boolean[]=[false,true]的区别
  // console.log(s2, s2.length);

  // 处理
  // 自己直接定义方法
  interface State2 {
    [index: number]: boolean;
    length: number;
    push(p: boolean): void;
    pop(): boolean;
  }
  let s3: State2 = [true, false];
  console.log(s3.length);
  s3.push(false);
  s3.pop();
  console.log(s3);

  interface State3 {
    // 类型注意要一致
    [index: string]: boolean;
    // 指定属性
    mainScreen: boolean;
  }
  let s4: State3 = {
    mainScreen: true,
    mainScreen1: true
  };
  s4["hello"] = false;

  // 复杂结构
  interface NestCss {
    color: string;
    nest?: {
      // 递归
      [select: string]: NestCss;
    };
  }
  let em1: NestCss = {
    color: "red",
    nest: {
      color1: {
        color: "red",
        nest: {
          color1: {
            color: "red"
          }
        }
      }
    }
  };
}
// 列表数据
// interface Or class
{
  interface Todo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
  }
  class Todo1 {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
  }
  let s: Todo1[] = [
    {
      userId: 1,
      id: 1,
      title: "delectus aut autem",
      completed: false
    },
    {
      userId: 1,
      id: 2,
      title: "quis ut nam facilis et officia qui",
      completed: false
    }
  ];
}
// 抽象类
// 抽象属性，抽象方法
{
  abstract class Person {
    name: string;
    constructor(name: string) {
      this.name = name;
    }
    display(): void {
      console.log("dispaly");
    }
    // 抽象方法，无方法体
    abstract find(string): Person;
    abstract age: number;
  }
  // 抽象类不能创建实例
  // let p = new Person("kitety");

  class Employee extends Person {
    code: string;
    age: number;
    constructor(name: string, code: string) {
      super(name); //必须调用父类
      this.code = code;
    }
    find(name: string): Person {
      return new Employee(name, this.code);
    }
  }
  // 继承之后就可以使用
  let p: Employee = new Employee("kitety", "well done");
  console.log(p.find("haha"));
}
// parameter properties
{
  class Person {
    private _name: string;
    private _age: number;
    constructor(name: string, age: number) {
      this._name = name;
      this._age = age;
    }
  }
  // 另一种方式
  class Person2 {
    constructor(private name: string, private age: number) { }
  }
  let p: Person = new Person("kitety", 29);
  let p2: Person2 = new Person2("kitety", 29);
  console.log(p);
}
// accessors getters setters
{
  class Person {
    private _name: string;
    age: number;
    constructor(name: string, age: number) {
      this._name = name;
      this.age = age;
    }
    getName(): string {
      return this._name;
    }
    setName(name: string): void {
      this._name = name;
    }
    // 重点
    get name(): string {
      return this._name;
    }
    // 这个地方不加返回类型
    set name(name: string) {
      this._name = name;
    }
  }
  let p: Person = new Person("kitety", 29);
  p.name = "hello1";
  // p.setName("hello");
  console.log(p.getName());
}
{
  class Rect {
    private w: number;
    private h: number;
    constructor(w: number, h: number) {
      this.w = w;
      this.h = h;
    }
    getArea() {
      // 这里要用箭头函数才能绑定this
      // 或者在这里定义变量，传递进去
      // function()..的话就不会传递this
      // this是指向这个对象，还是调用者的上下文
      return (): number => {
        return this.w * this.h;
      };
    }
  }
  let r: Rect = new Rect(2, 3);
  console.log(r.getArea()());
}
// 五种定义函数类型的方法
{
  // 1
  let a: any;
  a = function (): void {
    console.log("1");
  };

  function fun(): any {
    return function (): void {
      console.log("1");
    };
  }
  // 2
  let c: Function;
  c = function (): void {
    console.log("2");
  };

  // 3
  let d: (para: string) => string;
  d = (para: string) => {
    return para;
  };

  // 4 类型别名
  type e = (para: string) => string;
  let f: e;
  f = (para: string) => {
    return para;
  };

  // 5 interface
  interface g {
    (para: string): string;
  }
  const h: g = (para: string) => para;
}
// 函数重载
// 允许用相同的名字，不同的参数来创造多个函数
{
  // 1.函数名相同，参数名不同
  // 定义未实现的参数列表
  function sumM(x: number, y: number): number;
  function sumM(x: number, y: number, z: number): number;
  // 以上两种的组合实现
  function sumM(x: number, y: number, z?: number): number {
    // console.log(typeof z);
    if (typeof z === "undefined") {
      return x + y;
    }
    return x + y + z;
  }
  // console.log(sumM(1,2,3));

  function divide(x: number, y: number): number;
  function divide(x: string, y: number): string[];
  function divide(x: any, y: number): any {
    if (typeof x === "number") {
      return x / y;
    } else if (typeof x === "string") {
      return [x.substring(0, y), x.substring(y)];
    }
  }
  // console.log(divide("hello",2));

  // 在class中函数重载
  class Util {
    // 静态方法
    static divide(x: number, y: number): number;
    static divide(x: string, y: number): string[];
    static divide(x: any, y: number): any {
      if (typeof x === "number") {
        return x / y;
      } else if (typeof x === "string") {
        return [x.substring(0, y), x.substring(y)];
      }
    }
  }
  // let util1=new Util();
  // console.log(Util.divide(6, 2));
}
// type guards
{
  function show(x: string | number) {
    console.log(typeof x);
    if (typeof x === "number") {
      console.log("a number");
    } else {
      console.log("a string");
    }
  }
  // show(12);

  class Person { }
  let p = new Person();
  console.log(typeof p); //object
  console.log(typeof new String("string")); //object
  // 很多类型的子类型
  console.log(typeof undefined); //undefined
  console.log(typeof null); //object

  class Car {
    start() {
      console.log("Car starting");
    }
    drive() {
      console.log("Car driving");
    }
  }
  class Bike {
    start() {
      console.log("Bike starting");
    }
    ride() {
      console.log("Bike driving");
    }
  }
  // vehicle is Car 判断的意思 断言；这里用boolean就是不对的，在函数主题调用会报错
  // boolean返回值发挥的作用是在运行时
  // vehicle is Car发挥在编译时期
  function isCar(vehicle: Bike | Car): vehicle is Car {
    return (vehicle as Car).drive !== undefined;
  }
  // 跟之前的类型断言一样
  function Move(vehicle: Bike | Car) {
    vehicle.start();
    // 方法1
    // if ((vehicle as Car).drive) {
    //   (vehicle as Car).drive();
    // } else {
    //   (vehicle as Bike).ride();
    // }
    // 方法2
    // if (isCar(vehicle)) {
    //   vehicle.drive();
    // } else {
    //   vehicle.ride();
    // }
    // 方法3 这个比较好
    if (vehicle instanceof Car) {
      vehicle.drive();
    } else {
      vehicle.ride();
    }
  }
  Move(new Bike());
}
/**
 * type guards for null and undefined
    undefined 未被初始化
    null 当前不可用
    null undefined这两个有自己的类型,可以赋值给很多类型，是这些类型的子类型
    当运行tsc 加上--strictNullChecks选项，就会进行空值检查
 */
{
  // x? number|undefined
  function show1(x: number | undefined | null) {
    if (x === undefined) {
      console.log("x is not set");
    } else if (x === null) {
      console.log("x is null");
    } else {
      console.log("x is number");
    }
  }
  let x = 10;
  let y: undefined;
  let z: null = null;
  let z1: string = undefined;
  show1(x);
  show1(y);
  show1(z);
}
// 非空操作符
{
  // 但是执行strictNullChecks空检查会报错
  function splitInHalf(str: string | null): string {
    let checkString = function () {
      if (str === null || str === undefined) {
        str = "test";
      }
    };
    checkString();
    // str! 代表str不能为空
    // strictNullChecks可以过
    return str!.substring(0, str!.length / 2);
  }
  let s: string = splitInHalf("hello");
  console.log(s);
}
/**
 never类型=>无限循环/抛出异常
 可以简单的理解为类型为空，代码可能继续进行；但是never：无限循环和抛出异常就不能继续进行
 void 有返回值，期待返回
 never没有返回，不期待返回
 */
{
  function sayHi(): void {
    console.log("hi");
  }
  // 无限循环
  function loopForever(): never {
    //  无限循环
    while (true) { }
  }
  // 异常
  function throwError($msg: string): never {
    throw new Error($msg);
  }
  let s: void = sayHi();
}
/**
 * Disciminanted Unions
 */
{
  class PrintA {
    // name:string
    // type=>字符串，标识类型
    pageOrientation: 'landscape';
    // 风景画
    printLandScape(): void {
      console.log('landscape');
    }
  }
  class PrintB {
    // name:string
    // type=>字符串，标识类型
    // 属性接个字符串，可以再class使用 interface使用
    pageOrientation: 'portrait';
    // 风景画
    printPortrait(): void {
      console.log('portrait');
    }
  }
  function doPrint(pt: PrintA | PrintB): void {
    if (pt.pageOrientation === 'landscape') {
      pt.printLandScape()
    } else if (pt.pageOrientation === 'portrait') {
      pt.printPortrait()
    } else {
      let unknownPrinter: never = pt
    }
  }
  // interface
  // 神奇
  interface FullTimeEmployee {
    emeType: "FullType"
    name: string
    annualSalary: number
  }
  interface PartTimeEmployee {
    emeType: "PartTime"
    name: string
    daySalary: number
  }
  interface ContractEmployee {
    emeType: "contract"
    name: string
    hourSalary: number
  }
  type Employee = FullTimeEmployee | PartTimeEmployee | ContractEmployee
  function getEmployeeSalary(emp: Employee) {
    switch (emp.emeType) {
      case 'FullType':
        return emp.annualSalary
      case 'PartTime':
        return emp.daySalary
      default:
        return emp.hourSalary
    }
  }
  let con: ContractEmployee = {
    emeType: "contract",
    name: 'kitety',
    hourSalary: 13
  }
  console.log(getEmployeeSalary(con));
}
// 泛型 generics
// 可以再任何类型发挥作用，而不仅仅限于一种类型
// 与C#的泛型很像
{
  function getArray(items: any[]): any[] {
    return new Array().concat(items)
  }
  let a1 = getArray([1, 2, 3])
  let a2 = getArray(['1', '2', '3'])
  a1.push('4')
  a2.push(4)
  // 类型的不确定性
  console.log(a1, a2);
}
/**
 * 泛型解决问题
 * 泛型：类型占位符号
 */
{
  // 可以用很多类型来代替T
  function getArrayN<T>(items: T[]): T[] {
    return new Array<T>().concat(items)
  }
  // function getArrayN<T, U>(items: T[], name?: U): T[] {
  //   return new Array<T>().concat(items)
  // }
  let a1: number[] = getArrayN<number>([1, 2, 3])
  let a2: string[] = getArrayN<string>(['1', '2', '3'])
  // 不推荐
  let a3 = getArrayN(['1', '2', '3'])


  // 下面会报错
  // a1.push('4')
  // a2.push(4)
  // 当不传递类型的时候，会推断出相应的类型，因此下面的会报错
  // a3.push(4)
}
/**在class使用泛型 */
{
  // T 任何类型
  class List<T>{
    private data: T[];
    constructor(ele: T[]) {
      this.data = ele
    }
    add(t: T) {
      this.data.push(t)
    }
    remove(t: T) {
      let index = this.data.indexOf(t);
      if (index > -1) {
        this.data.splice(index, 1)
      }
    }
    asArray(): T[] {
      return this.data
    }
  }
  let numbers = new List<number>([1, 2])
  console.log(numbers);
  class Pair<T, S>{
    private _first: T;
    private _second: S;
    constructor(first: T, second: S) {
      this._first = first
      this._second = second
    }
    get first(): T {
      return this._first
    }
    get second(): S {
      return this._second
    }
  }
}
// 泛型在函数中使用
{
  class Pair<F, S>{
    first: F;
    second: S;
    constructor(first: F, second: S) {
      this.first = first
      this.second = second
    }
  }
  // Pair<F, S>[]== Array<Pair<F, S>>
  function getFirstArray<F, S>(pairs: Pair<F, S>[]): F[] {
    let arr: F[] = []
    for (let i = 0; i < pairs.length; i++) {
      const element = pairs[i].first;
      arr.push(element)
    }
    return arr
  }
  let numberArray: Pair<number, boolean>[] = [
    new Pair<number, boolean>(12, false),
    new Pair<number, boolean>(1, true)
  ]
  console.log(getFirstArray(numberArray));
  // 函数类型
  function findFirst<T>(items: T[], searchFunction: (t: T) => boolean): T {
    for (let i = 0; i < items.length; i++) {
      const item = items[i];
      if (searchFunction(item)) {
        return item
      }
    }
    return null
  }
  let items: number[] = [1, 2, 3]
  console.log(findFirst<number>(items, (t: number) => t % 2 === 0));
}
/**
 * 在接口中使用泛型
 */
{
  interface Pair<T, S> {
    first: T
    second: S
  }
  let p: Pair<number, string> = {
    first: 1,
    second: 'hello'
  }
  // console.log(p);
  interface Command<T, S> {
    id: T
    run(): S
  }
  let c: Command<string, number> = {
    id: Math.random().toString(36),
    run: function (): number {
      return Math.random()
    }
  }
  // console.log(c.id);
  // console.log(c.run());


  // 带接口泛型的匿名函数
  interface checkElement {
    // 匿名函数
    <T>(items: T[], toBeChecked: T, atIndex: number): boolean
  }
  function checkElementFun<T>(items: T[], toBeChecked: T, atIndex: number): boolean {
    return items[atIndex] === toBeChecked
  }
  let checker: checkElement = checkElementFun
  let items = [1, 2, 3, 4]
  console.log(checker<number>(items, 2, 1));
}
/**
 * 索引接口补充
 */
{
  interface State<R> {
    [state: string]: R
  }
  let s: State<boolean> = {
    'enable': false
  }
  console.log(s.enable);
  interface Pair<T, S> {
    first: T
    second: S
  }
  interface States<T, S> {
    [state: string]: Pair<T, S>
  }
  let S1: States<number, boolean> = {
    enable: {
      first: 1,
      second: false
    },
    break: {
      first: 2,
      second: false
    }
  }
}
/**
 * 泛型面向对象
 */
{
  interface Collection<T> {
    add(t: T): void
    remove(t: T): void
    asArray(): T[]
  }
  // 接口继承
  interface Collection1<T> extends Collection<T> {
    getElement(index: number): T
  }

  class List<T> implements Collection<T> {
    private data: T[] = [];
    constructor(ele: T[]) {
      this.data = ele
    }
    add(t: T): void {
      this.data.push(t)
    }
    remove(t: T): void {
      let index = this.data.indexOf(t);
      if (index > -1) {
        this.data.splice(index, 1)
      }
    }
    asArray(): T[] {
      return this.data
    }
  }
  // let numbers:Collection<number>=new List<number>([1,2,3])
  // numbers.add(23)
  // numbers.remove(2)
  // console.log(numbers.asArray());

  // 类继承类
  class BookList<T> extends List<T>{
  }
  let bookList: BookList<string> = new BookList<string>(['hello'])
}
/**
 * 扩展运算符
 */
{
  function foo(s: number, y: number, z: number) {
    console.log(s, y, z);
  }
  function foo1(...x: number[]) {
    console.log(JSON.stringify(x));
  }

  let arr: number[] = [1, 2, 3];
  // foo.apply(null, arr)
  // foo.call(null, ...arr)

  // 方法1：断言
  (<any>foo)(...arr)
  // 方法2: 别的方式
  foo1(...arr)
  // 方法3：函数重载
  function foo2(...args: number[]): void;
  function foo2(x: number, y: number, z: number) {
    console.log(x, y, z);
  }
  foo2(...arr)
  foo2(1, 2, 3)

  // 解构
  {
    let [x, y, ...z] = [1, 2, 3, 4, 5, 6]
    console.log(x, y, z);
    let list = [1, 2]
    list = [...list, 3, 4]
    console.log(list);
  }
  // 对象
  let print2D = { x: 1, y: 2, z: 56 }
  let print3D = { ...print2D, z: 3 }
  let print3D1 = { z: 3, ...print2D }
  // 位置不同，结果不同，后面覆盖前面的
  console.log(print3D);
  console.log(print3D1);
}
// key of
// 当需要的时候帮助我们用正确的属性名称
{
  class A {
    x: number = 5
  }
  // 只能是A的属性名，而且要是字符串
  let y: keyof A;
  y = 'x';
  function getProp(a: keyof A, test: A) {
    return test[a]
  }
  let tempA: A = new A()
  console.log(getProp('x', tempA))

  class B {
    y: keyof A;
    getAProp(a: A): any {
      return a[this.y]
    }
  }
  let b: B = new B();
  b.y = 'x'
  console.log(b.getAProp(new A()));
}
/**
 * 泛型的约束
 */
{
  interface Shape {
    draw(): void
  }
  function drawShape<S extends Shape>(shapes: S[]): void {
    shapes.forEach(shape => shape.draw())
  }
  class Circle implements Shape {
    draw(): void {
      console.log('Circle');
    }
  }
  class Rectangle implements Shape {
    draw(): void {
      console.log('Rectangle');
    }
  }
  let circle: Circle = new Circle()
  let rectangle: Rectangle = new Rectangle()
  drawShape([circle, rectangle])

  // K keyof T,extends=>K是T的键组成的obj/class
  function getPropB<T, K extends keyof T>(key: K, obj: T): any {
    return obj[key];
  }
  let obj = { a: 2, b: 3 }
  getPropB('a', obj)
}
// 另外一种
{
  // new () => T 有构造函数,空括号代表没有传入任何参数
  function createInstance<T>(t: new () => T): T {
    return new t()
  }
  class Test {
    x: number = 4
  }

  let test: Test = new Test()
  let test1: Test = createInstance<Test>(Test)

  // 有参数的
  function createInstance2<T>(t: new (...constructorArgs: any[]) => T, ...args: any[]): T {
    return new t(args)
  }
  class Test2 {
    x: number = 4
    y: number
    constructor(y: number) {
      this.y = y
    }
  }
  let test3: Test = new Test()
  // new Test2(2)
  let test4: Test = createInstance2<Test2>(Test2, 2)
}
/**
 * 泛型 类型别名
 */
{
  type ListType<T> = { elements: T[] }
  let elements: ListType<number> = {
    elements: [1, 2, 3]
  }
  console.log(elements)

  interface IItem {
    name: string
    price: number
  }
  // 前面部分和后面部分都要有,两种类型都要有的
  type Entity<E> = { id: number } & E;
  let itemEntity: Entity<IItem> = {
    id: 12,
    name: 'hello',
    price: 12
  }
  console.log(itemEntity)
}
/**
 * 约束补充
 */
{
  interface Shape {
    draw(): void
  }
  function DrawShape(shape: Shape): void {
    shape.draw()
  }
  // extends 约束T
  function drawShape12<T extends Shape>(shape: T): T {
    shape.draw()
    return shape
  }
  let a: Shape = {
    draw: () => { }
  }
  drawShape12(a)
  class Circle implements Shape {
    draw(): void {
      console.log('Circle');
    }
  }
  class Rectangle implements Shape {
    draw(): void {
      console.log('Rectangle');
    }
  }
  let circle: Circle = new Circle()
  let rectangle: Rectangle = new Rectangle()
  let b: Circle = drawShape12(circle)
  let c: Rectangle = drawShape12(rectangle)
}

{
  let a=[1,2,3]
  _.reverse(a)
  console.log(a);
}
