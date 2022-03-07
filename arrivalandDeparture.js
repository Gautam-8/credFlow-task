function minNoOfplatforms(arrival , departure){

    arrival = arrival.sort((a,b) => a-b);
    departure = departure.sort((a,b) => a-b);

    let i = 0;
    let j = 0;
    let platform = 0;
    let min = 0;

    while(i<arrival.length && j<departure.length){

        if(arrival[i] <= departure[j]){
          platform++;
          min = Math.max(platform , min);
          i++;
        }else{
            platform--;
            j++;
        }
    }

    return min;

}

let arr = [900, 940, 950, 1100, 1500, 1800];
let dep = [910, 1200, 1120, 1130, 1900, 2000];

let result = minNoOfplatforms(arr , dep);
console.log(result);