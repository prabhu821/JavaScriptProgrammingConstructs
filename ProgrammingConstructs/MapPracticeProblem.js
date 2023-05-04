//Map Practice Problems

/* 1.Write a program in the following steps
a. Roll a die and find the number between 1 to 6
b. Repeat the Die roll and find the result each time
c. Store the result in a dictionary
d. Repeat till any one of the number has reached 10 times
e. Find the number that reached maximum times and the one that was for minimum times */
let diceMap = new Map()
diceMap.set(1,0)
diceMap.set(2,0)
diceMap.set(3,0)
diceMap.set(4,0)
diceMap.set(5,0)
diceMap.set(6,0)
let limitNotReached = 1
while (limitNotReached == 1 ) 
{
    let rollDice = Math.floor(Math.random()*5)+1
    let diceNum=diceMap.set(rollDice,diceMap.get(rollDice)+1)
    for(let key of diceMap.keys())
    {
        if (diceMap.get(key)  == 10) 
        {
            limitNotReached = 0
            console.log("The maximum repeated number: " +key);
        }
    } 
}

let min = 10
for (let key of diceMap.keys())
{
    if (diceMap.get(key) < min)
    {
        min = diceMap.get(key)
        var min_key = key
    }
}
console.log("The minimum repeated number: "+min_key); 


/* 2. Write a Program to generate a birth month of 50 individuals 
between the year 92 & 93. Find all the individuals having birthdays 
in the same month. Store it to finally print. */

let sameBirthMonth = new Map()
for(month = 1 ; month<=12 ; month++ )
{
    sameBirthMonth.set(month,0)
}

let counts  = 0
while(counts<=50)
{
    let birthMonth = (Math.floor(Math.random()*100) % 12 )+1 
    let year = "199"+Math.floor(Math.random()*10) 
    if (year == "1992" || year == "1993") 
    {
        sameBirthMonth.set(birthMonth,sameBirthMonth.get(birthMonth)+1)    
        counts++
    }
}
console.log("\nNumber of people having birthday in same month");
console.log("month : counts");
for(key of sameBirthMonth.keys())
{
    console.log(key+" : "+sameBirthMonth.get(key))
}