import { 
    component, 
    Component, 
    ComponentModel, 
    ComponentType 
} from './components'



export const feedback = {
    shoot() {
        return 'pan'
    }
}

type Shotgun = {
    type: String,
    name: String,
    damage: Number,
    range: Number,
    ammoType: String,
    ammo: Number,
    version: Number,
    components: Array<Component>,
}

export const spas: Shotgun = {
    type: "ranged weapon",
    name: "SPAS-12",
    ammoType: "Shell",
    ammo: 8,
    damage: 10,
    range: 3,
    version: 0.1,
    components: [
    {
        ...component.led,
        _id: 'qosjfosjf',
        name: 'led canon',
        positionCoods:[1,1],
        version: '0.1'
        // wip : pour les feedbacks, il y aura une liste complète liée au ComponentModel qui sera mise de façon succinte (prédéfinie) suivant les objets  (utile ?), mais qui pourra être modifée via l'ui
    },
    {
        ...component.pressure,
        _id: 'qosjfosjf',
        name: 'trigger',
        positionCoods:[1,1],
        version: '0.1'
    },
    {
        ...component.neopixel,
        _id: 'pkd2',
        name: 'side canon NP',
        positionCoods:[1,1],
        version: '0.1'
    },
    {
        ...component.dc_motor,
        _id: 'bjwxvni',
        name: 'main vibrator',
        positionCoods:[1,1],
        version: '0.1'
    },
    {
        ...component.button,
        _id: 'osngvnx',
        name: 'pump',
        positionCoods:[1,1],
        version: '0.1'
    },
    {
        ...component.digit_display,
        _id: 'opjwxv',
        name: 'ammo count',
        positionCoods:[1,1],
        version: '0.1'
    },
    {
        ...component.ir_receiver,
        _id: 'ururuiso',
        name: 'front canon IR',
        positionCoods:[1,1],
        version: '0.1'
    },
    ]
}

