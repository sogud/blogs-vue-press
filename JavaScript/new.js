function Person(name) {
  this.name = name
}

Person.prototype.getName = function() {
  return this.name
}

var objectFactory = function() {
  console.log(arguments)
  var obj = new Object()
  var Constructor = [].shift.call(arguments)
  obj.__proto__ = Constructor.prototype
  console.log(obj.__proto__)
  console.log(arguments)
  var ret = Constructor.apply(obj, arguments)

  return typeof ret === 'object' ? ret : obj
}

var a = objectFactory(Person, 'sven')

console.log(a.getName())
