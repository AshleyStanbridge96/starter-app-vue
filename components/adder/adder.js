const calcTotal = (billAmt, tipPer, numPeople) => {
    //Divide by the number of people to find total amount for each person
    const newTotal = (billAmt / numPeople);
    //Find tip amount for person(s)
    const tipAmt = newTotal * tipPer;
    //Overall total with tip included
    const overallTotal = newTotal + tipAmt;

    return overallTotal;
}

const calcTip = (billAmt, tipPer, numPeople) => {
    //Divide by the number of people to find total amount for each person
    const newTotal = (billAmt / numPeople);
    //Find tip amount for person(s)
    const tipAmt = newTotal * tipPer;

    return tipAmt;
}

//Creating new vue called findTip
const findTip = new Vue ({
    el: '#findTip',
    //Putting default values. Use v-model name from HTML page (name ID same as v-model)
    data:{
        bill_amt: 20.00,
        tipPercent: 0.15,
        numPeople: 2,
    },
    /*Computed is where the meat of the vue is. Here, you will do the normal parseInt stuff here but use this.bill_amt
    instead of using parseFloat(document.querySelector("#bill-amt").value). Then, use that logic to pass into
    functions made at the top and store that in an overall result to display on web page*/
    computed: {
        finalTipAmt: function(){
            const billAmt = parseFloat(this.bill_amt)
            const tipAmt = parseFloat(this.tipPercent)
            const numPeople = parseInt(this.numPeople)

            const tipTotal = Math.round(calcTip(billAmt, tipAmt, numPeople) * 100) / 100;
            return `Tip Total: $ ${tipTotal}`
        },
        finalTotalAmt: function(){
            const billAmt = parseFloat(this.bill_amt)
            const tipAmt = parseFloat(this.tipPercent)
            const numPeople = parseInt(this.numPeople)

            const billTotal = Math.round(calcTotal(billAmt, tipAmt, numPeople) * 100) / 100;
            return `Bill Total: $ ${billTotal}`
        }
    }
})