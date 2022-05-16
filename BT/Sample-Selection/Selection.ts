export class Selection {
    static list: number[] = [3, 5, 6, 8, 0, 2, 1, 9, 4];

    public static selectionSort(list: number[]) {
        for (let i = 0; i < list.length-1; i++) {
            console.log(`phan tu nho nhat trong day ban dau gan la : ${i}`)
            let currentMin = list[i];
            let currentIndexMin = i;
            for (let j = i + 1; j < list.length; j++) {
                if (currentMin > list[j]) {
                    currentMin = list[j];
                    currentIndexMin = j;
                }
            }
            if (currentIndexMin != 1) {
                console.log(`phan tu nho nhat la ${currentMin} o vi tri ${currentIndexMin}`)
                list[currentIndexMin] = list[i];
                list[i] = currentMin;
            }
            console.log(`day so sau khi chen ${i} vao dau la`)
            for (let k = 0; k < list.length; k++) {
                console.log(list[k] + " ");
            }
        }

    }
}