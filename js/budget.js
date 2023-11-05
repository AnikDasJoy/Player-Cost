// document.getElementById('player-cost').addEventListener('click', function () {
//     const perPlayer = document.getElementById('per-player');
//     const perPlayerString = perPlayer.innerText;
//     const perPlayerValue = parseFloat(perPlayerString);
//     const perPlayerValueTotal = perPlayerValue * 5;

//     const playerExpense = document.getElementById('player-expense');
//     const playerExpenseString = playerExpense.innerText;
//     const playerExpenseValue = parseFloat(playerExpenseString);

//     const playerExpenseValueTotal = playerExpenseValue + perPlayerValueTotal;
//     playerExpense.innerText = playerExpenseValueTotal;

//     document.getElementById('coach-cost').addEventListener('click', function () {
//         const managerCost = document.getElementById('manager-total');
//         const managerCostString = managerCost.innerText;
//         const managerCostValue = parseFloat(managerCostString);

//         const coachCost = document.getElementById('coach-total');
//         const coachCostString = coachCost.innerText;
//         const coachCostValue = parseFloat(coachCostString);

//         const subTotal = document.getElementById('sub-total');
//         const subTotalString = subTotal.innerText;
//         const subTotalValue = parseFloat(subTotalString);

//         const grandTotal = playerExpenseValueTotal + managerCostValue + coachCostValue;
//         subTotal.innerText = grandTotal;
//     })

// })



document.getElementById('player-cost').addEventListener('click', function () {

    const perPlayerValue = getTextElementValueById('per-player');
    const perPlayerValueTotal = perPlayerValue * 5;
    const playerExpenseValue = getTextElementValueById('player-expense');
    const playerExpenseValueTotal = playerExpenseValue + perPlayerValueTotal;

    setTextElementValueById('player-expense', playerExpenseValueTotal);

    document.getElementById('coach-cost').addEventListener('click', function () {
        const managerCost = document.getElementById('manager-total');
        const managerCostString = managerCost.innerText;
        const managerCostValue = parseFloat(managerCostString);

        const coachCost = document.getElementById('coach-total');
        const coachCostString = coachCost.innerText;
        const coachCostValue = parseFloat(coachCostString);

        const subTotal = document.getElementById('sub-total');
        // const subTotalString = subTotal.innerText;
        // const subTotalValue = parseFloat(subTotalString);

        const grandTotal = playerExpenseValueTotal + managerCostValue + coachCostValue;
        subTotal.innerText = grandTotal;
    })
})




// document.getElementById('player-cost').addEventListener('click', function () {

//     const perPlayerValue = getTextElementValueById('per-player');
//     const perPlayerValueTotal = perPlayerValue * 5;
//     const playerExpenseValue = getTextElementValueById('player-expense');
//     const playerExpenseValueTotal = playerExpenseValue + perPlayerValueTotal;

//     setTextElementValueById('player-expense', playerExpenseValueTotal);

//     document.getElementById('coach-cost').addEventListener('click', function () {
//         const managerCostValue = getTextElementValueById('manager-total');
//         const coachCostValue = getTextElementValueById('coach-total');
//         const subTotalValue = getTextElementValueById('sub-total');

//         const grandTotal = playerExpenseValueTotal + managerCostValue + coachCostValue;
//         subTotal.innerText = grandTotal;
//     })
// })