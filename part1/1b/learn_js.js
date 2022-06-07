// variables
const x = 1
let y = 5

console.log(x, y)
y += 0
console.log(x, y)
y = 'hello world'
console.log(x, y)
// x = 4              // cause an error

// arrays
const t = [1, -1, 3]

t.push(5)

console.log(t.length)  // 4
console.log(t[1])      // -1

t.forEach(value => {
  console.log(value)   // 1, -1, 3, 5
})

const t2 = t.concat(5)

console.log(t) // [1, -1, 3]
console.log(t2) // [1, -1, 3, 5]

const t3 = [1, 2, 3]

const m1 = t3.map(value => value * 2)
console.log(m1) // [2, 4, 6]

const t4 = [1, 2, 3, 4, 5]

const [first, second, ...rest] = t
console.log(first, second) // 1, 2
console.log(rest)  // [3, 4, 5]


// Objects
const object1 = {
  name: 'Arto Hellas', 
  age: 35,
  education: 'phD',
}

const object2 = {
  name: 'Full Stack web application development',
  level: 'intermediate studies',
  size: 5,
}

const objects3 = {
  name: {
    first: 'Dan',
    last: 'Abramov',
  },
  grades: [2, 3, 5, 4],
  department: 'Stanford University',
}

console.log(object1.name)  // Arto Hellas
const fieldName = 'age'
console.log(object1[fieldName])  // 35

object1.address = 'Helsinki'
object1['secret number'] = 12341 

// functions 
const sum = (p1, p2) => {
  console.log(p1)
  console.log(p2)
  return p1 + p2
}

const result = sum(1, 5)
console.log(result)  // 6

const square = p => {
  console.log(p)
  return p * p
}
console.log(square(9))  // 81

const square_v2 = p => p * p
console.log(square_v2(2)) // 4

const t5 = [1, 2, 3]
const tSquared = t5.map(p => p * p)
console.log(tSquared)  // [1, 4, 9]

function product(a, b) {
  return a * b
}

const result2 = product(2, 6)
console.log(result2)  // 12

const average = function(a, b) {
  return (a+b) / 2
}

const result3 = average(2, 5) 
console.log(result3)  // 3.5

