//--Selection Practice Problems with if & else  

//1.Write a program that reads 5 Random 3 Digit values and then outputs the minimum and the maximum value
let number1=Math.floor(Math.random() * 900)+100;
console.log("first number: "+number1);
let number2=Math.floor(Math.random() * 900)+100;
console.log("Second number: "+number2);
let number3=Math.floor(Math.random() * 900)+100;
console.log("third number: "+number3);
let number4=Math.floor(Math.random() * 900)+100;
console.log("four number: "+number4);
let number5=Math.floor(Math.random() * 900)+100;
console.log("five number: "+number5);

if(number1> number2 && number1>number3 && number1> number4 && number1> number5 )
{
    console.log("Greater number ==> "+number1);
}
else if(number2> number1 && number2> number3 && number2> number4 && number2> number5 )
{
    console.log("Greater number ==> "+number2);
}
else if(number2> number1 && number2> number3 && number2> number4 && number2> number5  )
{
    console.log("Greater number ==> "+number2);
}
else if(number3> number1 && number3> number2 && number3> number4 && number3> number5 )
{
    console.log("Greater number ==> "+number3);
}
else if(number4> number1 && number4> number2 && number4> number3 && number4> number5 )
{
    console.log("Greater number ==> "+number4);
}
else
{
    console.log("Greater number ==> "+number5);
} 

//2.Write a program that takes day and month and prints true if day of month is between March 20 and June 20, false otherwise.
let month=5;
let date=20;
if(((month <= 6 && date <= 20) && ((month >= 3 && date <= 20) && (date<31))))
{
   console.log("True");
}
else
{
   console.log("False");
} 


//3.Write a program that takes a year as input and outputs the Year is a Leap Year or not a Leap Year. A Leap Year checks for 4 Digit Number, Divisible by 4 and not 100 unless divisible by 400.
let year=1987;
if(year % 400 == 0)
{
   console.log(year+" is a Leap year");
}
else if(year % 4 == 0)
{
   console.log(year+" is a Leap year");
}
else if(year % 100 == 0)
{
   console.log(year+" is Not a Leap year");
}
else
{
   console.log(year+" is Not a Leap year");
} 


//4. Write a program to simulate a coin flip and print out "Heads" or "Tails" accordingly
let head = 0; 
let tail = 0;
let count = 0;
let numflip=5;
while (count < numflip)
{
   let result=Math.floor(Math.random() * 2);
   console.log(result);
   if (result < 1)
   {
       head++;
       console.log("head");
   }
   else
   {
       tail++;
       console.log("tails");
   }
   count++;
}
console.log("Total Number of Heads: " + head);
console.log("Total Number of Tails: " + tail); 