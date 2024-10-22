// get the money and pin

document.getElementById('input-add-btn')
    .addEventListener('click', function(event){
        event.preventDefault();

        const addMoneyInput = document.getElementById('input-amount-btn').value;

        const  pinInput = document.getElementById('input-pin-btn').value;

        const balance = document.getElementById('acc-balance').innerText;

        const addMoneyNumber = parseFloat(addMoneyInput);
        const balanceNumber = parseFloat(balance);
        const newBalance = addMoneyNumber+balanceNumber;

        document.getElementById('acc-balance').innerText = newBalance;
    })

    document.getElementById('cashout-btn')
    .addEventListener('click', function(event){
        event.preventDefault();

        const cashoutInput = document.getElementById('cashout-amount-btn').value;

        const  cashoutPinInput = document.getElementById('cashout-pin-btn').value;


        const balance = document.getElementById('acc-balance').innerText;

        const cashoutMoneyNumber = parseFloat(cashoutInput);
        const balanceNumber = parseFloat(balance);
        const newBalance = balanceNumber - cashoutMoneyNumber;

        document.getElementById('acc-balance').innerText = newBalance;
    })