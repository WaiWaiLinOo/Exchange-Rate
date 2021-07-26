// ui 
const currencyone = document.getElementById('currency-one');
const amountone = document.getElementById('amount-one');

const currencytwo = document.getElementById('currency-two');
const amounttwo = document.getElementById('amount-two'); 

const rateel = document.getElementById('rate');
const swap = document.getElementById('swap');
// calculate exchange rate and update by AJAX 
function calculate(){
    // console.log('I amw');
    const currone = currencyone.value;
    const currtwo = currencytwo.value;
    fetch(`https://v6.exchangerate-api.com/v6/be5d446930da5cf0610cc7ee/latest/${currone}`)
    .then(res=>res.json())
    .then(data=>{
        // console.log(data);
        const rate = data.conversion_rates[currtwo];
        // console.log(rate);
        rateel.innerText = `1 ${currone} = ${rate} ${currtwo}`;
        // auto calculate 
        amounttwo.value = (amountone.value *rate).toFixed(2);
    }

    )
}
// Event Listener 
currencyone.addEventListener('change',calculate);
amountone.addEventListener('input',calculate);
currencytwo.addEventListener('change',calculate);
amounttwo.addEventListener('input',calculate);
swap.addEventListener('click',()=>{
    const temp = currencyone.value;
    currencyone.value = currencytwo.value;
    currencytwo.value = temp;
    calculate();
})


// auto calculate 
calculate();

