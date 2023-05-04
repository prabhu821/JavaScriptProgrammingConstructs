/* Array Practice Problems

1. Write a program in the following steps
a. Generates 10 Random 3 Digit number. 
b. Store this random numbers into a array. 
c. Then find the 2nd largest and the 2nd smallest element without sorting the array */

let values=10;
let arrayNum=new Array();
let second=new Array();
let first=new Array();
//Generates 10 Random 3 Digit number.
for(let i=0; i<values; i++)
{
    arrayNum[i]=Math.floor(Math.random()*900)+100;
}
console.log("Ten three digit random values are:\n" + arrayNum);

//without sort value find second largest 
for (let i = 0; i < arrayNum.length; ++i) 
{
    if (first < arrayNum[i]) 
    {
        second = first;
        first = arrayNum[i];
    } 
    else if (arrayNum[i] > second && arrayNum[i] != first) 
    {
        second = arrayNum[i];
    }
}
if (second == first)
{
   console.log("There is no second largest element\n");
}
else
{
   console.log("\nThe Second largest element in the array is: "+ second);
}

//without sort find second smallest value 
for (let i = 0; i < arrayNum.length; ++i)
 {
    if (first > arrayNum[i])
     {
        second = first;
        first = arrayNum[i];
     } 
    else if (arrayNum[i] < second && arrayNum[i] != first) 
    {
        second = arrayNum[i];
    }
}
if (second == first)
   {
      console.log("There is no second smallest element\n");
   }
else
{
   console.log("The Second largest element in the array is: "+ second);
}


//2.Extend the above program to sort the array and then find the 2nd largest and the 2nd smallest element
let values1=10;
let array=new Array();
for(let i=0; i<values1; i++)
{
   array[i]=Math.floor(Math.random()*900)+100;
}
console.log("\n\nTen three digit random values before sort are:" + array);
//sort value in ascending order
array.sort();
console.log("Ten three digit random values after sort are:" + array);
console.log("second largest value: " + array[8]);
console.log("second smallest value: " + array[1]);


//3. Take a range from 0 – 100, find the digits that are repeated twice like 33, 77, etc 

let Num = new Array()
for(let  i  = 0 ; i <= 100 ; i ++)
{
    if (i%11 == 0 && i !=0) 
    {
      Num.push(i)
    }
}
console.log("\nThe reapeated numbers are:-"+Num)