const mp = new Map([
    [0, 'zero'],
    [1, 'One'],
    [2, 'Two'],
    [3, 'three']
])
mp.set(4, 'four')
console.log(mp)

console.log('Element At 3 ${mp.get(3)}')
mp.delete(1)
console.log(mp)