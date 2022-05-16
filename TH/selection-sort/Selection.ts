export class Selection {
    static list:number[]=[1,3,5,-7,6,9,2,4];

    public static SelectionSort(list:number[]):void{
        for (let i = 0; i < list.length; i++) {
            let currentMin = list[i];
            let currentIndex = i;
            for(let j =i+1;j < list.length;j++){
                if(currentMin>list[j]){
                    currentMin = list[j];
                    currentIndex =  j;
                }
            }
           if(currentIndex!=i){
               list[currentIndex]=list[i];
               list[i]=currentMin;

           }
        }
    }
}