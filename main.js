let arr=[3,"a","b","a","b",3,4,4,5,5,6,7];
let newArr=[];
for (i=0;i<arr.length;i++)	
  {
   for (j=i+1;j<arr.length;j++) {
        if (arr[i] === arr[j]) {
            newArr.push(arr[i]);     
            }
            }
   }
  console.log(newArr);
