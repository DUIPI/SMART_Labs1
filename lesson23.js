const yeaaa = [10, 15, 25, 40, 60]

//ES5
var nums5 = yeaaa.map(function(elgato){
    return 100 - elgato
})

// console.log(yeaaa)
// console.log(nums5)

//ES6
var nums6 = yeaaa.map(elgato => 100 - elgato)

console.log(yeaaa)
console.log(nums6)