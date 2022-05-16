"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Selection_1 = require("./Selection");
// let list = [1,1816,5,7,0,3,5,2];
Selection_1.Selection.SelectionSort(Selection_1.Selection.list);
for (var i = 0; i < Selection_1.Selection.list.length; i++) {
    console.log("mag sau khi sap xep ".concat(Selection_1.Selection.list[i], "+  \" \""));
}
