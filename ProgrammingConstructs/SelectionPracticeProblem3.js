//Selection Practice Problems with case statements

//1. Read a single digit number and write the number in word using Case
let number = Math.floor(Math.random()*10);
switch(number)
{
    case 0:
            console.log("Generate random number : "+ number);
            console.log("Word ==> Zero");
            break;
    case 1:
            console.log("Generate random number : "+ number);
            console.log("Word ==> One");
            break;
    case 2:
            console.log("Generate random number : "+ number);
            console.log("Word ==> Two");
            break;
    case 3:
            console.log("Generate random number : "+ number);
            console.log("Word ==> Three");
            break;
    case 4:
            console.log("Generate random number : "+ number);
            console.log("Word ==> Four");
            break;
    case 5:
           console.log("Generate random number : "+ number);
            console.log("Word ==> Five");
            break;
    case 6:
            console.log("Generate random number : "+ number);
            console.log("Word ==> Six");
            break;
    case 7:
            console.log("Generate random number : "+ number);
            console.log("Word ==> Seven");
            break;
    case 8:
            console.log("Generate random number : "+ number);
            console.log("Word ==> Eight");
            break;
    case 9:
            console.log("Generate random number : "+ number);
            console.log("Word ==> Nine");
            break;
} 


//2. Read a Number and Display the week day (Sunday, Monday,…)

let dayNum = Math.floor(Math.random()*7)+ 1;
switch(dayNum)
{
    case 1:
            console.log("Generate random number : "+ dayNum);
            console.log("Day ==> Sunday");
            break;
    case 2:
            console.log("Generate random number : "+ dayNum);
            console.log("Day ==> Monday");
            break;
    case 3:
            console.log("Generate random number : "+ dayNum);
            console.log("Day ==> Tuesday");
            break;
    case 4:
            console.log("Generate random number : "+ dayNum);
            console.log("Day ==> Wednesday");
            break;
    case 5:
            console.log("Generate random number : "+ dayNum);
            console.log("Day ==> Thrusday");
            break;
    case 6:
           console.log("Generate random number : "+ dayNum);
            console.log("Day ==> Friday");
            break;
    case 7:
            console.log("Generate random number : "+ dayNum);
            console.log("Day ==> Saturday");
            break;
} 


//3.Read a Number 1, 10, 100, 1000, etc and display unit, ten, hundred,...

let no = Math.floor(Math.random()*1050);
if(no >=0 && no <=9)
{
   option=1;
}
else if(no >=10 && no <=99)
{
   option=2;
}
else if(no >=100 && no <=999)
{
   option=3;
}
else
{
   option=4;
}
switch(option)
{
    case 1:
            console.log("Generate random number : "+ no);
            console.log("Unit");
            break;
    case 2:
            console.log("Generate random number : "+ no);
            console.log("Ten");
            break;
    case 3:
            console.log("Generate random number : "+ no);
            console.log("Hundred");
            break;
    case 4:
            console.log("Generate random number : "+ no);
            console.log("Thousand");
            break;
} 