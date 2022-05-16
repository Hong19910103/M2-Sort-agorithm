"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Selection = void 0;
var Selection = /** @class */ (function () {
    function Selection() {
    }
    Selection.selectionSort = function (list) {
        for (var i = 0; i < list.length - 1; i++) {
            console.log("phan tu nho nhat trong day ban dau gan la : ".concat(i));
            var currentMin = list[i];
            var currentIndexMin = i;
            for (var j = i + 1; j < list.length; j++) {
                if (currentMin > list[j]) {
                    currentMin = list[j];
                    currentIndexMin = j;
                }
            }
            if (currentIndexMin != 1) {
                console.log("phan tu nho nhat la ".concat(currentMin, " o vi tri ").concat(currentIndexMin));
                list[currentIndexMin] = list[i];
                list[i] = currentMin;
            }
            console.log("day so sau khi chen ".concat(i, " vao dau la"));
            for (var k = 0; k < list.length; k++) {
                console.log(list[k] + " ");
            }
        }
    };
    Selection.list = [3, 5, 6, 8, 0, 2, 1, 9, 4];
    return Selection;
}());
exports.Selection = Selection;
