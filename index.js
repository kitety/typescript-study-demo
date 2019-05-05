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
