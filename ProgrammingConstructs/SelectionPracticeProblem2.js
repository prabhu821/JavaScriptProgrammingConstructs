//Selection Practice Problems with if else if and else

 //1.Read a single digit number and write the number in word 
 let num=Math.floor(Math.random() * 10);
 if(num==0)
 {
    console.log("zero");
 }
 else if(num==1)
 {
    console.log("One");
 }
 else if(num==2)
 {
    console.log("Two");
 }
 else if(num==3)
 {
    console.log("Three");
 }
 else if(num==4)
 {
    console.log("Four");
 }
 else if(num==5)
 {
    console.log("five");
 }
 else if(num==6)
 {
    console.log("six");
 }
 else if(num==7)
 {
    console.log("seven");
 }
 else if(num==8)
 {
    console.log("eight");
 }
 else if(num==9)
 {
    console.log("nine");
 }  
 

 //2.Read a Number and Display the week day (Sunday, Monday,…)
 let dayNumber=Math.floor(Math.random() * 7)+1;

 if(dayNumber==1)
 {
    console.log("Sunday");
 }
 else if(dayNumber==2)
 {
    console.log("Monday");
 }
 else if(dayNumber==3)
 {
    console.log("Tuesday");
 }
 else if(dayNumber==4)
 {
    console.log("Wednesday");
 }
 else if(dayNumber==5)
 {
    console.log("Thrusday");
 }
 else if(dayNumber==6)
 {
    console.log("Friday");
 }
 else if(dayNumber==7)
 {
    console.log("Saturday");
 }
 else
 {
    console.log("Please enter number between 1 to 7 because number of week day are 7");
 } 


 //3.Enter 3 Numbers do following arithmetic operation and find the one that is maximum and minimum
 //1. a + b * c        
 let a=10;
 let b=20;
 let c=15;
 let output= a + b * c ;
 console.log("Result1 are : " + output); 

 //2. a % b + c 
 let a1=10;
 let b1=20;
 let c1=15;
 let output1= ((a1 % b1) + c1 );
 console.log("Result2 are : " + output1); 

 //3. c + a / b 
 let a2=10;
 let b2=20;
 let c2=15;
 let output2= (c2 + (a2 / b2));
 console.log("Result3 are : " + output2); 

 //4. a * b + c
 let x=10;
 let y=20;
 let z=15;
 let output3= ((x * y) + z);
 console.log("Result4 are : " + output3); 