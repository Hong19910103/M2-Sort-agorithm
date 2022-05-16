export class BubbleSort {
    static list: number[] = [1, 7, 8, 0, 3, 6, 8, 3, 2, -2, 5, 6, 8, 0, 2, 7, 9, 3];

    public static bubbleSort(list: number[]): void {
        let nextPass: boolean=true;
        for (let i = 0; i < list.length&&nextPass; i++) {
            nextPass = false;
            for (let j = 0; j < list.length - 1 - i; j++) {
                if (list[j] > list[j + 1]) {
                    let template = list[j];
                    list [j] = list[j + 1];
                    list[j + 1] = template;
                    nextPass = true;
                }
            }
        }
    }
}