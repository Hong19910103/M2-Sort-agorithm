export class SampleBubbleSort {
    static list: number[] = [1, 3, 6, 7, 4, 9, 0, 2];

    public static sampleBubble(list: number[]) {
        let needNextPass: boolean = false;
        for (let i = 0; i < list.length; i++) {
            needNextPass = false;
            for (let j = 0; j < list.length - 1 - i; j++) {
                if (list[j] > list[j + 1]) {
                    console.log(`đổi ${list[j]} voi ${list[j + 1]}`);
                    let temp = list[j];
                    list[j] = list[j + 1];
                    list[j + 1] = temp;
                    needNextPass = true;
                }
            }
         if(needNextPass===false){
             console.log(`mang da sap xep khong can doi vi tri`);
             break;
         }
            console.log(`mang sau khi da sap xep ${i} da sap xep`);
         for(let k =0;k<list.length;k++){
             console.log(list[k] + " ");
         }
            console.log();
        }

    }
}