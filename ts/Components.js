"use strict";
exports.__esModule = true;
var ComponentModel;
(function (ComponentModel) {
    ComponentModel["IRRECEIVER"] = "IRRECEIVER";
    ComponentModel["PRESSURE"] = "PRESSURE";
    ComponentModel["BUTTON"] = "BUTTON";
    ComponentModel["PWM_LED"] = "PWM_LED";
    ComponentModel["LED"] = "LED";
    ComponentModel["NP"] = "NP";
    ComponentModel["MOTOR"] = "MOTOR";
    ComponentModel["MAGNET"] = "MAGNET";
    ComponentModel["SERVO"] = "SERVO";
    ComponentModel["VIBRATOR"] = "VIBRATOR";
    ComponentModel["BAR_NUMBER"] = "BAR_NUMBER";
    ComponentModel["BAR_GRAPH"] = "BAR_GRAPH";
})(ComponentModel = exports.ComponentModel || (exports.ComponentModel = {}));
var ComponentType;
(function (ComponentType) {
    ComponentType["RECEIVER"] = "RECEIVER";
    ComponentType["EMITTER"] = "EMITTER";
    ComponentType["HYBRID"] = "HYBRID";
})(ComponentType = exports.ComponentType || (exports.ComponentType = {}));
exports.component = {
    led: {
        type: ComponentType.EMITTER,
        model: ComponentModel.LED,
        property: {
            color: '',
            type: '',
            power: ''
        },
        animations: []
    },
    neopixel: {
        model: ComponentModel.NP,
        type: ComponentType.EMITTER,
        animations: []
    },
    dc_motor: {
        type: ComponentType.EMITTER,
        model: ComponentModel.VIBRATOR,
        property: {
            size: '',
            voltage: ''
        },
        animations: []
    },
    button: {
        type: ComponentType.RECEIVER,
        model: ComponentModel.BUTTON,
        animations: []
    },
    pressure: {
        type: ComponentType.RECEIVER,
        model: ComponentModel.BUTTON,
        animations: []
    },
    digit_display: {
        type: ComponentType.EMITTER,
        model: ComponentModel.BAR_NUMBER,
        animations: []
    },
    ir_receiver: {
        type: ComponentType.RECEIVER,
        model: ComponentModel.IRRECEIVER,
        animations: []
    }
};
// enum MotorAnimation {
//     begin
//     loop
//     end
//     shot
//     intensity
// }
// enum NPAnimation {
//     begin
//     loop
//     end
//     stop
//     white
//     blue
//     violet
//     red
//     orange
//     yellow
//     green
//     turquoise
//     shot
//     laser
//     electric
//     fluid
//     fire
//     glare
// }
