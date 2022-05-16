export class InsertSort {
    static arr: number[] = [1, 4, 3, 7, 6, 9, 4];

    // static n: number;

    public static insertSort(arr: number[]) {
        for (let i = 0; i < arr.length; i++) {
            console.log(`gan gia tri ban dau ${arr[i]}`)
            let temp = arr[i];
            let j = i - 1;
            while (j >= 0 && arr[j] > temp) {
                arr[j + 1] = arr[j];
                j--;
                // console.log(`so sanh tai vi tri da gan ${arr[j]} truoc do`)
            }
            arr[j + 1] = temp
            for (let k = 0; k < arr.length; k++) {
                console.log(`${arr[k]}`);
            }
        }

    }
}
