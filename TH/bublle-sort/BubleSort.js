"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BubbleSort = void 0;
var BubbleSort = /** @class */ (function () {
    function BubbleSort() {
    }
    BubbleSort.bubbleSort = function (list) {
        var nextPass = true;
        for (var i = 0; i < list.length && nextPass; i++) {
            nextPass = false;
            for (var j = 0; j < list.length - 1 - i; j++) {
                if (list[j] > list[j + 1]) {
                    var template = list[j];
                    list[j] = list[j + 1];
                    list[j + 1] = template;
                    nextPass = true;
                }
            }
        }
    };
    BubbleSort.list = [1, 7, 8, 0, 3, 6, 8, 3, 2, -2, 5, 6, 8, 0, 2, 7, 9, 3];
    return BubbleSort;
}());
exports.BubbleSort = BubbleSort;
