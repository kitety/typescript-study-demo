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
var c = 'Hello' + 6;
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
    var myArr1 = [1, 2, ''];
    var myArr2 = [1, 2, 3];
    var myArr3 = [1, 2, 3, false, 4];
    myArr3.push(12);
    // 赋值就不用定义类型,因为声明的时候定义了
    var popElement = myArr3.pop();
    myArr3 = [];
}
// tuple
{
    var tuple1 = ['string', 1, false];
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
    var restAll = rest.reduce(function (total, num) { return (total + num); }, a + b);
    return restAll;
}
console.log(sum(45, 1, 2, 3, 4, 5, 6));
// 联合类型
function isNumber(value) {
    // ts对应的类型判断
    // 可以进行进一步处理
    return typeof value === 'number';
}
console.log(1111, isNumber('11'));
function isString(value) {
    return typeof value === 'string';
}
// any
{
    // 慎用
    var a_1;
    a_1 = 10;
    a_1 = 'String';
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
    console.log(log('qqq'));
    var c_1;
    // 报错
    // c=12;
    c_1 = [1, [], 1, 'Hello'];
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
    aPerson.firstName = 'Kitety';
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
    var movie = new Movie('电影', 15, 87);
    movie.name = 'Avengers';
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
            console.log('hi!');
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
            console.log('hello world!');
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
