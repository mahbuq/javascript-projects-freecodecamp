function checkCashRegister(price, cash, cid) {
  // currency unit dictionary
  var currencyUnit = {
    'PENNY': 1,
    'NICKEL': 5,
    'DIME': 10,
    'QUARTER': 25,
    'ONE': 100,
    'FIVE': 500,
    'TEN': 1000,
    'TWENTY': 2000,
    'ONE HUNDRED': 10000
  };
  var change = [];
  var status = '';
  // sum cid
  var cidSum = cid.reduce((sum, item) => sum += item[1], 0) * 100;
  // change to be returned
  var changeGive = (cash - price) * 100; // to use for the change account process
  var changeBackup = (cash - price) * 100; // to compare after
  // reverse cid to organize from highest
  var reversedCid = cid.reverse();

  // return change process
  reversedCid.forEach(item => {
    let currency = item[0]; // will be currency name
    let currencyValue = item[1] * 100; // value in cid
    let amount = 0; // amount of each currency that will be used
    while(changeGive >= currencyUnit[currency] && currencyValue > 0) { // while the amount to receive is bigger than the amount of the currency and there is still it on the cid
      amount += currencyUnit[currency]; // amount of coin
      changeGive -= currencyUnit[currency]; // remove from change to give, so it will know when to stop
      currencyValue -= currencyUnit[currency]; // remove from change available for that currency, so it will know when to stop 
    }
    if(amount !== 0) { 
      change.push([currency, amount / 100]);
    }
  })

  // status
  if(changeGive > 0) { // there is still change to give but no money
    status = "INSUFFICIENT_FUNDS";
    change = [];
  } else if(changeGive === 0 && cidSum === changeBackup) { // there is no change to give and the sum of cid is equal to the change
    status = "CLOSED";
    change = cid.reverse(); // cause it is reversed
  } else {
    status = "OPEN";
    change = change;
  }

  return {status: status, change: change};
}

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
