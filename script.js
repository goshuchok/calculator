function prov() {
  const pyt = document.getElementById('km').value;
  const sb = document.getElementById('money').value;
  const pb = document.getElementById('litr').value;
  const button = document.getElementById('ches');
  button.disabled = true;
  if (pyt.length != 0 && sb.length != 0 && pb.length != 0) {
    button.disabled = false;
  }
}
prov();
function calculate() {
  const register = document.getElementById('registration');
  register.style.display === 'block'
    ? (register.style.display = 'none')
    : (register.style.display = 'block');
  const pyt = document.getElementById('km').value;
  const sb = document.getElementById('money').value;
  const pb = document.getElementById('litr').value;

  const consumption = ((pb / pyt) * 100).toFixed(2);
  const average = ((sb * consumption) / 100).toFixed(2);
  const total = average * pyt;

  document.getElementById('total_fuel_cost').value = total;
  document.getElementById('consumption_res_input_100').value = consumption;
  document.getElementById('average_amount').value = average;
}

function prov2() {
  const fuel = document.getElementById('fuel_costs').value;
  const distances = document.getElementById('distance_trip').value;
  const gas = document.getElementById('gas_costs').value;
  const button = document.getElementById('ches2');
  button.disabled = true;
  if (fuel.length != 0 && distances.length != 0 && gas.length != 0) {
    button.disabled = false;
  }
}
prov2();

function calculation() {
  const register = document.getElementById('registration2');
  register.style.display === 'block'
    ? (register.style.display = 'none')
    : (register.style.display = 'block');
  const fuel = document.getElementById('fuel_costs').value;
  const distances = document.getElementById('distance_trip').value;
  const gas = document.getElementById('gas_costs').value;
  const kilometrs = document.getElementById('kilometr');
  const kilometr = document.getElementById('kilometring');

  const fuelCons = ((distances / 100) * fuel).toFixed(2);
  const averageCost = ((gas * fuel) / 100).toFixed(2);
  const totalCost = gas * fuelCons;
  kilometrs.innerText = distances;
  kilometr.innerText = distances;

  document.getElementById('fuel_consumption').value = fuelCons;
  document.getElementById('average_costs').value = averageCost;
  document.getElementById('total_cost').value = totalCost;
}
function clearFunc() {
  document.getElementById('clearForm').reset();
  document.getElementById('registration').style.display = 'none';
}
function clearFunc2() {
  document.getElementById('clearForm2').reset();
  document.getElementById('registration2').style.display = 'none';
}
