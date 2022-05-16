"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SampleBubbleSort = void 0;
var SampleBubbleSort = /** @class */ (function () {
    function SampleBubbleSort() {
    }
    SampleBubbleSort.sampleBubble = function (list) {
        var needNextPass = false;
        for (var i = 0; i < list.length; i++) {
            needNextPass = false;
            for (var j = 0; j < list.length - 1 - i; j++) {
                if (list[j] > list[j + 1]) {
                    console.log("\u0111\u1ED5i ".concat(list[j], " voi ").concat(list[j + 1]));
                    var temp = list[j];
                    list[j] = list[j + 1];
                    list[j + 1] = temp;
                    needNextPass = true;
                }
            }
            if (needNextPass === false) {
                console.log("mang da sap xep khong can doi vi tri");
                break;
            }
            console.log("mang sau khi da sap xep ".concat(i, " da sap xep"));
            for (var k = 0; k < list.length; k++) {
                console.log(list[k] + " ");
            }
            console.log();
        }
    };
    SampleBubbleSort.list = [1, 3, 6, 7, 4, 9, 0, 2];
    return SampleBubbleSort;
}());
exports.SampleBubbleSort = SampleBubbleSort;
