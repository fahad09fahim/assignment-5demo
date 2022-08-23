document.getElementById('playerBudget-btn').addEventListener('click',function(){

    const perPlayer = document.getElementById("playerBudget-input");
    const perPlayerAmountString = perPlayer.value;
    const playerAmount = parseFloat(perPlayerAmountString) * 5;

    const playerCost = document.getElementById("playerExpenses-field");
    const playerCostValue = playerCost.innerText;
    const previousPlayercost = parseFloat(playerCostValue);
  
    const totalPlayerCost = previousPlayercost + playerAmount;
    playerCost.innerText = totalPlayerCost;
});

document.getElementById('totalCost-btn').addEventListener('click',function(){

    const managerCost = document.getElementById("managerInput");
    const managerCostString = managerCost.value;
    const managerCostValue = parseFloat(managerCostString);

    const coachCost = document.getElementById('coachInput');
    const coachCostString = coachCost.value;
    const coachCostValue = parseFloat(coachCostString);

    const total = document.getElementById("totalCost-field");
    const totalvalue = total.innerText;
    const previousTotal = parseFloat(totalvalue);

    const playerCost = document.getElementById("playerExpenses-field");
    const playerCostValue = playerCost.innerText;
    const previousPlayercost = parseFloat(playerCostValue);

    const totalAmount = previousTotal+ previousPlayercost + managerCostValue + coachCostValue  ;

    total.innerText = totalAmount;

});