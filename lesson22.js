
var brand = {
    name: 'Camry'
}
brand.info = function() {
    console.log(this.name + ' -г аав минь саяхан авсан.')
}

var type = Object.create(brand)
type.name = 'Crown'
var vehicle = Object.create(type)
var toyota = Object.create(vehicle)

// console.log(toyota.name)
toyota.info()