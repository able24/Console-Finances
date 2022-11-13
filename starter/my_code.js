// Total number of months in the finance array

var total_months = finances.length; //Declaring variable to store total number of months
console.log("Total Number of Months: " + total_months);  //Print out total number of months 

// Net total amount of profit/losses over the entire period given

var netTotal = 0;  // Initializing net total for the entire period
for (i = 0; i < finances.length; i++) {
    netTotal += finances[i][1];             // for loop to loop over the finances array, add up the profit/loss and the store in the arra netTotal
}

console.log("Net Total: " + "£" + netTotal);