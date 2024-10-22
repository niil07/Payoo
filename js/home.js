// get the money and pin

document.getElementById('input-add-btn')
    .addEventListener('click', function(event){
        event.preventDefault();

        const addMoneyInput = document.getElementById('input-amount-btn').value;
        console.log(addMoneyInput);

        const  pinInput = document.getElementById('input-pin-btn').value;
        console.log(pinInput);

        const balance = document.getElementById('acc-balance').innerText;
        console.log(balance);

        const addMoneyNumber = parseFloat(addMoneyInput);
        const balanceNumber = parseFloat(balance);
        const newBalance = addMoneyNumber+balanceNumber;

        document.getElementById('acc-balance').innerText = newBalance;
    })