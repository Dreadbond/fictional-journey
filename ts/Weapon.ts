import { Item } from "./Item";
import { Component } from './Components'

export class Weapon extends Item{
    type: String ;
    name: String ;
    damage: Number;
    range: Number;
    ammoType: String;
    ammo: Number;
    components: Array<Component>

    constructor(name: String, type: String){
        super(name);
        this.type = type ;
        this.components = [] ;
        switch (type){
            case 'shotgun':
                this.damage = 30 ;
                this.range = 20 ;
                this.ammoType = 'buck' ;
                this.ammo = 8 ;
            break;
            
            case 'pistol':
                this.damage = 10 ;
                this.range = 40 ;
                this.ammoType = 'bullet';
                this.ammo = 12 ;
            break;

        }
    }

    public addComponent = (c: any) => {
        this.components.push(c)
    }
}

