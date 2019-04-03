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
  let myArr3: Array<number | boolean> = [1, 2, 3, false];
  myArr3.push(12)
  myArr3 = []
}
