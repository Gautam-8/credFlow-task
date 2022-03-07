function spirallyTraversing(matrix){
  
 let output = [];

 let count = 0;

 let m = matrix.length;

 let n = matrix[0].length;

 let stop = n*m;

  for(let i=0; i<m/2 && count<stop ; i++){
    
  for(let c=i; c<n-i && count<stop; c++){
   output.push(matrix[i][c]);
   count++;
  }
    for(let r=i+1; r<m-i && count<stop ; r++){
    output.push(matrix[r][n-1-i]);
    count++;
  }  
  for(let c=n-2-i; c>=i && count<stop ; c--){
    output.push(matrix[m-1-i][c]);
    count++;
  }
  for(let r=m-2-i; r>=1+i && count<stop ; r--){
    output.push(matrix[r][i]);
    count++;
  }
  }
  
  return output;
  
}


let matrix = [[1,2,3,4] , 
[5,6,7,8] , 
[9,10,11,12],
];

let result = spirallyTraversing(matrix);
console.log(result.join);