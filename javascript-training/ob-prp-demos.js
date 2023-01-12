// Home work - apply property short hand notation
// as per your understanding
function normalDistribution(o) {
    console.log('Normal Distribution')
    console.log(0)
}
const ob = { a : 1, b : 2 }
normalDistribution;normalDistribution( ob )

function uniformDistribution({ a, b}) {
    console.log('Uniform distribution')
    console.log('a = ${a}, b = ${b}')
}
uniformDistribution(ob)
const a = 99
const b= 22
normalDistribution({ a:a, b:b })
normalDistribution({ a, b })
uniformDistribution({ a, b })

const ob1 = { a : 56, b : 78 }

const ob2 ={ ...ob1}

const arr = [
    [1, 2]
    [3, 4]
    [8, 9]
    [4, 6]
]
// [ 1, 2, 3, 4, 8, 9]

const res = [ ...arr[0], ...arr[1], ...arr[2] ]
console.log(res)

const merged1 = arr.reduce( (prev, curr) => prev.concat(curr))
console.log(merged1)

const merged2 = arr.reduce( ( prev, curr) => [...prev, ...curr])
console.log(merged2)
