// import {Item} from 'ts/Item.ts';
console.log('oui')
var Item = require('./ts/Item.js'); 
var Weapon = require('./ts/Weapon.js'); 

var weapon = new Weapon.Weapon('arme', 'shotgun') ;
weapon.type = 'staff' ;
weapon.qsd = '123' ;
console.log(weapon)


// $(()=>{
// });

var Shotgun = {
    type: String,
    name: String,
    damage: Number,
    range: Number,
    ammoType: String,
    ammo: Number,
    version: Number,
    components: Array<Component>
}