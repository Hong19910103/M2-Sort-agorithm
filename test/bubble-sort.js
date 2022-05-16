function bubbleSort(arr) {
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < (arr.length - i - 1); j++) {
            if (arr[j] > arr[j + 1]) {
                var template = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = template;
            }
        }
    }
    console.log(arr);
}
var arr = [12, 4, 6, 6, 8, 4, 15, 25];
bubbleSort(arr);
