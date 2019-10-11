const calcAvg = (numStudent, numSection) => {
    const avg = (numStudent / numSection);
    return avg;
}


//Creating new vue called findTip
const findAvg = new Vue ({
    el: '#findAvg',
    //Putting default values. Use v-model name from HTML page (name ID same as v-model)
    data:{
        numStudent: 30,
        numSection: 4,
    },
    /*Computed is where the meat of the vue is. Here, you will do the normal parseInt stuff here but use this.bill_amt
    instead of using parseFloat(document.querySelector("#bill-amt").value). Then, use that logic to pass into
    functions made at the top and store that in an overall result to display on web page*/
    computed: {
        avgTotal: function(){
            const numStudent = parseInt(this.numStudent)
            const numSection = parseFloat(this.numSection)

            const avg = (calcAvg(numStudent, numSection)).toFixed(2)
            return `Average number of students per section is:  ${avg}`
        }
    }
})