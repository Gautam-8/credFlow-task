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

//let result = minNoOfplatforms(arrival , departure);
