// 15. 조건문에서 truthy와 falsy라는 개념이 무엇인가요? 각각의 예를 들어보세요.

// truthy는 참의 결과가 나오는 값
console.log(Boolean(true))
console.log(Boolean({}))
console.log(Boolean([]))
console.log(Boolean(42))
console.log(Boolean("0"))
console.log(Boolean("false"))
console.log(Boolean(new Date()))
console.log(Boolean(-42))
console.log(Boolean(12n))
console.log(Boolean(3.14))
console.log(Boolean(-3.14))
console.log(Boolean(Infinity))
console.log(Boolean(-Infinity))

// falsy는 거짓이 출력됨
console.log(Boolean(false))
console.log(Boolean(0))
console.log(Boolean(0n))
console.log(Boolean(""))
console.log(Boolean(''))
console.log(Boolean(``))
console.log(Boolean(null))
console.log(Boolean(undefined))
console.log(Boolean(NaN))








