function bubbleSort(arr){
    for (let i = 0; i < arr.length; i++) {
        for(let j=0;j<(arr.length-i-1);j++){
            if(arr[j]>arr[j+1]){
                let template = arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=template;
            }
        }

    }
    console.log(arr)
}
let arr = [12,4,6,6,8,4,15,25];
bubbleSort(arr);
