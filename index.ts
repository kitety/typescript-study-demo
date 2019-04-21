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
}

