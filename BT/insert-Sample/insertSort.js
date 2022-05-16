"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InsertSort = void 0;
var InsertSort = /** @class */ (function () {
    function InsertSort() {
    }
    // static n: number;
    InsertSort.insertSort = function (arr) {
        for (var i = 0; i < arr.length; i++) {
            console.log("gan gia tri ban dau ".concat(arr[i]));
            var temp = arr[i];
            var j = i - 1;
            while (j >= 0 && arr[j] > temp) {
                arr[j + 1] = arr[j];
                j--;
                // console.log(`so sanh tai vi tri da gan ${arr[j]} truoc do`)
            }
            arr[j + 1] = temp;
            for (var k = 0; k < arr.length; k++) {
                console.log("".concat(arr[k]));
            }
        }
    };
    InsertSort.arr = [1, 4, 3, 7, 6, 9, 4];
    return InsertSort;
}());
exports.InsertSort = InsertSort;
