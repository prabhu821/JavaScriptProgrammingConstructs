//Repetition Practice Problems with for loop

//1. Prints a table of the powers of 2

let value=Math.floor(Math.random()*10);
let i;
for (i=0;i<=value;i++)
   {
    let power=Math.pow(2,i);
    console.log("power of 2^"+ i +" is " +power);
   }
 

//2. Write a program to prints the nth harmonic number
let harmonicNumber=Math.floor(Math.random()*10)+1;
let res = 0;
let value1= 0;
let j;

for (j=1; j<=harmonicNumber; j++)
  {
      value1=1/j;
      //result1 = result1 + value1;
      result1 = res + 1/j;
      console.log("1/"+ j +"  => "+value1);
  }
 console.log("\nSum of all "+ harmonicNumber +" Harmonic Numbers: " + res); 


 //3. Write a program that takes a input and determines if the number is a prime
let primeNum = Math.floor(Math.random()*10)+2;
let countValue=0;
for (let m = 1; m <=primeNum; m++)
{
   if (primeNum % m == 0)
   {
    countValue++;
   }
}
if(countValue == 2)
{ 
   console.log(primeNum + " is prime number");
}
else 
{ 
   console.log(primeNum + " is not prime number");
}


//4.Write a program to compute Factors of a number N using prime factorization method.
let primeFactorNum=18;
console.log("Prime factor are:-");
for (let k = 2; k <= primeFactorNum; k++)
{
    while (primeFactorNum % k == 0)
    {
        primeFactorNum = primeFactorNum / k;
        console.log(k);
    }
}
if (primeFactorNum > 2)
 {
    console.log( primeFactorNum);
 }
  

 //5.Write a program that computes a factorial of a number taken as input. Such as 5 Factorial – 5! = 1 * 2 * 3 * 4 * 5
 let factNumber=5;
let fact=1;
for(i=1;i<=factNumber;i++)
{
    fact=fact*i;
}
console.log("\nFactorial of "+ factNumber+" is ==>  " + fact) 