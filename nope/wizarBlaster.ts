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

type WizarBlaster = {
    type: String,
    name: String,
    damage: Number,
    range: Number,
    ammoType: String,
    ammo: Number,
    version: Number,
    components: Array<Component>,
}

export const wizarBlaster: WizarBlaster = {
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
        name: 'flash canon',
        positionCoods:[1,1],
        version: '0.1'
    },
    {
        ...component.neopixel,
        _id: '22FIP2',
        name: 'canon rail',
        property: {
            number: 10,
        },
        positionCoods:[1,1],
        version: '0.1'
    },
    {
        ...component.ir_receiver,
        _id: 'mlqsf',
        name: 'canon IR receiver',
        positionCoods:[1,1],
        version: '0.1'
    },
    {
        ...component.dc_motor,
        _id: 'SOJFIs',
        name: 'main vibrator',
        positionCoods:[1,1],
        version: '0.1'
    },
    {
        ...component.neopixel,
        _id: 'SFOJOsjfsf',
        name: 'ammo count',
        property: {
            number: 4
        },
        positionCoods:[1,1],
        version: '0.1'
    },
    {
        ...component.button,
        _id: 'SOwxvpJFIs',
        name: 'reload button',
        positionCoods:[1,1],
        version: '0.1'
    },
    {
        ...component.button,
        _id: 'vpwixv',
        name: 'trigger',
        positionCoods:[1,1],
        version: '0.1'
    },
    ]
}

