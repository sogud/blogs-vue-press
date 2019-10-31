/**
 * 理解new的运算过程
 * @param {*} name
 *
 */
function Person(name) {
  this.name = name
}

Person.prototype.getName = function() {
  return this.name
}

var objectFactory = function() {
  console.log(arguments)
  //声明一个空对象
  var obj = new Object()
  // 截取参数第一个赋值给Constructor
  var Constructor = [].shift.call(arguments)
  // 将obj的原型链指向Constructor的原型
  obj.__proto__ = Constructor.prototype
  console.log(obj.__proto__)
  console.log(arguments)
  // 将Constructor的作用域指向obj
  var ret = Constructor.apply(obj, arguments)

  return typeof ret === 'object' ? ret : obj
}

var a = objectFactory(Person, 'sven')
var b = new Person('sven')
console.log(b.getName())
console.log(a.getName())
