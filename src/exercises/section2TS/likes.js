"use strict";
exports.__esModule = true;
var LikesCounter = /** @class */ (function () {
    function LikesCounter(_likesCounter, _isSelected) {
        this._likesCounter = _likesCounter;
        this._isSelected = _isSelected;
        console.log("Total likes:" + _likesCounter + " is liked?:" + _isSelected);
    }
    LikesCounter.prototype.updateLikes = function () {
        this._likesCounter += (this._isSelected) ? -1 : 1;
        console.log("Total likes:" + this._likesCounter);
        this._isSelected = !this._isSelected;
    };
    return LikesCounter;
}());
exports.LikesCounter = LikesCounter;
