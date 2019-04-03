// import {Item} from 'ts/Item.ts';
var Item = require('./ts/Item.js'); 
var Weapon = require('./ts/Weapon.js'); 
var Components = require('./ts/Components.js'); 

var spas12 = new Weapon.Weapon('arme', 'shotgun') ;
spas12.type = 'staff' ;
spas12.qsd = '123' ;
// TODO : neopixer : mettre ID au constructor
spas12.addComponent(Components.component.neopixel)
spas12.addComponent(Components.component.neopixel)
spas12.addComponent(Components.component.ir_receiver)
spas12.addComponent(Components.component.dc_motor)

console.log(spas12)


// $(()=>{
// });

// var Shotgun = {
//     type: String,
//     name: String,
//     damage: Number,
//     range: Number,
//     ammoType: String,
//     ammo: Number,
//     version: Number,
//     components: Array<Component>
// }