export enum ComponentModel {
    IRRECEIVER = 'IRRECEIVER',
    PRESSURE = 'PRESSURE',
    BUTTON = 'BUTTON',
    PWM_LED = 'PWM_LED',
    LED = 'LED',
    NP = 'NP',
    MOTOR = 'MOTOR',
    MAGNET = 'MAGNET',
    SERVO = 'SERVO',
    VIBRATOR = 'VIBRATOR',
    BAR_NUMBER = 'BAR_NUMBER',
    BAR_GRAPH = 'BAR_GRAPH'
}

export enum ComponentType {
    RECEIVER = 'RECEIVER',
    EMITTER = 'EMITTER',
    HYBRID = 'HYBRID'
}

export type Component = {
    _id: String,
    name: String,
    type: String,
    model: ComponentModel,
    property?: any,
    positionCoods: [Number,Number],
    version: String,
    animations: Array<Function>
}

export const component = {
    led: {
        type: ComponentType.EMITTER,
        model: ComponentModel.LED,
        property: {
            color: '',
            type: '',
            power: ''
        },
        animations: [],
    },
    neopixel: {
        model: ComponentModel.NP,
        type: ComponentType.EMITTER,
        animations: [],
    },
    dc_motor: {
        type: ComponentType.EMITTER,
        model: ComponentModel.VIBRATOR,
        property: {
            size: '',
            voltage: '',
        },
        animations: [],
    },
    button: {
        type: ComponentType.RECEIVER,
        model: ComponentModel.BUTTON,
        animations: [],

    },
    pressure: {
        type: ComponentType.RECEIVER,
        model: ComponentModel.BUTTON,
        animations: [],

    },
    digit_display: {
        type: ComponentType.EMITTER,
        model: ComponentModel.BAR_NUMBER,
        animations: [],
    },
    ir_receiver: {
        type: ComponentType.RECEIVER,
        model: ComponentModel.IRRECEIVER,
        animations: [],
    },
}

enum MotorAnimation {
    begin
    loop
    end
    shot
    intensity
}

enum NPAnimation {
    begin
    loop
    end

    stop
    
    white
    blue
    violet
    red
    orange
    yellow
    green
    turquoise
    
    shot
    laser
    electric
    fluid
    fire
    glare
}