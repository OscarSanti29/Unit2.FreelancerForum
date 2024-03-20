const names = ['Alice', 'Bob', 'Carol', 'Carlos', 'Amy'];
const occupations = ['Writer', 'Teacher', 'Programmer', 'Baker', 'Plumber'];
const prices = [20, 30, 40, 50, 60, 70, 80];
const freelancers = [];
const maxLancers = 7;

const addRandomLancerIntervalId = setInterval(addRandomLancer, 1000);

let averagePrice = 0;

function render() {
  const lancersList = document.querySelector('#lancers');
  const averageTitle = document.querySelector('#average');
  lancersList.innerHTML = '';

  const lancerElements = freelancers.map(lancer => {
    const listItem = document.createElement('li');
    listItem.textContent = `${lancer.name} - ${lancer.occupation} - $${lancer.price}`;
    return listItem;
  });

  averageTitle.innerText = `The average price is $${averagePrice.toFixed(2)}`;
  lancersList.append(...lancerElements);
}

function addRandomLancer() {
  const randomName = names[Math.floor(Math.random() * names.length)];
  const randomOccupation = occupations[Math.floor(Math.random() * occupations.length)];
  const randomPrice = prices[Math.floor(Math.random() * prices.length)];

  freelancers.push({ name: randomName, occupation: randomOccupation, price: randomPrice });

  const totalPrices = freelancers.reduce((total, currentLancer) => total + currentLancer.price, 0);
  averagePrice = totalPrices / freelancers.length;

  console.log('Average price:', averagePrice);

  if (freelancers.length >= maxLancers) {
    clearInterval(addRandomLancerIntervalId);
  }
  render();
}
