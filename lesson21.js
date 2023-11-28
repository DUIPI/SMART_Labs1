o1 = {
    name: 'Наранбаатар',
    code: '6820065',
    info: function(){
        console.log(this.name + ' миний бие ' + this.code + ' кодтой.')
    }
}

// o1.info()

var o2 = {}
o2.name = 'Хүслэн'
o2.code = '6721031'
o2.info = function(){
    console.log(this.name + ' нэртэй оюутан нь ' + this.code + ' кодтой юм.')
}

// o2.info()

String.prototype.ask=function(){
    console.log('Би хэн бэ?')
}

console.log('Баянгол'.ask)