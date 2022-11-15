// Total number of months in the finance array
var totalMonths = finances.length; //Declaring variable to store total number of months


// Net total amount of profit/losses over the entire period given
var netTotal = 0;  // Initializing net total for the entire period
for (var i = 0; i < finances.length; i++) {
    netTotal += finances[i][1];             // for loop to loop over the finances array, add up the profit/loss and the store in the arra netTotal
}

// Declaring various variables to store data in the for loop
var changes = [];
var changesWithMonth = [];
var totalChange = 0;

// i = 1 and not i = 0, because the first month does not have a change as there is no previous month before it so changes starts from the second month
for (var i = 1; i < finances.length; i++) {
    //Monthly changes is current month - previous month
    var monthlyChanges = finances[i][1] - finances[i-1][1];

    //Adding each month's changes to get the total changes
    totalChange += monthlyChanges;

    //Storing all the monthly changes in the array 'Change'
    changes.push(monthlyChanges);

    //Matching each month to its change in profit or loss and storing in the variable 'changesWithMonth'
    changesWithMonth.push([finances[i][0], monthlyChanges]);

}

//Average is calculated using using totalMonths - 1 as the first month does not have a change and it's rounded to 2 decimal places
var averageChange = (totalChange / (totalMonths - 1)).toFixed(2);



//Get the index of the greatest increase from the changes array where all the changes per month are stored
var greatestIncreaseIndex = changes.indexOf(Math.max(...changes));
//Use the index of the greatest increase from the changes array to find the month that has the greatest increase
var greatestIncrease = changesWithMonth[greatestIncreaseIndex];


//Get the index of the greatest decrease from the changes array where all the changes per month are stored
var greatestDecreaseIndex = changes.indexOf(Math.min(...changes));
//Use the index of the greatest profit from the changes array to find the month that has the greatest increase
var greatestDecrease = changesWithMonth[greatestDecreaseIndex];


//Store the result of the above analysis in a variable
var result = 
`Financial Analysis
-------------------------------
 Total months: ${totalMonths}
 Total: £${netTotal}
 Average Change: £${averageChange}
 Greatest Increase in Profits: ${greatestIncrease[0]} (£${greatestIncrease[1]})}
 Greatest Decrease in Profit: ${greatestDecrease[0]} (£${greatestDecrease[1]})`

 //Print out result of analaysis in console and on the webpage
 console.log(result);
 document.body.innerText = result;
 document.body.style.backgroundColor = "skyblue";

