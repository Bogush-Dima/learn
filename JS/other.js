// 'a.b.c.d' => {a: {b: {c: {d: null}}}}


const string = 'a.b.c.d'

const arr = string.split('.')

const res = arr.reduceRight((acc, letter) => {
  return {[letter]: acc}
}, null)

console.log(res.a.b.c.d);