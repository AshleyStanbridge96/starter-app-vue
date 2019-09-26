//Function layout
const calcTotal = (billAmt, tipPer, numPeople) => {
    //Divide by the number of people to find total amount for each person
    const newTotal = (billAmt / numPeople);

    //Find tip amount for person(s)
    const tipAmt = newTotal * tipPer;

    //Overall total with tip included
    const overallTotal = newTotal + tipAmt;

    return overallTotal;
};


document.querySelector("#calcButton").addEventListener("click", () => {
    //Declare variables here and convert strings to numbers or floats
    //Replace ID with correct name
    const bAmt = parseFloat(document.querySelector("#bill-amt").value);
    const tAmt = parseFloat(document.querySelector("#tipPercent").value);
    const pAmt = parseInt(document.querySelector("#numPeople").value);

    //Begin of calculations
    //Declare variables to store output of calculations
    const billTotal = Math.round(calcTotal(bAmt, tAmt, pAmt) * 100) / 100;
    const tipTotal = Math.round(calcTip(bAmt, tAmt, pAmt) * 100) / 100;

    //Creating variables to be sent to IDs below
    const tip = `Tip Total: $ ${tipTotal}`;
    const total = `Bill Total: $ ${billTotal}`

    //Send results back to IDs
    document.querySelector("#finalTipAmt").innerHTML = tip;
    document.querySelector("#finalTotalAmt").innerHTML = total;
    document.querySelector("#result").innerHTML = total;

});