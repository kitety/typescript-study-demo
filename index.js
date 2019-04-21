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
// any
{
    // 慎用
    var a_1;
    a_1 = 10;
    a_1 = 'String';
    a_1 = [1, 23, 456];
    var log = function (value) {
        if (typeof value === 'number') {
            return "Your number is " + value;
        }
        else if (typeof value === 'string') {
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
