"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Selection = void 0;
var Selection = /** @class */ (function () {
    function Selection() {
    }
    Selection.SelectionSort = function (list) {
        for (var i = 0; i < list.length; i++) {
            var currentMin = list[i];
            var currentIndex = i;
            for (var j = i + 1; j < list.length; j++) {
                if (currentMin > list[j]) {
                    currentMin = list[j];
                    currentIndex = j;
                }
            }
            if (currentIndex != i) {
                list[currentIndex] = list[i];
                list[i] = currentMin;
            }
        }
    };
    Selection.list = [1, 3, 5, -7, 6, 9, 2, 4];
    return Selection;
}());
exports.Selection = Selection;
