"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Item_1 = require("./Item");
var Weapon = /** @class */ (function (_super) {
    __extends(Weapon, _super);
    function Weapon(name, type) {
        var _this = _super.call(this, name) || this;
        _this.addComponent = function (c) {
            _this.components.push(c);
        };
        _this.type = type;
        _this.components = [];
        switch (type) {
            case 'shotgun':
                _this.damage = 30;
                _this.range = 20;
                _this.ammoType = 'buck';
                _this.ammo = 8;
                break;
            case 'pistol':
                _this.damage = 10;
                _this.range = 40;
                _this.ammoType = 'bullet';
                _this.ammo = 12;
                break;
        }
        return _this;
    }
    return Weapon;
}(Item_1.Item));
exports.Weapon = Weapon;
