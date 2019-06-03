var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// var fn = () => 'Hello'
var a = 13;
var b = true;
var c = "Hello" + 6;
a = 45;
for (var i = 0; i < 10; i++) {
    // console.log(i)
}
// Error
// console.log(i)
if (true) {
    var j_1 = 0;
}
var j = 12;
// console.log(j)
{
    var my_name = "Kitety";
    var my_name1 = "Kitety1";
}
// Array
{
    var myArr1 = [1, 2, ""];
    var myArr2 = [1, 2, 3];
    var myArr3 = [1, 2, 3, false, 4];
    myArr3.push(12);
    // 赋值就不用定义类型,因为声明的时候定义了
    var popElement = myArr3.pop();
    myArr3 = [];
}
// tuple
{
    var tuple1 = ["string", 1, false];
    // 在后面可以追加，但是要是前面已经有了的类型，强而且不能插入，
    // 前面的几个类型必须满足，顺序要固定
    tuple1.push(2);
    // tuple1.push([])
    // tuple1=[]
    // console.log(tuple1)
}
// function
// 加问号可传可不传
function add(a, b) {
    if (b === void 0) { b = 20; }
    if (!b) {
        b = 0;
    }
    return a + b;
}
console.log(add(45));
// ...rest 扩充其他的元素
function sum(a, b) {
    var rest = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        rest[_i - 2] = arguments[_i];
    }
    // a+b为初始值
    var restAll = rest.reduce(function (total, num) { return total + num; }, a + b);
    return restAll;
}
console.log(sum(45, 1, 2, 3, 4, 5, 6));
// 联合类型
function isNumber(value) {
    // ts对应的类型判断
    // 可以进行进一步处理
    return typeof value === "number";
}
console.log(1111, isNumber("11"));
function isString(value) {
    return typeof value === "string";
}
// any
{
    // 慎用
    var a_1;
    a_1 = 10;
    a_1 = "String";
    a_1 = [1, 23, 456];
    var log = function (value) {
        if (isNumber(value)) {
            return "Your number is " + value;
        }
        else if (isString(value)) {
            return "Your string is " + value;
        }
        else {
            throw new Error("Expected string or number,but get " + value + ".");
        }
    };
    console.log(log("qqq"));
    var c_1;
    // 报错
    // c=12;
    c_1 = [1, [], 1, "Hello"];
}
// 联合类型
{
    var log = function (value) {
        if (isNumber(value)) {
            return "Your number is " + value;
        }
        else if (isString(value)) {
            return "Your string is " + value;
        }
        else {
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
    var Person = /** @class */ (function () {
        function Person() {
        }
        return Person;
    }());
    var aPerson = new Person();
    // 设置内容
    aPerson.firstName = "Kitety";
    aPerson.age = 23;
    console.log(aPerson.firstName);
    var Movie = /** @class */ (function () {
        // this指向生成的对象自身
        function Movie(name, play_count, time) {
            this.name = name;
            this.play_count = play_count;
        }
        // 可能对数据进行操作
        Movie.prototype.display_play_count = function (padding) {
            if (padding) {
                return this.play_count + " \u6B21 " + padding;
            }
            return this.play_count + " \u6B21";
        };
        // 对数据进行操作
        Movie.prototype.increse_play_count = function () {
            this.play_count += 1;
        };
        return Movie;
    }());
    // 声称对象
    var movie = new Movie("电影", 15, 87);
    movie.name = "Avengers";
    console.log(movie.display_play_count());
    movie.increse_play_count();
    console.log(movie.display_play_count());
}
// 继承和多态
{
    var Person = /** @class */ (function () {
        function Person() {
        }
        Person.prototype.greet = function () {
            console.log("hi!");
        };
        Person.prototype.otherGreet = function () {
            this.greet();
        };
        return Person;
    }());
    var Programmer = /** @class */ (function (_super) {
        __extends(Programmer, _super);
        function Programmer() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Programmer.prototype.greet = function () {
            console.log("hello world!");
        };
        // super 代表父类
        Programmer.prototype.greetLikeNormalPerson = function () {
            _super.prototype.greet.call(this);
        };
        return Programmer;
    }(Person));
    // class 作为类型
    var aPerson = new Person();
    var aProgrammer = new Programmer();
    // 设置内容
    aPerson.greet();
    aProgrammer.greet();
    aProgrammer.greetLikeNormalPerson();
}
// 成员可见性
{
    // 如果不写的话就默认public
    var Person = /** @class */ (function () {
        function Person() {
        }
        Person.prototype.greet = function () {
            console.log("hi!");
        };
        Person.prototype.getFirstName = function () {
            return this.firstName;
        };
        Person.prototype.sayHi = function () {
            console.log("private say hi!");
        };
        Person.prototype.sayHiOut = function () {
            this.sayHi();
        };
        Person.prototype.setFirstName = function (name) {
            this.firstName = name;
        };
        Person.prototype.otherGreet = function () {
            this.greet();
        };
        return Person;
    }());
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
    var aPerson = new Person();
    // 错误,只能在class Person内部使用
    console.log(aPerson.setFirstName("Kitety"));
    console.log(aPerson.getFirstName());
    aPerson.sayHiOut();
}
// protected
{
    // 如果不写的话就默认public
    var Person = /** @class */ (function () {
        function Person() {
        }
        Person.prototype.greet = function () {
            console.log("hi!");
        };
        Person.prototype.getFirstName = function () {
            return this.firstName;
        };
        Person.prototype.sayHi = function () {
            console.log("private say hi!");
        };
        Person.prototype.sayHiOut = function () {
            this.sayHi();
        };
        Person.prototype.setFirstName = function (name) {
            this.firstName = name;
        };
        Person.prototype.otherGreet = function () {
            this.greet();
        };
        return Person;
    }());
    var Programmer = /** @class */ (function (_super) {
        __extends(Programmer, _super);
        function Programmer() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Programmer.prototype.greet = function () {
            console.log("hello world!");
        };
        // super 代表父类
        Programmer.prototype.greetLikeNormalPerson = function () {
            _super.prototype.greet.call(this);
        };
        Programmer.prototype.showName = function () {
            return this.firstName;
        };
        Programmer.prototype.setName = function (name) {
            this.firstName = name;
            // this.lastName = 'lastName' + name
        };
        Programmer.prototype.getFullName = function () {
            return this.firstName + this.lastName;
        };
        return Programmer;
    }(Person));
    // class 作为类型
    var aPerson = new Person();
    var aProgrammer = new Programmer();
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
    var Person = /** @class */ (function () {
        // protected constructor就会出现错误,并且子类继承生成实例也会报错
        // private的话子类就直接不能使用super
        function Person(firstName, lastName) {
            this.firstName = firstName;
            this.lastName = lastName;
        }
        Person.prototype.greet = function () {
            console.log("hi!");
        };
        return Person;
    }());
    // protected constructor就会出现错误,并且子类继承生成实例也会报错
    // 除非子类重写constructor
    var Programmer = /** @class */ (function (_super) {
        __extends(Programmer, _super);
        function Programmer(firstName, lastName) {
            var _this = 
            // 调用父类构造函数的方法
            _super.call(this, firstName, lastName) || this;
            console.log("programer constructor");
            return _this;
        }
        return Programmer;
    }(Person));
    // protected constructor就会出现错误,并且子类继承生成实例也会报错
    // let per = new Person('hello', 'kitety')
    var pro = new Programmer("hello", "kitety");
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
    var Person_1 = /** @class */ (function () {
        function Person() {
        }
        // public protected private一样的
        Person.getStaticAge = function () {
            return Person.age;
        };
        Person.prototype.getAge = function () {
            return Person.age;
        };
        // 静态属性
        Person.age = 10;
        Person.name1 = "hello";
        return Person;
    }());
    var p = new Person_1();
    // console.log("静态属性", Person.age);
    console.log("静态方法", Person_1.getStaticAge());
    console.log("静态属性调用", p.getAge());
    var Programmer_1 = /** @class */ (function (_super) {
        __extends(Programmer, _super);
        function Programmer() {
            var _this = 
            // 调用父类构造函数的方法
            _super.call(this) || this;
            console.log("programer constructor");
            return _this;
        }
        // static getProgrammerAge(): number {
        //   return Programmer.age;
        // }
        Programmer.getProgrammerName = function () {
            return Programmer.name1;
        };
        return Programmer;
    }(Person_1));
    console.log("getProgrammerAge", Programmer_1.getStaticAge());
    console.log("getProgrammerName", Programmer_1.getProgrammerName());
}
// readonly 只读属性
{
    var Person = /** @class */ (function () {
        function Person() {
            this.name = "readonly name string";
        }
        return Person;
    }());
    var aPerson = new Person();
    // 会报错，只读属性
    // aPerson.name = "hello";
    console.log(aPerson.name);
}
// 枚举类型
{
    // 取出的对应的值是number
    var DaysOfTheWeek = void 0;
    (function (DaysOfTheWeek) {
        // 可以设置默认初始值，默认从0开始
        DaysOfTheWeek[DaysOfTheWeek["SUN"] = 120] = "SUN";
        DaysOfTheWeek[DaysOfTheWeek["MON"] = 121] = "MON";
        DaysOfTheWeek[DaysOfTheWeek["TUE"] = 122] = "TUE";
        DaysOfTheWeek[DaysOfTheWeek["WEN"] = 123] = "WEN";
        DaysOfTheWeek[DaysOfTheWeek["THU"] = 124] = "THU";
        DaysOfTheWeek[DaysOfTheWeek["FRI"] = 125] = "FRI";
        DaysOfTheWeek[DaysOfTheWeek["SAT"] = 126] = "SAT";
    })(DaysOfTheWeek || (DaysOfTheWeek = {}));
    var day = void 0;
    day = DaysOfTheWeek.FRI;
    // 5
    console.log(typeof day, day);
}
// 接口
// 规定了规范
{
    // 只要o有name就可以使用
    // o可以是一个接口类型，o要有name属性
    var sayName = function (o) {
        // console.log(o.name);
        // o.print(o.name)
    };
    var person = {
        name: "Hello person",
        age: 7,
        print: function (name) {
            console.log("name");
        }
    };
    var bottle = {
        litres: 1,
        name: "漂流瓶",
        print: function (name) {
            console.log("name");
        }
    };
    var Person = /** @class */ (function () {
        function Person() {
        }
        Person.prototype.print = function (name) {
            console.log("name");
        };
        return Person;
    }());
    var p = new Person();
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
    var my_name = "hello";
    var obj = {
        name: "obj",
        age: 27
    };
    // 另一种形式
    var user = {
        name: "obj",
        age: 27
    };
    // 装饰器可以叠加
    var iUser = {
        name: "kitety",
        age: 13,
        email: "aizaizuori@gmail.com"
    };
}
// 类实现接口
{
    // 类实现接口
    var Employee = /** @class */ (function () {
        function Employee() {
        }
        Employee.prototype.greet = function () {
            console.log(this.name);
        };
        return Employee;
    }());
    // 用接口，用类，都是可以的
    var em1 = new Employee();
    var em2 = new Employee();
    // 真正的支付接口
    var do_pay = function (pay) {
        pay.post();
    };
    var WePay = /** @class */ (function () {
        function WePay() {
        }
        WePay.prototype.post = function () { };
        return WePay;
    }());
    var AliPay = /** @class */ (function () {
        function AliPay() {
        }
        AliPay.prototype.post = function () { };
        return AliPay;
    }());
    var we = new WePay();
    var ali = new AliPay();
    // 调用支付
    do_pay(we);
    do_pay(ali);
}
// 类型断言
{
    var M = /** @class */ (function () {
        function M() {
        }
        return M;
    }());
    var m = new M();
    // m.first_name='111';
    var printCount = function (m) {
        return m.count;
    };
    printCount(m);
    printCount({ count: 22, first_name: "hello" });
    // 这句会报错
    // 加了[propName: string]: any;就不会
    printCount({ count: 22, name: "money", first_name: "hello" });
    // 类型断言
    printCount({ count: 22, name: "money", first_name: "hello" });
}
// 接口中的函数
{
    var call = void 0;
    call = function (success) {
        // do something
    };
}
// 类型断言
{
    var x = "1111111111111";
    // x是任何类型，编译器不能明确
    // <string>明确一下
    var b_1 = x.substring(0, 3);
    // 没有发生类型转换
    var b1 = x;
    console.log(b_1, typeof b1);
    function getLen(something) {
        /**
         * something,length在编译的时候就会报错
         * 所以转换一下类型
         */
        var s = something;
        if (s.length) {
            return s.length;
        }
        else {
            return s.toString().length;
        }
    }
    console.log(getLen(12));
    // 下面两种方式都可以
    var p = {};
    p.age = 27;
    p.name = "类型断言";
    // 另一种方式
    var p1 = {
        age: 27,
        name: "类型断言"
    };
}
// 继承和实现多个接口
{
    var p = {
        name: "kitety",
        age: 27
    };
    // 类不能有多个类，不能有多个父类
    // 但是可以实现多个接口
    // 每个属性都要实现
    var NewBoss = /** @class */ (function () {
        function NewBoss() {
        }
        return NewBoss;
    }());
    var newBoss = {
        name: "kitety",
        email: "aizaizuori@gmail.com"
    };
    var b1 = newBoss;
    var b2 = newBoss;
}
// 接口继承类
{
    var Component = /** @class */ (function () {
        function Component(weight, height) {
            this.weight = weight;
            this.height = height;
        }
        Component.prototype.display = function () {
            console.log(this.weight, this.height);
        };
        return Component;
    }());
    var Button = /** @class */ (function (_super) {
        __extends(Button, _super);
        function Button() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.size = 12;
            return _this;
        }
        Button.prototype.hide = function () {
            console.log("hide");
        };
        return Button;
    }(Component));
    var w = new Button(1, 2);
    w.display();
}
// Indexable Types
{
    var s1 = {
        state: false,
        able: true
    };
    // 没有数组的方法和属性
    var s2 = [false, true];
    var s3 = [true, false];
    console.log(s3.length);
    s3.push(false);
    s3.pop();
    console.log(s3);
    var s4 = {
        mainScreen: true,
        mainScreen1: true
    };
    s4["hello"] = false;
    var em1 = {
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
    var Todo1 = /** @class */ (function () {
        function Todo1() {
        }
        return Todo1;
    }());
    var s = [
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
    var Person = /** @class */ (function () {
        function Person(name) {
            this.name = name;
        }
        Person.prototype.display = function () {
            console.log("dispaly");
        };
        return Person;
    }());
    // 抽象类不能创建实例
    // let p = new Person("kitety");
    var Employee_1 = /** @class */ (function (_super) {
        __extends(Employee, _super);
        function Employee(name, code) {
            var _this = _super.call(this, name) || this;
            _this.code = code;
            return _this;
        }
        Employee.prototype.find = function (name) {
            return new Employee(name, this.code);
        };
        return Employee;
    }(Person));
    // 继承之后就可以使用
    var p = new Employee_1("kitety", "well done");
    console.log(p.find("haha"));
}
// parameter properties
{
    var Person = /** @class */ (function () {
        function Person(name, age) {
            this._name = name;
            this._age = age;
        }
        return Person;
    }());
    // 另一种方式
    var Person2 = /** @class */ (function () {
        function Person2(name, age) {
            this.name = name;
            this.age = age;
        }
        return Person2;
    }());
    var p = new Person("kitety", 29);
    var p2 = new Person2("kitety", 29);
    console.log(p);
}
// accessors getters setters
{
    var Person = /** @class */ (function () {
        function Person(name, age) {
            this._name = name;
            this.age = age;
        }
        Person.prototype.getName = function () {
            return this._name;
        };
        Person.prototype.setName = function (name) {
            this._name = name;
        };
        Object.defineProperty(Person.prototype, "name", {
            // 重点
            get: function () {
                return this._name;
            },
            // 这个地方不加返回类型
            set: function (name) {
                this._name = name;
            },
            enumerable: true,
            configurable: true
        });
        return Person;
    }());
    var p = new Person("kitety", 29);
    p.name = "hello1";
    // p.setName("hello");
    console.log(p.getName());
}
{
    var Rect = /** @class */ (function () {
        function Rect(w, h) {
            this.w = w;
            this.h = h;
        }
        Rect.prototype.getArea = function () {
            var _this = this;
            // 这里要用箭头函数才能绑定this
            // 或者在这里定义变量，传递进去
            // function()..的话就不会传递this
            // this是指向这个对象，还是调用者的上下文
            return function () {
                return _this.w * _this.h;
            };
        };
        return Rect;
    }());
    var r = new Rect(2, 3);
    console.log(r.getArea()());
}
// 五种定义函数类型的方法
{
    // 1
    var a_2;
    a_2 = function () {
        console.log("1");
    };
    function fun() {
        return function () {
            console.log("1");
        };
    }
    // 2
    var c_2;
    c_2 = function () {
        console.log("2");
    };
    // 3
    var d = void 0;
    d = function (para) {
        return para;
    };
    var f = void 0;
    f = function (para) {
        return para;
    };
    var h = function (para) { return para; };
}
// 函数重载
// 允许用相同的名字，不同的参数来创造多个函数
{
    // 以上两种的组合实现
    function sumM(x, y, z) {
        // console.log(typeof z);
        if (typeof z === "undefined") {
            return x + y;
        }
        return x + y + z;
    }
    function divide(x, y) {
        if (typeof x === "number") {
            return x / y;
        }
        else if (typeof x === "string") {
            return [x.substring(0, y), x.substring(y)];
        }
    }
    // console.log(divide("hello",2));
    // 在class中函数重载
    var Util = /** @class */ (function () {
        function Util() {
        }
        Util.divide = function (x, y) {
            if (typeof x === "number") {
                return x / y;
            }
            else if (typeof x === "string") {
                return [x.substring(0, y), x.substring(y)];
            }
        };
        return Util;
    }());
    // let util1=new Util();
    // console.log(Util.divide(6, 2));
}
// type guards
{
    function show(x) {
        console.log(typeof x);
        if (typeof x === "number") {
            console.log("a number");
        }
        else {
            console.log("a string");
        }
    }
    // show(12);
    var Person = /** @class */ (function () {
        function Person() {
        }
        return Person;
    }());
    var p = new Person();
    console.log(typeof p); //object
    console.log(typeof new String("string")); //object
    // 很多类型的子类型
    console.log(typeof undefined); //undefined
    console.log(typeof null); //object
    var Car_1 = /** @class */ (function () {
        function Car() {
        }
        Car.prototype.start = function () {
            console.log("Car starting");
        };
        Car.prototype.drive = function () {
            console.log("Car driving");
        };
        return Car;
    }());
    var Bike = /** @class */ (function () {
        function Bike() {
        }
        Bike.prototype.start = function () {
            console.log("Bike starting");
        };
        Bike.prototype.ride = function () {
            console.log("Bike driving");
        };
        return Bike;
    }());
    // vehicle is Car 判断的意思 断言；这里用boolean就是不对的，在函数主题调用会报错
    // boolean返回值发挥的作用是在运行时
    // vehicle is Car发挥在编译时期
    function isCar(vehicle) {
        return vehicle.drive !== undefined;
    }
    // 跟之前的类型断言一样
    function Move(vehicle) {
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
        if (vehicle instanceof Car_1) {
            vehicle.drive();
        }
        else {
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
    function show1(x) {
        if (x === undefined) {
            console.log("x is not set");
        }
        else if (x === null) {
            console.log("x is null");
        }
        else {
            console.log("x is number");
        }
    }
    var x = 10;
    var y = void 0;
    var z = null;
    var z1 = undefined;
    show1(x);
    show1(y);
    show1(z);
}
// 非空操作符
{
    // 但是执行strictNullChecks空检查会报错
    function splitInHalf(str) {
        var checkString = function () {
            if (str === null || str === undefined) {
                str = "test";
            }
        };
        checkString();
        // str! 代表str不能为空
        // strictNullChecks可以过
        return str.substring(0, str.length / 2);
    }
    var s = splitInHalf("hello");
    console.log(s);
}
/**
 never类型=>无限循环/抛出异常
 可以简单的理解为类型为空，代码可能继续进行；但是never：无限循环和抛出异常就不能继续进行
 void 有返回值，期待返回
 never没有返回，不期待返回
 */
{
    function sayHi() {
        console.log("hi");
    }
    // 无限循环
    function loopForever() {
        //  无限循环
        while (true) { }
    }
    // 异常
    function throwError($msg) {
        throw new Error($msg);
    }
    var s = sayHi();
}
/**
 * Disciminanted Unions
 */
{
    var PrintA = /** @class */ (function () {
        function PrintA() {
        }
        // 风景画
        PrintA.prototype.printLandScape = function () {
            console.log('landscape');
        };
        return PrintA;
    }());
    var PrintB = /** @class */ (function () {
        function PrintB() {
        }
        // 风景画
        PrintB.prototype.printPortrait = function () {
            console.log('portrait');
        };
        return PrintB;
    }());
    function doPrint(pt) {
        if (pt.pageOrientation === 'landscape') {
            pt.printLandScape();
        }
        else if (pt.pageOrientation === 'portrait') {
            pt.printPortrait();
        }
        else {
            var unknownPrinter = pt;
        }
    }
    function getEmployeeSalary(emp) {
        switch (emp.emeType) {
            case 'FullType':
                return emp.annualSalary;
            case 'PartTime':
                return emp.daySalary;
            default:
                return emp.hourSalary;
        }
    }
    var con = {
        emeType: "contract",
        name: 'kitety',
        hourSalary: 13
    };
    console.log(getEmployeeSalary(con));
}
// 泛型 generics
// 可以再任何类型发挥作用，而不仅仅限于一种类型
// 与C#的泛型很像
{
    function getArray(items) {
        return new Array().concat(items);
    }
    var a1 = getArray([1, 2, 3]);
    var a2 = getArray(['1', '2', '3']);
    a1.push('4');
    a2.push(4);
    // 类型的不确定性
    console.log(a1, a2);
}
/**
 * 泛型解决问题
 * 泛型：类型占位符号
 */
{
    // 可以用很多类型来代替T
    function getArrayN(items) {
        return new Array().concat(items);
    }
    // function getArrayN<T, U>(items: T[], name?: U): T[] {
    //   return new Array<T>().concat(items)
    // }
    var a1 = getArrayN([1, 2, 3]);
    var a2 = getArrayN(['1', '2', '3']);
    // 不推荐
    var a3 = getArrayN(['1', '2', '3']);
    // 下面会报错
    // a1.push('4')
    // a2.push(4)
    // 当不传递类型的时候，会推断出相应的类型，因此下面的会报错
    // a3.push(4)
}
/**在class使用泛型 */
{
    // T 任何类型
    var List = /** @class */ (function () {
        function List(ele) {
            this.data = ele;
        }
        List.prototype.add = function (t) {
            this.data.push(t);
        };
        List.prototype.remove = function (t) {
            var index = this.data.indexOf(t);
            if (index > -1) {
                this.data.splice(index, 1);
            }
        };
        List.prototype.asArray = function () {
            return this.data;
        };
        return List;
    }());
    var numbers = new List([1, 2]);
    console.log(numbers);
    var Pair = /** @class */ (function () {
        function Pair(first, second) {
            this._first = first;
            this._second = second;
        }
        Object.defineProperty(Pair.prototype, "first", {
            get: function () {
                return this._first;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Pair.prototype, "second", {
            get: function () {
                return this._second;
            },
            enumerable: true,
            configurable: true
        });
        return Pair;
    }());
}
// 泛型在函数中使用
{
    var Pair = /** @class */ (function () {
        function Pair(first, second) {
            this.first = first;
            this.second = second;
        }
        return Pair;
    }());
    // Pair<F, S>[]== Array<Pair<F, S>>
    function getFirstArray(pairs) {
        var arr = [];
        for (var i = 0; i < pairs.length; i++) {
            var element = pairs[i].first;
            arr.push(element);
        }
        return arr;
    }
    var numberArray = [
        new Pair(12, false),
        new Pair(1, true)
    ];
    console.log(getFirstArray(numberArray));
    // 函数类型
    function findFirst(items, searchFunction) {
        for (var i = 0; i < items.length; i++) {
            var item = items[i];
            if (searchFunction(item)) {
                return item;
            }
        }
        return null;
    }
    var items = [1, 2, 3];
    console.log(findFirst(items, function (t) { return t % 2 === 0; }));
}
/**
 * 在接口中使用泛型
 */
{
    var p = {
        first: 1,
        second: 'hello'
    };
    var c_3 = {
        id: Math.random().toString(36),
        run: function () {
            return Math.random();
        }
    };
    function checkElementFun(items, toBeChecked, atIndex) {
        return items[atIndex] === toBeChecked;
    }
    var checker = checkElementFun;
    var items = [1, 2, 3, 4];
    console.log(checker(items, 2, 1));
}
/**
 * 索引接口补充
 */
{
    var s = {
        'enable': false
    };
    console.log(s.enable);
    var S1 = {
        enable: {
            first: 1,
            second: false
        },
        break: {
            first: 2,
            second: false
        }
    };
}
/**
 * 泛型面向对象
 */
{
    var List = /** @class */ (function () {
        function List(ele) {
            this.data = [];
            this.data = ele;
        }
        List.prototype.add = function (t) {
            this.data.push(t);
        };
        List.prototype.remove = function (t) {
            var index = this.data.indexOf(t);
            if (index > -1) {
                this.data.splice(index, 1);
            }
        };
        List.prototype.asArray = function () {
            return this.data;
        };
        return List;
    }());
    // let numbers:Collection<number>=new List<number>([1,2,3])
    // numbers.add(23)
    // numbers.remove(2)
    // console.log(numbers.asArray());
    // 类继承类
    var BookList = /** @class */ (function (_super) {
        __extends(BookList, _super);
        function BookList() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return BookList;
    }(List));
    var bookList = new BookList(['hello']);
}
/**
 * 扩展运算符
 */
{
    function foo(s, y, z) {
        console.log(s, y, z);
    }
    function foo1() {
        var x = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            x[_i] = arguments[_i];
        }
        console.log(JSON.stringify(x));
    }
    var arr = [1, 2, 3];
    // foo.apply(null, arr)
    // foo.call(null, ...arr)
    // 方法1：断言
    foo.apply(void 0, arr);
    // 方法2: 别的方式
    foo1.apply(void 0, arr);
    function foo2(x, y, z) {
        console.log(x, y, z);
    }
    foo2.apply(void 0, arr);
    foo2(1, 2, 3);
    // 解构
    {
        var _a = [1, 2, 3, 4, 5, 6], x = _a[0], y = _a[1], z = _a.slice(2);
        console.log(x, y, z);
        var list = [1, 2];
        list = list.concat([3, 4]);
        console.log(list);
    }
    // 对象
    var print2D = { x: 1, y: 2, z: 56 };
    var print3D = __assign({}, print2D, { z: 3 });
    var print3D1 = __assign({ z: 3 }, print2D);
    // 位置不同，结果不同，后面覆盖前面的
    console.log(print3D);
    console.log(print3D1);
}
// key of
// 当需要的时候帮助我们用正确的属性名称
{
    var A = /** @class */ (function () {
        function A() {
            this.x = 5;
        }
        return A;
    }());
    // 只能是A的属性名，而且要是字符串
    var y = void 0;
    y = 'x';
    function getProp(a, test) {
        return test[a];
    }
    var tempA = new A();
    console.log(getProp('x', tempA));
    var B = /** @class */ (function () {
        function B() {
        }
        B.prototype.getAProp = function (a) {
            return a[this.y];
        };
        return B;
    }());
    var b_2 = new B();
    b_2.y = 'x';
    console.log(b_2.getAProp(new A()));
}
/**
 * 泛型的约束
 */
{
    function drawShape(shapes) {
        shapes.forEach(function (shape) { return shape.draw(); });
    }
    var Circle = /** @class */ (function () {
        function Circle() {
        }
        Circle.prototype.draw = function () {
            console.log('Circle');
        };
        return Circle;
    }());
    var Rectangle = /** @class */ (function () {
        function Rectangle() {
        }
        Rectangle.prototype.draw = function () {
            console.log('Rectangle');
        };
        return Rectangle;
    }());
    var circle = new Circle();
    var rectangle = new Rectangle();
    drawShape([circle, rectangle]);
    // K keyof T,extends=>K是T的键组成的obj/class
    function getPropB(key, obj) {
        return obj[key];
    }
    var obj = { a: 2, b: 3 };
    getPropB('a', obj);
}
// 另外一种
{
    // new () => T 有构造函数,空括号代表没有传入任何参数
    function createInstance(t) {
        return new t();
    }
    var Test = /** @class */ (function () {
        function Test() {
            this.x = 4;
        }
        return Test;
    }());
    var test = new Test();
    var test1 = createInstance(Test);
    // 有参数的
    function createInstance2(t) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        return new t(args);
    }
    var Test2 = /** @class */ (function () {
        function Test2(y) {
            this.x = 4;
            this.y = y;
        }
        return Test2;
    }());
    var test3 = new Test();
    // new Test2(2)
    var test4 = createInstance2(Test2, 2);
}
